import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../Fetch Blogs/data";
import './SingleBlog.css'

function SingleCategory() {
  const { catId } = useParams();
  return (
    <div className="container">
      <div className="d-flex mt-5">
        <h1 className="p-2 flex-fill">
          <Link to='/blogs/category'>
            <i class="fa-regular back-pointer fa-circle-left"></i>
          </Link>
        </h1>
        <h1 className="p-2 flex-fill">{catId}</h1>
      </div>
      
      <hr />
        <div className="row">
        {data.map((val, key) => {
        if (catId === val.category) {
            return(
            <div key={key} className="col-sm-4 blog-card">
            <div className="card">
                <img src={val.img} className="card-img-top" alt="..." />
                <Link className="link" to={`/blogs/${val.id}`}>
                <div className="card-body">
                    <h4 className="card-title">{val.title}</h4>
                    <Link className="author-link" to={`/blogs/author/${val.author}`}><small className="text-muted">{val.author}</small></Link>
                      <p className="card-text">
                        {val.body.slice(0, 200)} . . . <span>আরও পড়ুন</span>{" "}
                      </p>
                    </div>
                </Link>
            </div>
            </div>
        )}
      })}
      </div>
    </div>
  );
}

export default SingleCategory;
