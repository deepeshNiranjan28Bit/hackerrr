import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChildrenComments from "../components/ChildrenComments";
import { apiGet } from "../misc/config";
import { DetailsDivWrapper, LoadingWrapper } from "./Details.styled";

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
    <div>
      {data ? (
        <DetailsDivWrapper>
          <h2>
            <u>
              Title - <strong>{title}</strong>
            </u>
          </h2>
          <h3>
            Points - <strong>{points}</strong>
          </h3>
          <a href={url}>{url}</a>
          <ChildrenComments children={children} />
        </DetailsDivWrapper>
      ) : (
        <LoadingWrapper>
          <h3>"Loading the data for you."</h3>
        </LoadingWrapper>
      )}
      <div className="bg-balls"></div>
    </div>
  );
}

export default Details;
