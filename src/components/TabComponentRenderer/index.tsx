import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

export interface SchemaItem {
  label: string;
  key: string;
  component: React.ReactNode;
}

interface Props {
  defaultActiveKey?: string;
  schema: Array<SchemaItem>;
}

function a11yProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function TabComponentRenderer(props: Props) {
  const { defaultActiveKey, schema } = props;

  const [activeTab, setActiveTab] = React.useState<string>(
    defaultActiveKey || schema[0]?.key
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={(_, v) => {
            setActiveTab(v);
          }}
          aria-label="basic tabs example"
        >
          {schema.map((item) => (
            <Tab
              key={item.key}
              label={item.label}
              {...a11yProps(item.key)}
              value={item.key}
            />
          ))}
        </Tabs>
      </Box>
      {schema.map((item) => (
        <TabPanel value={activeTab || ""} key={item.key} index={item.key}>
          {item.component}
        </TabPanel>
      ))}
    </Box>
  );
}
