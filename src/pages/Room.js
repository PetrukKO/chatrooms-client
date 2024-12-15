import { useParams, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Messages from "../components/Messages";
import SendMessage from "../components/SendMessage";
import { isExpired, getToken, removeToken } from "../services/token";

export default function Room() {
  const { url } = useParams();
  const token = getToken();
  if (!token) {
    return (window.location.href = "/login");
  }
  if (isExpired(token)) {
    removeToken();
    return;
  }
  return (
    <>
      <Header />
      <h2>{url}</h2>
      <Messages room={url} />
      <SendMessage room={url} />
    </>
  );
}
