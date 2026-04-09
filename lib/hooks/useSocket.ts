"use client";

import { useEffect, useState } from "react";
import { io, type Socket } from "socket.io-client";

type UseSocketParams = {
  userId: string;
  spaceId: string | null;
};

export function useSocket({ userId, spaceId }: UseSocketParams) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!userId || !spaceId) {
      setSocket(null);
      setIsConnected(false);
      return;
    }

    const socketClient: Socket = io("http://localhost:3001", {
      transports: ["websocket"],
      auth: {
        userId,
        spaceId,
      },
    });

    const handleConnect = () => setIsConnected(true);
    const handleDisconnect = () => setIsConnected(false);

    socketClient.on("connect", handleConnect);
    socketClient.on("disconnect", handleDisconnect);

    setSocket(socketClient);
    setIsConnected(socketClient.connected);

    return () => {
      socketClient.off("connect", handleConnect);
      socketClient.off("disconnect", handleDisconnect);
      socketClient.disconnect();
      setSocket(null);
      setIsConnected(false);
    };
  }, [userId, spaceId]);

  return { socket, isConnected };
}
