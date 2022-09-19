import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../Fetch Blogs/data";

const SingleBlog = () => {
  const { id } = useParams();
  return (
    <div className="container">
      {/* <div className="col-sm-4 blog-card">
        <div class="card">
          <img src={data[id-1].img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">{data[id-1].title}</h4>
            <p class="card-text">{data[id-1].body}</p>
          </div>
        </div>
        <Link to="/blogs">back to blogs</Link>
      </div> */}
      <div class="card mb-3">
        <img src={data[id-1].img} height="400" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{data[id-1].title}</h5>
          <p class="card-text">
          {data[id-1].body}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
