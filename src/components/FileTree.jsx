import React, { useEffect, useState } from "react";
import socketKey from "../utils/socketKey.utils";
import FileView from "./FileView";
import { AllState } from "../context/Context";

function FileTree() {
  const [files, setFiles] = useState([]);
  const { state: { socket, initialDirPath } } = AllState();
  useEffect(() => {
    initSocket();
  }, [initialDirPath]);

  function initSocket() {
    if (!socket) return;
    socket.emit(socketKey.emit.dirBaseFile, { dirPath: initialDirPath });
    socket.on(socketKey.on.dirBaseFile, (data) => {
      console.log(data)
      if (data.statusCode == 200&&data.data?.baseFiles) {
          setFiles(data.data?.baseFiles);
      }
    });
  }

  return (
    <div style={{ flex: 1, backgroundColor: "#1D163D", color: "white", height: "100vh", overflowY: "auto", }}>
      {
        files.map((item, index) => {
          return <FileView item={item} key={index} socket={socket} />
        })
      }
    </div>
  );
}

export default FileTree;
