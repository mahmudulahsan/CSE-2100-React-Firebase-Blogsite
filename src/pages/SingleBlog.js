import React from "react";
import { Link, useParams } from "react-router-dom";
import './SingleBlog.css';
import { db } from '../firebase-config'
import { useState,useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

const SingleBlog = () => {
  const { id } = useParams();

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
    // <div className="container mt-3">
    //   <div className="card single-card mb-3">
    //     <img src={postLists[id-1].imageUrls} height="400" classNameName="card-img-top" alt="..." />
    //     <Link to='/blogs'>
    //         <i className="fa-regular top-left fa-circle-left"></i>
    //     </Link>
    //     <div className="card-body">
    //       <h2 className="card-title text-center">{postLists[id-1].title}</h2>
    //       <Link className="author-link" to={`/blogs/author/${postLists[id-1].author}`}><small className="text-muted">{postLists[id-1].author}</small></Link>
    //       <p className="card-text fs-3">
    //       {postLists[id-1].body}
    //       </p>
    //       <p className="card-text">
    //         {/* <small className="text-muted">{data[id-1].time}</small> */}
    //       </p>
    //     </div>
    //   </div>
    // </div>



    <div className="container">
      {postLists.map( (val, key) => {
      return (
      <div key={key} className="container mt-3">
        {id === val.title &&
        ( 
          <div className="card single-card mb-3">
          <img src={val.imageUrls} height="400" classNameName="card-img-top" alt="..." />
          <Link to='/blogs'>
              <i className="fa-regular top-left fa-circle-left"></i>
          </Link>
          <div className="card-body">
            <h2 className="card-title text-center">{val.title}</h2>
            <Link className="author-link" to={`/blogs/author/${val.author.name}`}><small className="text-muted">{val.author.name}</small></Link>
            <p className="card-text fs-3">
            {val.body}
            </p>
            <p className="card-text">
              {/* <small className="text-muted">{data[id-1].time}</small> */}
            </p>
          </div>
        </div>
        )
        }
      </div>
      )
    })}
    </div>
  
  );
};

export default SingleBlog;
