import { useState } from "react";
import { decodeToken, isExpired } from "../services/token";

function Header() {
  const [user, setUser] = useState(localStorage.getItem("token"));
  //displays logged user or button authorize
  function UserDisplay() {
    const token = localStorage.getItem("token");
    if (token) {
      if (isExpired(token)) {
        localStorage.removeItem("token");
        setUser("null");
        window.location.href = "/login";
        return;
      }
      const decoded = decodeToken(token);
      setUser(decoded.login);
      return <div style={{ color: decoded.color }}>{decoded.login}</div>;
    }
    return (
      <div>
        <a href="/login">
          <button>Авторизуватися</button>
        </a>
      </div>
    );
  }
  //appears if authorized
  function DeleteToken() {
    if (localStorage.getItem("token")) {
      return (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setUser(localStorage.getItem("token"));
          }}
        >
          Вийти
        </button>
      );
    }
    return;
  }

  return (
    <div id="header">
      <h1>Chatrooms</h1>
      <nav id="navbar">
        <ul>
          <li>
            <a href="http://localhost:3001/">
              <button>На головну</button>
            </a>
          </li>
          <li>
            <DeleteToken />
          </li>
          <li>
            <UserDisplay />
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
