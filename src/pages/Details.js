import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    apiGet(`/items/${id}`).then((result) => {
      setData(result);
    });
  }, [id]);
  console.log(data);
  const { title, points, url } = data;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{points}</h3>
      <h4>{url}</h4>
    </div>
  );
}

export default Details;
