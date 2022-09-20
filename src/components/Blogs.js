import data from "../Fetch Blogs/data";
import "./SearchPage.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div className="row mt-5">
        {data.map((val,key) => {
          return (
            <div key={key} className="col-sm-4 blog-card">
              <div className="card mb-3" style={{height: "475px"}}>
                <Link className="link" to={`/blogs/${val.id}`}>
                  <img src={val.img} height="200" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{val.title}</h4>
                    <small className="text-muted">{val.author}</small>
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
