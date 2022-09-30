import React from 'react'
import { useState } from 'react';
import { addDoc, setDoc, collection, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const CreateBlog = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [category, setCategory] = useState("");



onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.pathname = "/login"
    }
  });

const postsCollectionRef = collection(db, "posts");
const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      body,
      category,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
};

const docRef = doc(db, "author", auth.currentUser.uid );
const data = {
   name: auth.currentUser.displayName,
};

setDoc(docRef, data)
.then(() => {
    console.log("Document has been added successfully")
}).catch(error => {
    console.log(error);
})
  return (
    <>
        <div className="cb-container container mt-5">
            <h2 className='text-center fw-bold'>Create Blog</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input 
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
                type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                <input 
                onChange={(event) => {
                    setCategory(event.target.value);
                }}
                type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your blog</label>
                <textarea 
                onChange={(event) => {
                    setBody(event.target.value);
                }}
                className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={createPost} className='btn btn-success'>Submit Blog</button>
        </div>
    </>
  )
}

export default CreateBlog



