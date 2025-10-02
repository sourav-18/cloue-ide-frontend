import React from "react";
import CodeEditor from "./external/CodeEditor";
import FileTree from "./FileTree";
import TerminalManager from "./TerminalManager";

function CodeSpace() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      {/* Sidebar (FileTree) */}
      <div
        style={{
          width: "250px", // fixed default width
          minWidth: "200px",
          maxWidth: "400px",
          borderRight: "1px solid #333",
          background: "#1e1e1e",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FileTree />
      </div>

      {/* Main area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          background: "#252526",
        }}
      >
        {/* Code editor (takes remaining height above terminal) */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <CodeEditor />
        </div>

        {/* Terminal at bottom */}
        <div
          style={{
            height: "30%",
            minHeight: "150px",
            borderTop: "1px solid #333",
            background: "#1e1e1e",
          }}
        >
          <TerminalManager />
        </div>
      </div>
    </div>
  );
}

export default CodeSpace;
