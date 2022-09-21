import React from "react";
import { useParams } from "react-router-dom";
import data from "../Fetch Blogs/data";
import './SingleBlog.css';
import { Link } from 'react-router-dom'

const SingleBlog = () => {
  const { id } = useParams();
  return (
    <div className="container mt-3">
      <div className="card single-card mb-3">
        <img src={data[id-1].img} height="400" className="card-img-top" alt="..." />
        <Link to='/blogs'>
            <i class="fa-regular top-left fa-circle-left"></i>
        </Link>
        <div className="card-body">
          <h2 className="card-title text-center">{data[id-1].title}</h2>
          <small className="text-muted">{data[id-1].author}</small>
          <p className="card-text fs-3">
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
