import React, { useEffect, useState } from "react";
import CodeSpace from "./components/CodeSpace";
import { socketInit } from "./general/socket.general.js";
import constantData from "./utils/constant.utils.js";
import { AllState } from "./context/Context.jsx";
import socketKey from "./utils/socketKey.utils.js";

const App = () => {
  const { dispatch } = AllState();
  useEffect(() => {
    let socket = socketInit();
    dispatch({ type: constantData.reducerActionType.socketSet, payload: { socket: socket } })
    socket.on(socketKey.on.initialDirPath, (data) => {
      if (data.statusCode == 200 && data.data) {
        dispatch({ type: constantData.reducerActionType.initialDirPath, payload: { initialDirPath: data.data.dirPath } })
        dispatch({ type: constantData.reducerActionType.selectedFile, payload: { selectedFile: data.data.filePath } })
      }
    })
  }, []);
  return <CodeSpace />;
};

export default App;
