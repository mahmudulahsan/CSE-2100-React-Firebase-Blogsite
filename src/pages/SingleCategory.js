import React from "react";
import { Link, useParams } from "react-router-dom";
import './SingleBlog.css'

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function SingleCategory() {
  const { catId } = useParams();

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  },);

  return (
    <div className="container">
      <div className="d-flex mt-5">
        <h1 className="p-2 flex-fill">
          <Link to='/blogs/category'>
            <i class="fa-regular back-pointer fa-circle-left"></i>
          </Link>
        </h1>
        <h1 className="p-2 flex-fill"><i class="fa-solid fa-sitemap"/> {catId}</h1>
      </div>
      
      <hr />
        <div className="row">
        {postLists.map((val, key) => {
        if (catId === val.category) {
            return(
            <div key={key} className="col-sm-4 blog-card">
            <div className="card">
                <img src={val.img} className="card-img-top" alt="..." />
                <Link className="link" to={`/blogs/${val.title}`}>
                <div className="card-body">
                    <h4 className="card-title">{val.title}</h4>
                    <Link className="author-link" to={`/blogs/author/${val.author.name}`}><small className="text-muted">{val.author.name}</small></Link>
                      <p className="card-text">
                        {val.body.slice(0, 200)} . . . <span>আরও পড়ুন</span>{" "}
                      </p>
                    </div>
                </Link>
            </div>
            </div>
        )}else{
          return <></>
        }
      })}
      </div>
    </div>
  );
}

export default SingleCategory;
