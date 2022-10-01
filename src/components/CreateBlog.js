import React from 'react'
import { useState } from 'react';
import { addDoc, setDoc, collection, doc } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const CreateBlog = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [category, setCategory] = useState("");
const [imageUpload, setImageUpload] = useState("")
const [imageUrls, setImageUrls] = useState("");

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
            imageUrls
        });

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
    };

    const uploadImage = () => {
        if(imageUpload == null) return;
        const imageRef = ref(storage, `images/${title}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls(url);
            console.log(url)
        });
        })
    }

  return (
    <>
        <div className="cb-container container mt-5">
            <h2 className='text-center fw-bold'>আপনার ব্লগটি লিখুন</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">টাইটেল</label>
                <input 
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
                type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ক্যাটাগরি</label>
            <select 
                onChange={(event) => {
                    setCategory(event.target.value);
                }}
                type="text" className="form-control" id="exampleFormControlInput1" placeholder="">
                <option disabled>সুরাহ সিলেক্ট করুন ...</option>
                <option value="Education">Education</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Sports">Sports</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Book">Book</option>
                <option value="Islam">Islam</option>
                <option value="International">International</option>
                <option value="Literature">Literature</option>
                <option value="Others">Others</option>
            </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">ব্লগের কনটেন্ট</label>
                <textarea 
                onChange={(event) => {
                    setBody(event.target.value);
                }}
                className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label"></label> */}
                <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
                <button onClick={uploadImage} className='btn btn-primary'>Upload image</button>
            </div>
            <button onClick={createPost} className='btn btn-success'>Submit Blog</button>
        </div>
        {/* <ToastContainer /> */}
    </>
  )
}

export default CreateBlog