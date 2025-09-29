import React, { useEffect, useState } from "react";
import socketKey from "../utils/socketKey.utils";
import constantData from "../utils/constant.utils";
import { AllState } from "../context/Context";

function FileView({ item, socket }) {
  const { state: { selectedFile, fileCreateDirPath, folderCreateDirPath, selectedDir }, dispatch } = AllState();
  const [files, setFiles] = useState([]);
  const [dirOpen, setDirOpen] = useState(false);

  let fileColorStyle = {}
  if (selectedFile == item.path || selectedDir == item.path) {
    fileColorStyle = { background: "yellow", color: "black" }
  }

  let style = {
    file: {
      cursor: "pointer",
      display: item.name === "workspaces" ? "none" : "block",
      ...fileColorStyle
    }
  }

  function handleFileOpen({isRootFile,event, item}) {
    if (event) {
      event.stopPropagation();
    }
    //todo loading bar
    if (item.type == "file") {
      dispatch({ type: constantData.reducerActionType.selectedDir, payload: { selectedDir: null } });
      dispatch({ type: constantData.reducerActionType.selectedFile, payload: { selectedFile: item.path } });
    } else {
      if(!isRootFile){
        dispatch({ type: constantData.reducerActionType.selectedFile, payload: { selectedFile: null } });
        dispatch({ type: constantData.reducerActionType.selectedDir, payload: { selectedDir: item.path } });
      }
      setDirOpen(!dirOpen);
      if (!dirOpen) {
        socket?.emit(socketKey.emit.dirBaseFile, { dirPath: item.path }, (response) => {
          if (response.statusCode === 200 && response.data) {
            let responseData = response.data?.baseFiles.sort((item) => item.type == "dir" ? -1 : 1);
            setFiles(responseData);
          }
        }
        )
      }
    }
    return;
  }

  useEffect(() => {
    if (item.name === "workspaces") {
      // style.file.display= "none";
      handleFileOpen({isRootFile:true,item:item});
    }
  }, []);

  function handleFileCrate(e) {
    e.stopPropagation();
    if (e.key === 'Enter') {
      if (e.target.value?.length) {
        socket?.emit(socketKey.emit.newFileCreate, { dirPath: item.path, fileName: e.target.value }, (response) => {
          if (response.statusCode === 200 && response.data) {
            setFiles([...files, response.data])
          }
        })
      }
      dispatch({ type: constantData.reducerActionType.fileCreateDirPath, payload: { fileCreateDirPath: null } })
    }
  }

  function handleFolderCrate(e) {
    e.stopPropagation();
    if (e.key === 'Enter') {
      socket?.emit(socketKey.emit.newDirCreate, { dirPath: item.path, dirName: e.target.value }, (response) => {
        console.log(response)
        if (response.statusCode === 200 && response.data) {
          setFiles([...files, response.data])
        }
        dispatch({ type: constantData.reducerActionType.folderCreateDirPath, payload: { folderCreateDirPath: null } })
      })
    }
  }




  return (
    <div style={{ marginLeft: 2, padding: 3 }}>
      <div onClick={(e) => handleFileOpen({event:e, item:item})} style={style.file}>
        {item.type == "file" ? "." : dirOpen ? "↓" : ">"}
        {item.name}
      </div>
      {dirOpen &&
        files?.map((innerItem, innerIndex) => {
          return <FileView item={innerItem} key={innerIndex} socket={socket} />;
        })}
      {item.path == fileCreateDirPath && <input autoFocus={true} onKeyDown={handleFileCrate}></input>}
      {item.path == folderCreateDirPath && <input autoFocus={true} onKeyDown={handleFolderCrate}></input>}
    </div>
  );



}

export default FileView;
