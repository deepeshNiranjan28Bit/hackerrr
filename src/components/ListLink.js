import React from "react";
import { Link } from "react-router-dom";

function ListLink({ id }) {
  return (
    <div>
      <Link to={`/page/${id}`}>Read more about this!</Link>
    </div>
  );
}

export default ListLink;
