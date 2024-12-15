function Room(r) {
  const link = "/rooms/" + r.room.name;
  return (
    <a className="link-button" href={link}>
      <li key={r.room.name}>
        <div id="room">
          <h3>{r.room.name}</h3>
          <p>{r.room._id}</p>
        </div>
      </li>
    </a>
  );
}

const rooms = await fetch("http://localhost:3000/rooms")
  .then((res) => res.json())
  .catch((e) => {
    return e;
  });

export default function Rooms() {
  try {
    const listRooms = rooms.map((room) => {
      return <Room room={room} />;
    });
    return (
      <div id="room-div-list">
        <ul id="rooms-list">{listRooms}</ul>
      </div>
    );
  } catch (e) {
    //add error component
    return <h2>Error</h2>;
  }
}
