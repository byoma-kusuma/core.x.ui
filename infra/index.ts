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
  }
});
export const url = staticSite.contentDistributionEndpoint;
