export default function Register() {
  return (
    <div id="auth">
      <div className="center-div">
        <table id="auth-table">
          <tr className="center">
            <label>Регістрація</label>
          </tr>
          <tr>
            <label>Логін:</label>
          </tr>
          <tr>
            <input id="login"></input>{" "}
          </tr>
          <tr>
            <label>Пароль:</label>
          </tr>
          <tr>
            <input id="password" type="password"></input>
          </tr>
          <tr>
            <label>Повторити пароль:</label>
          </tr>
          <tr>
            <input id="password-repeat" type="password"></input>
          </tr>
          <tr className="center">
            <button id="auth-button" className="center">
              Ок
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
