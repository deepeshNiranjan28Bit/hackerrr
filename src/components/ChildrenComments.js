import React from "react";
import StringList from "../components/StringList";

function ChildrenComments({ children }) {
  return (
    <div>
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
        : "Loading Comments"}
    </div>
  );
}

export default ChildrenComments;
