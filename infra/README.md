# 🚧 Infrastructure as a code using Pulumi and Azure 🚧

> The code in this repository sets up free static website with custom domain and CI/CD deployment with Github using pulumi.

Here's a good article to read to to understand the flow of the setup

https://cj-hewett.medium.com/deploying-a-frontend-web-app-to-azure-static-web-app-with-pulumi-279347e59782

Before you proceed make sure you have installed the following:

1. Azure Cli: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli
   - Configure to use the right subscription after you login through `az login`
2. Pulumi: https://www.pulumi.com/docs/get-started/install/
   1. Before you proceed make sure you are familiar with pulumi's basic command.

> **⚠ REMINDER**
> Remember to create a github Personal Authentication Token and set it as secret config in pulumi using `pulumi config set gh_token <GITHUB_PAT_TOKEN_HERE> --secret` command.

Refer to the medium article above for the step by step workflow.

After setting up everything and successfully running `pulumi up` command, pull down the latest using `git pull` command.
You should find a new github workflow file under `.github/worflows` folder at root level.

> **💡Note**
> When you run `pulumi up` the first time, it'll error out and this is expected.
> The static site with CI/CD will be created but the setting up custom domain step will fail. This is because Azure needs to validate that you have pointed add a dns record for the new domain to azure website.
>
> We need the website url to configure the dns that is generated only after running `pulumi up` the first time. After the site is generated, go to your dns provider, (cloudflare in our case) and add a CName record pointing it to the azure site. Then run `pulumi up` again and the custom domain will be validated and configured properly in Azure.

In summary,

1. Run `pulumi up`
   - Example output:

```bash
Type                                        Name                        Status                  Info
+   pulumi:pulumi:Stack                         bk-portal-site-sample         **creating failed**     1 error
+   ├─ azure-native:resources:ResourceGroup     bk-portal-ui-sample           created
+   ├─ azure-native:web:StaticSite              staticSite                  created
+   └─ azure-native:web:StaticSiteCustomDomain  bkportaluiprodcustomdomain  **creating failed**     1 error

Diagnostics:
  pulumi:pulumi:Stack (bk-portal-site-sample):
    error: update failed

  azure-native:web:StaticSiteCustomDomain (bkportaluisamplecustomdomain):
    error: Code="BadRequest" Message="CNAME Record is invalid.  Please ensure the CNAME record has been created." Details=[{"Message":"CNAME Record is invalid.  Please ensure the CNAME record has been created."},{"Code":"BadRequest"},{"ErrorEntity":{"Code":"BadRequest","ExtendedCode":"51021","Message":"CNAME Record is invalid.  Please ensure the CNAME record has been created.","MessageTemplate":"{0} is invalid.  {1}","Parameters":["CNAME Record","Please ensure the CNAME record has been created."]}}]

Outputs:
  url: "example-static-site-url.2.azurestaticapps.net"

Resources:
    + 3 created

Duration: 17s
```

2. Copy the new website address that you'll get as ouput and setup the CNAME dns record in your dns provider pointing your desired domain name to the site url.
3. Run `pulumi up`

## Select and setup branch as target for CI/CD

> **⚠ REMINDER**
> Make sure that you have setup the new environment(example, QA, DEV, PROD, etc) in github under repository > settings > environments and added the secret named ALL in the new environment.
>
> You can encode your .env file add add it as a single string in the secret named ALL
>
> For windows you can use openssl to encode
>
> - Encoding example: `openssl base64 -in .env -out .env.encoded.txt`
> - Decoding (for verification) example: `Get-Content .env.encoded.txt | openssl base64 -d`
>
> If still confused what you do, copy the contents of the .env.encoded.txt file add as secret named ALL under the new environemnt

Add the branch name you want to setup as CI/CD branch for the new site:
You can the branch name under `branches` under `on:push:branches`.
Also add it under `on: pull_request_branches`
Example:

```yaml
on:
push:
  branches:
    - <your_branch_name_here>
pull_request:
  types: [opened, synchronize, reopened, closed]
  branches:
    - <your_branch_name_here>
```

## Increase node heap size

Next, Add the following to workflow file to increase node heap size.
This is so that the app build doesn't fail due to insufficient memory.

```yaml
env:
  NODE_OPTIONS: "--max_old_space_size=4096"
```

## Apply environment variables securely

Add the enviroment to the build_and_deploy_job
This is to add the environment variables to github secrets and apply during buildtime securely. Example: api endpoints for your site.

```yaml
environment: <env_you_are_setting_up>
```

example:

```yaml
environment: QA
```

Then add the following worflow step

```yaml
- name: Apply env variables
  id: write_file
  uses: timheuer/base64-to-file@v1.1
  with:
    fileName: ".env"
    fileDir: "./"
    encodedString: ${{ secrets.ALL }}
```

---

### Commit the file and perform pull request

At the end of it you should have a resource group created in azure with a static website and custom domain. You should also have a CI/CD pipeline using Github Worfklow that builds and deploys to the azure website automatically on any changes to the branch you have selected with proper environment variables securely applied.

---

Heres a sample github workflow file for reference.

```yaml
name: QA Site CI/CD

on:
  push:
    branches:
      - infra/pulumi-setup
      - qa
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - infra/pulumi-setup
      - qa

env:
  NODE_OPTIONS: "--max_old_space_size=4096"

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    environment: QA
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Apply env variables
        id: write_file
        uses: timheuer/base64-to-file@v1.1
        with:
          fileName: ".env"
          fileDir: "./"
          encodedString: ${{ secrets.ALL }}

      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_WONDERFUL_BUSH_025A90B0F }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: "upload"
          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######
          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig
          app_location: "/" # App source code path
          api_location: "" # Api source code path - optional
          output_location: "build" # Built app content directory - optional
          app_build_command: "npm run build" # Custom build command for app content - optional
          ###### End of Repository/Build Configurations ######

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_WONDERFUL_BUSH_025A90B0F }}
          action: "close"
```

<h1 align="center"> --- Happy Coding🐘 --- </h1>
