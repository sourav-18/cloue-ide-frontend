import React, { useContext, useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import socketKey from "../../utils/socketKey.utils";
import { AllState } from "../../context/Context";

function CodeEditor({ height }) {
  const { state: { selectedFile, socket, }, dispatch } = AllState();
  const [fileContent, setFileContent] = useState("");
  const [defaultLanguage, setDefaultLanguage] = useState("javascript");

  useEffect(() => {
    loadFileContent(selectedFile);
    handleSetLanguage(selectedFile);
  }, [selectedFile, socket]);

  useEffect(() => {
    loadSocketOn();
  }, [socket]);

  function handleSetLanguage(filePath) {
    if (!filePath) return;
    const extension = filePath.split('.').pop().toLowerCase();
    let language = null;

    switch (extension) {
      // JavaScript / TypeScript
      case 'js':
      case 'jsx':
        language = 'javascript';
        break;
      case 'ts':
      case 'tsx':
        language = 'typescript';
        break;

      // Web
      case 'html':
      case 'htm':
        language = 'html';
        break;
      case 'css':
        language = 'css';
        break;
      case 'scss':
      case 'sass':
        language = 'scss';
        break;
      case 'less':
        language = 'less';
        break;
      case 'xml':
      case 'xaml':
        language = 'xml';
        break;

      // Data formats
      case 'json':
        language = 'json';
        break;
      case 'yaml':
      case 'yml':
        language = 'yaml';
        break;
      case 'toml':
        language = 'toml';
        break;
      case 'ini':
        language = 'ini';
        break;

      // Backend / scripting
      case 'py':
        language = 'python';
        break;
      case 'java':
        language = 'java';
        break;
      case 'c':
        language = 'c';
        break;
      case 'cpp':
      case 'cc':
      case 'cxx':
      case 'hpp':
        language = 'cpp';
        break;
      case 'cs':
        language = 'csharp';
        break;
      case 'go':
        language = 'go';
        break;
      case 'rs':
        language = 'rust';
        break;
      case 'php':
        language = 'php';
        break;
      case 'rb':
        language = 'ruby';
        break;
      case 'sh':
      case 'bash':
        language = 'shell';
        break;
      case 'ps1':
        language = 'powershell';
        break;

      // Markup & text
      case 'md':
      case 'markdown':
        language = 'markdown';
        break;
      case 'txt':
      case 'log':
        language = 'plaintext';
        break;

      // Config
      case 'dockerfile':
        language = 'dockerfile';
        break;
      case 'env':
        language = 'dotenv';
        break;

      default:
        language = 'plaintext';
        break;
    }

    setDefaultLanguage(language);
  }

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

  function handleOnchange(value, event) {
    socket?.emit(socketKey.emit.fileContentSync, { filePath: selectedFile, changes: event.changes });
  }


  return (
    <div>
      <Editor
        height={height}
        language={defaultLanguage}
        theme="vs-dark"
        value={fileContent}
        onChange={(value, event) => handleOnchange(value, event)}
      />
    </div>
  );
}

export default CodeEditor;
