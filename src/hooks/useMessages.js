import { fetchMessages } from "../services/functions";
import { useState, useEffect } from "react";

export const useRoomMessages = (roomName) => {
  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const server = "http://localhost:3001";
    setMessages(undefined);
    setLoading(true);
    setError(false);

    const options = {
      method: "GET",
      headers: { token: localStorage.getItem("token") },
    };
    new Promise((resolve, reject) => {
      setTimeout(() => {});
    });
  });

  return [messages, loading, error];
};
