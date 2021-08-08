import React from "react";
import ListLink from "./ListLink";

function ListCard({ title, author, id }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <ListLink id={id} />
    </div>
  );
}

export default ListCard;
