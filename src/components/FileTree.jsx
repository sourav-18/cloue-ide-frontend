import React, { useEffect, useState } from "react";
import socketKey from "../utils/socketKey.utils";
import FileView from "./FileView";
import { AllState } from "../context/Context";
import constantData from "../utils/constant.utils";
import { FolderPlus, FilePlus } from 'lucide-react';

function FileTree() {
  const [files, setFiles] = useState([]);
  const [filCreateSignal, setFileCreateSignal] = useState([]);
  const { state: { socket, selectedDir }, dispatch } = AllState();
  useEffect(() => {
    initSocket();
  }, [socket]);

  function initSocket() {
    if (!socket) return;
    socket.on(socketKey.on.initialDirPath, (data) => {
      if (data.statusCode == 200 && data.data) {
        dispatch({ type: constantData.reducerActionType.selectedFile, payload: { selectedFile: data.data.filePath } });
        dispatch({ type: constantData.reducerActionType.selectedDir, payload: { selectedDir: data.data.dirPath } })
        setFiles([data.data.rootDirData]);
      }
    })
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
    <div
    onClick={() => console.log("onclick")}>
      <FilePlus onClick={(e) => handleFileCreateInitiate(e)} cursor="pointer"/>
      <FolderPlus onClick={(e) => handleFolderCreateInitiate(e)} cursor="pointer"/>
      {
        files.map((item, index) => {
          return <FileView item={item} key={index} socket={socket} />
        })
      }
    </div>
  );
}

export default FileTree;
