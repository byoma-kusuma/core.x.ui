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
      {data.map(({ text, title }, i) => (
        <div />
      ))}
    </div>
  );
}
