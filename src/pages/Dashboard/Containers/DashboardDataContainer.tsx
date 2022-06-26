import * as React from "react";

const data = [
  { text: "hello world", title: "New Title" },
  { text: "hello world", title: "New Title" },
  { text: "hello world", title: "New Title" },
  { text: "hello world", title: "New Title" },
  { text: "hello world", title: "New Title" },
  { text: "hello world", title: "New Title" }
];

export default function DashboardDataContainer() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {data.map((_, i) => (
        <div key={i} />
      ))}
    </div>
  );
}
