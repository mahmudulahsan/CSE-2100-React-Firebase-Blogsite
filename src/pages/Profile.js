import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import {auth} from '../firebase-config'
import {onAuthStateChanged} from 'firebase/auth'

import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

const Profile = () => {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // const uid = user.uid;
      window.location.pathname = "/login"
    }
  });

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  },);
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="container">
        <h1 className='container text-center'>আমার ব্লগ</h1>
        <div className="row mt-5">
        {postLists.map((post, key) => {
        return (
          <div key={key} className="col-sm-4 blog-card">
            {
              post.author.id === auth.currentUser.uid &&
              (
              <div className="card">
                <Link to={`/blogs/category/${post.category}`}>
                  <pre className="cat">{post.category}</pre>
                </Link>
                {/* <img src={val.img} className="card-img-top" alt="..." /> */}
                <Link className="link" to={`/blogs/${post.title}`}>
                  <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <Link className="author-link" to={`/blogs/author/${post.author.name}`}><small className="text-muted">{post.author.name}</small></Link>
                    {/* <small className="text-muted"> {val.time}</small> */}
                    <p className="card-text">
                      {/* {post.body} */}
                      {post.body.slice(0, 200)} . . . <span>আরও পড়ুন</span>{" "}
                    </p>
                  </div>
                </Link>
                <button className='btn btn-danger' onClick={() => {
                  deletePost(post.id);
                }}>Delete
                </button>
              </div>
              )
            }
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Profile