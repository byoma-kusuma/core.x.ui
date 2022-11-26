import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

interface Props {
  onChange: (html: string) => void;
  initialHtml?: string;
}

export default function HtmlEditor(props: Props) {
  const { onChange, initialHtml } = props;

  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      if (!quillRef.current.loaded) {
        if (initialHtml) {
          quill.clipboard.dangerouslyPasteHTML(initialHtml);
        }
        quillRef.current.loaded = true;
      }
      quill.on("text-change", () => {
        onChange(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return <div ref={quillRef} style={{ width: "100%" }} />;
}
