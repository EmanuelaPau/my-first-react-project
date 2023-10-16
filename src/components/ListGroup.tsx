import { MouseEvent } from "react";
function ListGroup() {
  let items = [
    { name: "New York", id: "NY" },
    { name: "St. Francisco", id: "SF" },
    { name: "Tokyo", id: "TK" },
    { name: "London", id: "LND" },
    { name: "Paris", id: "PRS" },
  ];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>

      {items.length === 0 ? <p>no item found</p> : null}

      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
