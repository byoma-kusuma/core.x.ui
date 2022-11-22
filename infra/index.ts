import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as azure_native from "@pulumi/azure-native";

const config = new pulumi.Config();
const stack = pulumi.getStack();

const resourceGroup = new resources.ResourceGroup(`bk-portal-ui-${stack}`, {
  location: "eastus2"
});

const staticSite = new azure_native.web.StaticSite("staticSite", {
  branch: "infra/pulumi-setup",
  location: resourceGroup.location,
  name: `${stack}-ui`,
  repositoryUrl: "https://github.com/byoma-kusuma/core.x.ui",
  repositoryToken: config.require("gh_token"),
  resourceGroupName: resourceGroup.name,
  sku: {
    name: "Free",
    tier: "Free"
  },
  buildProperties: {
    appArtifactLocation: "build",
    appLocation: "/",
    appBuildCommand: "npm run build",
    apiLocation: "",
    // set the following to false to skip github workflow setup
    skipGithubActionWorkflowGeneration: false
  }
});

// this will fail the first time as the dns record needs to be added with your provider
// add a cname with pointing your desired domain name to the outputted url
// then run pulumi up again
new azure_native.web.StaticSiteCustomDomain(`bkportalui${stack}customdomain`, {
  domainName:
    stack === "prod"
      ? "portal.byomakusuma.com"
      : `${stack}.portal.byomakusuma.com`,
  name: staticSite.name,
  resourceGroupName: resourceGroup.name
});

export const url = staticSite.defaultHostname;
