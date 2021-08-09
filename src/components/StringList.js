import React from "react";
import { WrapperDiv } from "./StringList.styled";

function StringList({ id, comment }) {
  return (
    <WrapperDiv>
      {comment ? (
        <ul>
          <li id={id}>
            <div dangerouslySetInnerHTML={{ __html: comment }} />
          </li>
        </ul>
      ) : (
        ""
      )}
    </WrapperDiv>
  );
}

export default StringList;
