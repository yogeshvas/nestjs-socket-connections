/** @format */

import { io } from "socket.io-client";

export function connectWS() {
  return io("http://localhost:3000");
}
