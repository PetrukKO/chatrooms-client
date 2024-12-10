import { useParams, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Messages from "../components/Messages";
import SendMessage from "../components/SendMessage";
import { isExpired, getToken } from "../services/token";

export default function Room() {
  const { url } = useParams();
  const token = getToken();
  if (!token) {
    window.location.href = "/login";
    return;
  }
  if (isExpired(token)) {
    return;
  }
  return (
    <>
      <Header />
      <p>{url}</p>
      <Messages room={url} />
      <SendMessage room={url} />
    </>
  );
}
