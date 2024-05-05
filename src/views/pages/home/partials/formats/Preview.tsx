import { DATE_FORMATS } from "@/core/data";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Preview() {
  const codeString = DATE_FORMATS[0].functions[0].function;

  const customStyle = {
    lineHeight: "2",
    fontSize: "15px",
    borderRadius: "0 0 1em 1em",
  };
  return (
    <div className="preview-container">
      <div className="code-box">
        {/* Head */}
        <div className="code-head">
          <div className="code-control">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="code-name">
            <p>do3bol.js -- ~/Randomiat</p>
          </div>
          <div className="code-actions">
            <button className="copy-action">
              <span className="material-symbols-outlined">content_copy</span>
              Copy
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="code-content">
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            customStyle={customStyle}
            showLineNumbers
            wrapLines
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
