import { Terminal } from '@xterm/xterm'
import { useEffect, useRef, useState } from 'react';
import '@xterm/xterm/css/xterm.css';
import socketKey from "../utils/socketKey.utils";
import { AllState } from '../context/Context';

function TerminalManager() {
  const terminalRef = useRef();
  const [terminalInfo, setTerminalInfo] = useState(null);
  const { state: { socket } } = AllState();

  useEffect(() => {
    if (!socket) return;

    socket.emit(socketKey.emit.terminalRequest, {}, (response) => {
      if (response.statusCode === 200 && response.data) {
        term.onData(data => {
          socket.emit(socketKey.emit.terminalWrite, {
            terminalId: response.data.terminalId,
            data: data,
          })
        })
      }
    })

    const term = new Terminal({
      rows: 20,
    });

    term.open(terminalRef.current);



    socket.on(socketKey.on.terminalData, data => {
      term.write(data.data)
    })

  }, [socket])

  return (
    <div ref={terminalRef} id="terminal" />
  )
}

export default TerminalManager