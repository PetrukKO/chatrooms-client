const SendMessage = (r) => {
  const send = () => {
    const message = document.getElementById("textarea").value.trim();
    if (message === "") return;
    const room = r.room;
    console.log("component value: " + message);
    console.log("room: " + room);
    const url = `http://localhost:3000/rooms/${room}`;
    const request = new Request(url, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    });
    fetch(request)
      .then((res) => {
        if (!res.ok) {
          throw res.status;
        }
        return res.json();
      })
      .then((data) => {
        console.log("Message sent: " + data);
        window.location.reload();
      })
      .catch((e) => {
        console.log("error " + e);
      });
  };
  return (
    <>
      <p>Відправити повідомлення:</p>
      <div id="textarea-div">
        <textarea id="textarea"></textarea>
        <button onClick={send}>{`>`}</button>
      </div>
    </>
  );
};

export default SendMessage;
