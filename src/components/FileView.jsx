import React, { useEffect, useState } from "react";
import socketKey from "../utils/socketKey.utils";
import constantData from "../utils/constant.utils";
import { AllState } from "../context/Context";

function FileView({ item, socket }) {
  const { state: { selectedFile,fileCreateDirPath }, dispatch } = AllState();
  const [files, setFiles] = useState([]);

  const [dirOpen, setDirOpen] = useState(false);


  function handleFileOpen(e,item) {
      e.stopPropagation();
    //todo loading bar
    if (item.type == "file") {
      dispatch({ type: constantData.reducerActionType.selectedFile, payload: { selectedFile: item.path } })
      return;
    };
    dispatch({ type: constantData.reducerActionType.selectedDir, payload: { selectedDir: item.path } })
    setDirOpen(!dirOpen);
    if (!dirOpen) {
      socket?.emit(socketKey.emit.dirBaseFile, { dirPath: item.path }, (response) => {
        console.log(response)
        if (response.statusCode === 200 && response.data) {
          setFiles(response.data?.baseFiles);
        }
      }
      )
    }
  }

  function handleFileCrate(e){
        e.stopPropagation();
    if(e.key==='Enter'){
     console.log(e.target.value)
    }
  }
  let fileColorStyle = {}
  if (selectedFile == item.path) {
    fileColorStyle = { background: "yellow", color: "black" }
  }
  const style = {
    file: {
      cursor: "pointer",
      ...fileColorStyle
    }
  }

  return (
    <div style={{ marginLeft: 2, padding: 3 }}>
      <div onClick={(e) => handleFileOpen(e,item)} style={style.file}>
        {item.type == "file" ? "." : dirOpen ? "↓" : ">"}
        {item.name}
      </div>
      {dirOpen &&
        files?.map((innerItem, innerIndex) => {
          return <FileView item={innerItem} key={innerIndex} socket={socket} />;
        })}
        {item.path==fileCreateDirPath&&<input autoFocus={true} onKeyDown={handleFileCrate}></input>}
    </div>
  );



}

export default FileView;
