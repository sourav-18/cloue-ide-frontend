import React, { useContext, useEffect, useRef, useState } from "react";
import Editor, { DiffEditor } from "@monaco-editor/react";
import socketKey from "../../utils/socketKey.utils";
import { AllState } from "../../context/Context";

function CodeEditor() {
  const {state: { selectedFile,socket },dispatch} = AllState();
  const [fileContent, setFileContent] = useState("");
  useEffect(() => {
    loadFileContent(selectedFile);
  }, [selectedFile, socket]);

  useEffect(() => {
    loadSocketOn();
  }, [socket]);

  function loadFileContent(currentFile) {
    if (!currentFile) return;
    socket?.emit(socketKey.emit.fileContent, { filePath: currentFile });
  }

  function loadSocketOn() {
    socket?.on(socketKey.on.fileContent, (data) => {
      if (data.statusCode == 200) {
        if (data.data) {
          let enc = new TextDecoder("utf-8");
          const text = enc.decode(data.data);
          setFileContent(text);
        }
      }
    });
  }

  function handleOnchange(value,event){
    socket?.emit(socketKey.emit.fileContentSync,{filePath:selectedFile,changes:event.changes});
  }

  return (
    <div style={{ flex: 5 }}>
      <Editor
        // height="100vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={fileContent}
        onChange={(value,event)=>handleOnchange(value,event)}
      />
    </div>
  );
}

export default CodeEditor;
