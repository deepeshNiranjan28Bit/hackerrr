import React from "react";
import { CardDivWrapper } from "./ListCard.styled";
import ListLink from "./ListLink";

function ListCard({ title, author, id }) {
  return (
    <CardDivWrapper>
      <ul>
        <li>
          <h3>
            <em>TITLE - </em>
            {title}
          </h3>
          <h4>
            <em>AUTHOR - </em>
            {author}
          </h4>
          <ListLink id={id} />
        </li>
      </ul>
    </CardDivWrapper>
  );
}

export default ListCard;
