function ListGroup() {
  let items = [
    { name: "New York", id: "NY" },
    { name: "St. Francisco", id: "SF" },
    { name: "Tokyo", id: "TK" },
    { name: "London", id: "LND" },
    { name: "Paris", id: "PRS" },
  ];
  //   items = [];

  if (items.length === 0) {
    return (
      <>
        <h1>list</h1>
        <p>no item found</p>
      </>
    );
  }
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
