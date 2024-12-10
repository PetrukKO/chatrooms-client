import { useEffect, useState } from "react";

function Room(r) {
  const link = "/rooms/" + r.room.name;
  return (
    <a href={link}>
      <li key={r.room.name}>
        <div id="room">
          <h3>{r.room.name}</h3>
          <p>{r.room._id}</p>
        </div>
      </li>
    </a>
  );
}

try {
  const rooms = await fetch("http://localhost:3000/rooms").then((res) =>
    setRooms(res.json)
  );
} catch (e) {}

export default function Rooms() {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    console.log(".");
  }, rooms);
  const listRooms = rooms.map((room) => {
    return <Room room={room} />;
  });
  return (
    <div id="room-div-list">
      <ul id="rooms-list">{listRooms}</ul>
    </div>
  );
}
