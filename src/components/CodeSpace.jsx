import React, { useEffect } from "react";
import CodeEditor from "./external/CodeEditor";
import FileTree from "./FileTree";
import TerminalManager from "./TerminalManager";
import { AllState } from "../context/Context";
import socketKey from "../utils/socketKey.utils";
import constantData from "../utils/constant.utils";

function CodeSpace() {
  const { state: { socket }, dispatch } = AllState();
  useEffect(() => {
    if(!socket)return;
    socket.on(socketKey.on.initialFileLoadComplete, (data) => {
      if (data.statusCode === 200 && data.data)
        dispatch({ type: constantData.reducerActionType.isInitialFileLoadComplete, payload: { isInitialFileLoadComplete: true } });
    })

  }, [socket]);
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div style={{ width: "15vw", height: "100vh", backgroundColor: "#181818", color: "white", borderRight: "1px solid blue" }}>
        <FileTree />
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "85vw" }}>
        <div>
          <CodeEditor height={"60vh"} />
        </div>
        <div style={{ borderTop: "1px solid blue", padding: "4px", backgroundColor: "black", height: "40vh" }}>
          <TerminalManager />
        </div>
      </div>
    </div>
  );
}

export default CodeSpace;
