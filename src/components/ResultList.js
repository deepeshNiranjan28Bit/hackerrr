import React from "react";
import ListCard from "./ListCard";

function ResultList({ data }) {
  return (
    <div>
      {data.map((listItem) => {
        return (
          <ListCard
            id={listItem.objectID}
            title={listItem.title}
            author={listItem.author}
          />
        );
      })}
    </div>
  );
}

export default ResultList;
