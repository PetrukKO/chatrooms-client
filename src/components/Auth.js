function Auth() {
  return (
    <div id="auth">
      <div className="center-div">
        <table id="auth-table">
          <tr className="center">
            <label>Автентифікація</label>
          </tr>
          <tr>
            <label>Логін:</label>
          </tr>
          <tr>
            <input id="login"></input>
          </tr>
          <tr>
            <label>Пароль:</label>
          </tr>
          <tr>
            <input id="password" type="password"></input>
          </tr>
          <tr className="center">
            <button id="auth-button" className="center" onClick={authenticate}>
              Sign in
            </button>
          </tr>
          <tr className="center">
            <label id="result"></label>
          </tr>
        </table>
      </div>
    </div>
  );
}

function authenticate() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const url = "http://localhost:3000/auth/";
  const request = new Request(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  try {
    fetch(request)
      .then((res) => {
        if (!res.ok) {
          throw res.status;
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data["token"]);
        document.getElementById("result").innerHTML = "success";
        window.location.href = "/";
      })
      .catch((e) => {
        document.getElementById("result").innerHTML = e;
      });
  } catch (e) {
    return <h2>Сталася помилка</h2>;
  }
}

export default Auth;
