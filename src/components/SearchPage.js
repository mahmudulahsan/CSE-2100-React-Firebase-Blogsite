import { useState } from 'react'
import data from "../Fetch Blogs/data";
import "./SearchPage.css";
import { Link } from "react-router-dom";

const Blogs = () => {

  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <div className="d-flex justify-content-center m-5">
          <input
            className="form-control-lg me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
      </div>

      <hr />

      <div className="row mt-5">
        {data.filter((val) => {
          if(searchItem === ""){
            return val;
          } else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
            return val;
          }
        }).map((val,key) => {
          return (
            <div key={key} className="col-sm-4 blog-card">
              <div className="card">
                <Link className="link" to={`/blogs/${val.id}`}>
                  <img src={val.img} className="card-img-top" alt="..." />

                  <div className="card-body">
                    <h4 className="card-title">{val.title}</h4>
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
};

export default Blogs;
