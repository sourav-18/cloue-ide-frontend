import React, { use, useEffect, useState } from "react";
import socketKey from "../utils/socketKey.utils";
import constantData from "../utils/constant.utils";
import { AllState } from "../context/Context";
import DirOpenIcon from "./Icons/DirOpenIcon";
import DirCloseIcon from "./Icons/DirCloseIcon";
import FileIcon from "./Icons/FileIcon";
import FileCreate from "./FileCreate";
import FolderCreate from "./FolderCreate";

function FileView({ item, socket }) {
  const { state: { selectedFile, fileCreateDirPath, folderCreateDirPath, selectedDir }, dispatch } = AllState();

  const [files, setFiles] = useState([]);
  const [dirOpen, setDirOpen] = useState(false);

  let fileColorStyle = {}
  if (selectedFile == item.path || selectedDir == item.path) {
    fileColorStyle = { background: "#4e6072ff", color: "#ffffff" }
  }

  let style = {
    file: {
      cursor: "pointer",
      display: item.name === "workspaces" ? "none" : "flex",
      // alignItems: "center",
      gap:6,
      ...fileColorStyle
    }
  }

  function handleFileOpen({ isRootFile, event, item }) {
    if (event) {
      event.stopPropagation();
    }
    //todo loading bar
    if (item.type == "file") {
      dispatch({ type: constantData.reducerActionType.selectedDir, payload: { selectedDir: null } });
      dispatch({ type: constantData.reducerActionType.selectedFile, payload: { selectedFile: item.path } });
    } else {
      if (!isRootFile) {
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
      handleFileOpen({ isRootFile: true, item: item });
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
    <div style={{ marginLeft: 1, padding: 3 }}>
      <div onClick={(e) => handleFileOpen({ event: e, item: item })} style={style.file}>
        {item.type == "file" ? <FileIcon fileName={item.name} /> : dirOpen ? <DirOpenIcon/> : <DirCloseIcon/>}
        <div>{item.name}</div>
      </div>
      {dirOpen &&
        files?.map((innerItem, innerIndex) => {
          return <FileView item={innerItem} key={innerIndex} socket={socket} />;
        })}
      {item.path==fileCreateDirPath&&<FileCreate handleFileCrate={handleFileCrate}/>}
      {item.path==folderCreateDirPath&&<FolderCreate handleFolderCrate={handleFolderCrate}/>}
    </div>
  );



}

export default FileView;
