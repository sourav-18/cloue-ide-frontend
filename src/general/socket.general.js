import { io } from "socket.io-client";

export const socketInit = (socketUrl) => {
  socketUrl = "http://localhost:7002";
  const socket = io(socketUrl, {
    reconnectionDelayMax: 10000,
  });

  socket.on('connect', () => {
    console.log('socket connect')
  })
  return socket
}

