import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChildrenComments from "../components/ChildrenComments";
import { apiGet } from "../misc/config";
import { DetailsDivWrapper } from "./Details.styled";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    apiGet(`/items/${id}`).then((result) => {
      setData(result);
    });
  }, [id]);
  const { title, points, url } = data;
  const { children } = data;

  return (
    <DetailsDivWrapper>
      <h1>{title}</h1>
      <h3>{points}</h3>
      <h4>{url}</h4>
      <ChildrenComments children={children} />
    </DetailsDivWrapper>
  );
}

export default Details;
