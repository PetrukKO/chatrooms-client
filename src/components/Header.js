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
      return (
        <div
          id="user-display"
          className="inline"
          style={{ color: decoded.color }}
        >
          <p>{decoded.login}</p>
          <p>
            <DeleteToken />
          </p>
        </div>
      );
    }
    return;
  }

  function AuthButt() {
    if (!localStorage.getItem("token")) {
      return (
        <div>
          <a className="link-button" href="/login">
            <button className="header-button">Авторизуватися</button>
          </a>
        </div>
      );
    } else {
      return;
    }
  }

  //appears if authorized
  function DeleteToken() {
    if (localStorage.getItem("token")) {
      return (
        <button
          className=""
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
      <h1 className="inline">Chatrooms</h1>
      <UserDisplay />
      <nav id="navbar">
        <ul>
          <li>
            <a className="link-button" href="http://localhost:3001/">
              <button className={"header-button inline"}>На головну</button>
            </a>
          </li>
          <li>
            <AuthButt />
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
