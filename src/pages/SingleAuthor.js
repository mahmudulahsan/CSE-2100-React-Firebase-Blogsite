import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const SingleAuthor = () => {
const { authorId } = useParams();

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
          <Link to='/blogs/author'>
            <i class="fa-regular back-pointer fa-circle-left"></i>
          </Link>
        </h1>
        <h1 className="p-2 flex-fill"><i class="fa-solid fa-user-pen"/> {authorId}</h1>
      </div>
      <hr />
        <div className="row">
        {postLists.map((val, key) => {
        if (authorId === val.author) {
            return(
            <div key={key} className="col-sm-4 blog-card">
            <div className="card">
                <img src={val.img} className="card-img-top" alt="..." />
                <Link className="link" to={`/blogs/${val.id}`}>
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
        )}
      })}
      </div>
    </div>
  );
}

export default SingleAuthor