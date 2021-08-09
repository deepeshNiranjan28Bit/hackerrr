import React from "react";
import ListCard from "./ListCard";

function ResultList({ data }) {
  return (
    <div>
      {data.map((listItem) => {
        return (
          <ul key={listItem.objectID}>
            <ListCard
              key={listItem.objectID}
              id={listItem.objectID}
              title={listItem.title}
              author={listItem.author}
            />
          </ul>
        );
      })}
    </div>
  );
}

export default ResultList;
