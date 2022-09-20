import React from "react";
import { useParams } from "react-router-dom";
import data from "../Fetch Blogs/data";

const SingleBlog = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="card mb-3">
        <img src={data[id-1].img} height="400" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data[id-1].title}</h5>
          <small className="text-muted">{data[id-1].author}</small>
          <p className="card-text">
          {data[id-1].body}
          </p>
          <p className="card-text">
            <small className="text-muted">{data[id-1].time}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
