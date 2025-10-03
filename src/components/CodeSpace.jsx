import React from "react";
import CodeEditor from "./external/CodeEditor";
import FileTree from "./FileTree";
import TerminalManager from "./TerminalManager";

function CodeSpace() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div style={{width:"15vw",height:"100vh",backgroundColor: "#181818", color: "white", borderRight:"1px solid blue"}}>
        <FileTree />
      </div>
      <div style={{display:"flex",flexDirection:"column",width:"85vw"}}>
        <div>
        <CodeEditor height={"60vh"}/>
        </div>
        <div style={{borderTop:"1px solid blue" ,padding:"4px", backgroundColor: "black", height: "40vh"}}>
        <TerminalManager />
        </div>
      </div>
    </div>
  );
}

export default CodeSpace;
