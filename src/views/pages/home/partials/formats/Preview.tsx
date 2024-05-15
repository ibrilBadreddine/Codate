import { useStateContext } from "@/core/context/useStateContext";
import { DATE_FORMATS } from "@/core/data";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Preview = () => {
  const { selectedFormat, selectedLanguage, setFormat } = useStateContext();

  /**
   *
   * Get function code
   */
  const codeString = selectedFormat
    ? DATE_FORMATS.find(
        (date) => date.format === selectedFormat.format
      )?.functions.find((func) => func.language_id === selectedLanguage.id)
        ?.function
    : "";

  /**
   *
   * Copy function code
   */
  const [copy, setCopy] = useState<boolean>(false);
  
  const copyFunctionCode = () => {
    navigator.clipboard.writeText(codeString || "");
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

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
    <div
      className={
        codeString !== ""
          ? "preview-container preview-show"
          : "preview-container"
      }
    >
      <div className="code-box">
        {/* Head */}
        <div className="code-head">
          <div className="code-control">
            <button onClick={() => setFormat(null)} className="circle">
              <span className="material-symbols-outlined">
                arrow_back_ios_new
              </span>
              Back
            </button>
            <button className="circle" />
            <button className="circle" />
          </div>
          <div className="code-name">
            <p>do3bol.{selectedLanguage.id} -- ~/Randomiat</p>
          </div>
          <div className="code-actions">
            <button onClick={() => copyFunctionCode()} className="copy-action">
              {
                copy 
                ? <span className="material-symbols-outlined checked">check</span>
                : <span className="material-symbols-outlined">content_copy</span>
              }
              {copy ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="code-content">
          <SyntaxHighlighter
            language={
              selectedLanguage.name === "C#"
                ? "csharp"
                : selectedLanguage.name.toLocaleLowerCase()
            }
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
