import { createRoot } from "react-dom/client";

export const createTestNode = () => {
  const testComponentNode = document.createElement("testNode");
  return createRoot(testComponentNode);
};
