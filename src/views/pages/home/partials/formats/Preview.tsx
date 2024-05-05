import { DATE_FORMATS } from "@/core/data";
import type { DateFormat, Language } from "@/core/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PreviewProps {
  selectedLang: Language;
  selectedFormat: DateFormat | null;
  setFormat: (date: DateFormat | null) => void;
}

export const Preview: React.FC<PreviewProps> = ({ selectedLang, selectedFormat, setFormat }) => {
  /**
   *
   * Get function code
   */
  const codeString = selectedFormat
    ? DATE_FORMATS.find(
        (date) => date.format === selectedFormat.format
      )?.functions.find((func) => func.language_id === selectedLang.id)?.function
    : "";

  /**
   * 
   * Copy function code
   */
  const copyFunctionCode = () => {
    navigator.clipboard.writeText(codeString || "");
  }

  /**
   * 
   * Custom config
   */
  const customStyle = {
    lineHeight: "2",
    fontSize: "15px",
    borderRadius: "0 0 1em 1em",
  };
  return (
    <div className={codeString !== "" ? "preview-container preview-show" : "preview-container"}>
      <div className="code-box">
        {/* Head */}
        <div className="code-head">
          <div className="code-control">
            <button onClick={() => setFormat(null)} className="circle">
              <span className="material-symbols-outlined">close</span>
            </button>
            <button className="circle" />
            <button className="circle" />
          </div>
          <div className="code-name">
            <p>do3bol.{selectedLang.id} -- ~/Randomiat</p>
          </div>
          <div className="code-actions">
            <button onClick={() => copyFunctionCode()} className="copy-action">
              <span className="material-symbols-outlined">content_copy</span>
              Copy
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="code-content">
          <SyntaxHighlighter
            language={selectedLang.name === "C#" ? "csharp" : selectedLang.name.toLocaleLowerCase()}
            style={nightOwl}
            customStyle={customStyle}
            showLineNumbers
            wrapLines
          >
            {codeString || ""}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Preview;
