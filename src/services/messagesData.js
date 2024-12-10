const server = "http://localhost:3000";
export const fetchMessages = (room) => {
  const options = {
    method: "GET",
    headers: { token: localStorage.getItem("token") },
  };
  console.log(`${server}/rooms/${room}`);
  /* return fetch(`${server}/rooms/${room}`, options)
    .then((res) => {
      if (res.ok) {
        const result = res.json();
        console.log("fetch result: " + result);
        return res.json();
      }
      throw "Api is not available";
    })
    .catch((err) => {
      console.error("Can't fetch data: " + err);
    }); */
  const data = fetch(`${server}/rooms/${room}`, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw "Api not available";
    })
    .catch((err) => {
      console.log("Can't fetch data: " + err);
    });
  console.log(data);
  return data;
};
