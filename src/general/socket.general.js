import { io } from "socket.io-client";

export const socketInit = (socketUrl) => {
  const socket = io(socketUrl, {
    reconnectionDelayMax: 10000,
  });

  socket.on('connect', () => {
    console.log('socket connect')
  })
  return socket
}

