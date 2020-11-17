import React from "react";
import type { Language } from "prism-react-renderer";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { mdx } from "@mdx-js/react";
import theme from "prism-react-renderer/themes/dracula";
import styles from "./code.module.scss";
import CopyToClipboard from "react-copy-to-clipboard";
import { ClassNames } from "../../utils/class-names";

const Code: React.FC<{ className: string; live: boolean; render: boolean }> = ({
  children,
  className,
  live,
  render,
}) => {
  const language = className.replace(/language-/, "") as Language;
  const code = String(children).trim();

  if (live) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={code} transformCode={(code) => "/** @jsx mdx */" + code} scope={{ mdx }}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={code}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <pre className={ClassNames(className, styles.pre)} style={{ ...style }}>
            <div className={styles.code}>
              <CopyToClipboard text={code} onCopy={() => alert("Copied!")}>
                <button>Copy</button>
              </CopyToClipboard>
            </div>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </>
      )}
    </Highlight>
  );
};

export { Code };
