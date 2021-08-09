import React from "react";
import ListCard from "./ListCard";

function ResultList({ data }) {
  return (
    <div>
      {data.map((listItem) => {
        return (
          <ListCard
            key={listItem.objectID}
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
