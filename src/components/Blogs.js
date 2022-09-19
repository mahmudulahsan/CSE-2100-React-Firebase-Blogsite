// import React, { useState } from "react";
import data from "../Fetch Blogs/data";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  // const [posts, setPosts] = useState([]);

  // const getPosts = async () => {
  //   const res = await fetch("../Fetch post/fetch.json")
  //   setPosts(await res.json());
  // };

  // useEffect(() => {
  //   // console.log(posts);
  //   getPosts();
  // }, []);

  // setPosts([mahi])

  return (
    <div>
      <div className="row">
        {data.map((mp, key) => {
          return (
            // <div className="col-sm-4 blog-card">
            //   <div className="card">
            //     <div className="card-body">
            //     <span className="badge rounded-pill bg-primary">New</span>
            //       <h5 className="card-title">{mp.title}</h5>
            //       <p className="card-text">{mp.body}</p>
            //     </div>
            //   </div>
            // </div>

            <div className="col-sm-4 blog-card">
              <div className="card">
                <Link className="link" to={`/blogs/${mp.id}`}>
                  <img src={mp.img} className="card-img-top" alt="..." />

                  <div className="card-body">
                    <h4 className="card-title">{mp.title}</h4>
                    <p className="card-text">{mp.body.slice(0, 200)} . . . <span>আরও পড়ুন</span> </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
