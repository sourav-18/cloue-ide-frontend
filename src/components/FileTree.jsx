import React, { useEffect, useState } from "react";
import socketKey from "../utils/socketKey.utils";
import FileView from "./FileView";
import { AllState } from "../context/Context";
import constantData from "../utils/constant.utils";

function FileTree() {
  const [files, setFiles] = useState([]);
  const [filCreateSignal, setFileCreateSignal] = useState([]);
  const { state: { socket, initialDirPath, selectedFile, selectedDir }, dispatch } = AllState();
  useEffect(() => {
    initSocket();
  }, [initialDirPath]);

  function initSocket() {
    if (!socket) return;
    socket.emit(socketKey.emit.dirBaseFile, { dirPath: initialDirPath }, (response) => {
      if (response.statusCode === 200 && response.data) {
        console.log(response.data)
        dispatch({ type: constantData.reducerActionType.selectedDir, payload: { selectedDir: response.data.dirPath } })
        setFiles(response.data?.baseFiles);
        // setFiles([
        //   {
        //     name:"workspaces",
        //     path:"/workspaces",
        //     type:"dir"
        //   }
        // ]);
      }
    });
  }

  const handleFileCreateInitiate = (e) => {
    e.stopPropagation();
    dispatch({ type: constantData.reducerActionType.folderCreateDirPath, payload: { folderCreateDirPath: null } })
    dispatch({ type: constantData.reducerActionType.fileCreateDirPath, payload: { fileCreateDirPath: selectedDir } });
  }

  const handleFolderCreateInitiate = (e) => {
    e.stopPropagation();
    dispatch({ type: constantData.reducerActionType.fileCreateDirPath, payload: { fileCreateDirPath: null } });
    dispatch({ type: constantData.reducerActionType.folderCreateDirPath, payload: { folderCreateDirPath: selectedDir } });
  }

  return (
    <div style={{ flex: 1, backgroundColor: "#1D163D", color: "white", height: "100vh", overflowY: "auto", }} onClick={() => console.log("onclick")}>
      <button onClick={(e) => handleFileCreateInitiate(e)}>file create</button>
      <button onClick={(e) => handleFolderCreateInitiate(e)}>folder create</button>
      {
        files.map((item, index) => {
          return <FileView item={item} key={index} socket={socket} />
        })
      }
    </div>
  );
}

export default FileTree;
