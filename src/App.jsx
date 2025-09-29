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
    dispatch({ type: constantData.reducerActionType.socketSet, payload: { socket: socket } });
  }, []);
  return <CodeSpace />;
};

export default App;
