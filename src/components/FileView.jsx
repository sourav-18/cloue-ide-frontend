import React, { useEffect, useState } from "react";
import socketKey from "../utils/socketKey.utils";
import constantData from "../utils/constant.utils";
import { AllState } from "../context/Context";

function FileView({ item, socket }) {
    const {dispatch}=AllState();
  const [files, setFiles] = useState([]);

  const [dirOpen, setDirOpen] = useState(false);

  function handleFileOpen(item) {
    //todo loading bar
    if (item.type == "file") {
      dispatch({type:constantData.reducerActionType.selectedFile,payload:{selectedFile:item.path}})
      return;
    };
    setDirOpen(!dirOpen);
    if (!dirOpen) {
      socket?.emit(socketKey.emit.dirBaseFile, { dirPath: item.path });
      socket?.on(socketKey.on.dirBaseFile, (data) => {
        if (data.statusCode == 200) {
          if (data.data.baseFiles) {
            if(item.path==data.data.dirPath){
              setFiles(data.data.baseFiles);
            }
          }
        }
      });
    }
  }

  return (
    <div style={{ marginLeft: 2, padding: 3 }}>
      <div onClick={() => handleFileOpen(item)} style={{ cursor: "pointer" }}>
        {item.type == "file" ? "." : dirOpen ? "↓" : ">"}
        {item.name}
      </div>
      {dirOpen &&
        files?.map((innerItem, innerIndex) => {
          return <FileView item={innerItem} key={innerIndex} socket={socket} />;
        })}
    </div>
  );
}

export default FileView;
