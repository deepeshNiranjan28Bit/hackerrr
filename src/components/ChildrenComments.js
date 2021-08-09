import React from "react";
import StringList from "../components/StringList";

function ChildrenComments({ children }) {
  return (
    <div style={{ marginTop: "8vh" }}>
      <h3 style={{ textAlign: "center" }}>Comments</h3>
      {children
        ? children.map((listItem) => {
            return (
              <StringList
                id={listItem.id}
                key={listItem.id}
                comment={listItem.text}
              />
            );
          })
        : ""}
    </div>
  );
}

export default ChildrenComments;
