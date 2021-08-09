import React from "react";

function StringList({ id, comment }) {
  return (
    <div>
      {comment ? (
        <li id={id}>
          <div dangerouslySetInnerHTML={{ __html: comment }} />
        </li>
      ) : (
        ""
      )}
    </div>
  );
}

export default StringList;
