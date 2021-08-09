import React from "react";

function StringList({ id, comment }) {
  if (comment) {
    var setComment = comment.replace(/(<([^>]+)>)/gi, "");
  }

  return <div>{comment ? <li id={id}>{setComment}</li> : ""}</div>;
}

export default StringList;
