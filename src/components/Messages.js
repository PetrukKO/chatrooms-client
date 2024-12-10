import { fetchMessages } from "../services/messagesData";
import { useState, useEffect } from "react";

function Message(mes) {
  return (
    <li key={mes.message._id}>
      <div id="room">
        <h3 style={{ color: mes.message.color }}>{mes.message.author.login}</h3>
        <p>{mes.message.body}</p>
      </div>
    </li>
  );
}
const Messages = ({ room }) => {
  const url = room;
  console.log(url);
  const [messages, setMessages] = useState([]);
  try {
    useEffect(() => {
      const full_url = `http://localhost:3000/rooms/${url}`;
      fetch(full_url, {
        method: "GET",
        headers: { token: localStorage.getItem("token") },
      })
        .then((res) => res.json())
        .then((res) => {
          setMessages(res);
        });
    }, url);
  } catch (e) {
    return <h2>Помилка при завантаженні повідомлень</h2>;
  }
  const listMessages = messages.map((message) => {
    return <Message message={message} />;
  });

  return (
    <div id="room-div-list">
      <ul id="rooms-list">{listMessages}</ul>
    </div>
  );
};
export default Messages;
