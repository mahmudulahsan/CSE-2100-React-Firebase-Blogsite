import { useState } from "react";
import data from "../Fetch Blogs/data";
import "./Blogs.css";
import { Link, useLocation } from "react-router-dom";

const Blogs = () => {

  const [searchItem, setSearchItem] = useState("");

  const location = useLocation();
  if(location.pathname === '/' || location.pathname === '/blogs/category'){
    return(
    <div>
      <div className="row mt-5">
        {data
          .filter((val) => {
            if (searchItem === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchItem.toLowerCase())
            ) return val;
          })
          .map((val, key) => {
            return (
              <div key={key} className="col-sm-4 blog-card">
                <div className="card">
                  <Link to={`/blogs/category/${val.category}`}>
                    <pre className="cat">{val.category}</pre>
                  </Link>
                  <img src={val.img} className="card-img-top" alt="..." />
                  <Link className="link" to={`/blogs/${val.id}`}>
                    <div className="card-body">
                      <h4 className="card-title">{val.title}</h4>
                      <Link className="author-link" to={`/blogs/author/${val.author}`}><small className="text-muted">{val.author} |</small></Link>
                      <small className="text-muted"> {val.time}</small>
                      <p className="card-text">
                        {val.body.slice(0, 200)} . . . <span>আরও পড়ুন</span>{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    )
  }else{
    return (
      <div>
      <div className="d-flex justify-content-center m-5">
        <input
          className="form-control-lg me-2 text-center"
          type="search"
          placeholder="সার্চ করুন"
          aria-label="Search"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
      </div>
        <hr />
        <div className="row mt-5">
          {data
            .filter((val) => {
              if (searchItem === "") {
                return val;
              } else if (val.title.toLowerCase().includes(searchItem.toLowerCase()) || val.body.toLowerCase().includes(searchItem.toLowerCase()) || val.category.toLowerCase().includes(searchItem.toLowerCase()) ||val.author.toLowerCase().includes(searchItem.toLowerCase())  ) return val;
            })
            .map((val, key) => {
              return (
                <div key={key} className="col-sm-4 blog-card">
                  <div className="card">
                    <Link to={`/blogs/category/${val.category}`}>
                      <pre className="cat">{val.category}</pre>
                    </Link>
                    <img src={val.img} className="card-img-top" alt="..." />
                    <Link className="link" to={`/blogs/${val.id}`}>
                      <div className="card-body">
                        <h4 className="card-title">{val.title}</h4>
                        <Link className="author-link" to={`/blogs/author/${val.author}`}><small className="text-muted">{val.author} |</small></Link>
                        <small className="text-muted"> {val.time}</small>
                        <p className="card-text">
                          {val.body.slice(0, 200)} . . . <span>আরও পড়ুন</span>{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
    
  }


};

export default Blogs;

