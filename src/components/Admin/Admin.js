import React, { useState, useEffect } from 'react'

import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth'
import { db, auth } from "../../firebase-config";

import { Link } from 'react-router-dom'

const Admin = () => {

    const [postLists, setPostList] = useState([]);
    const [isAdmin, setIsAdmin] = useState('')

    const [pass, setPass] =useState(false)

    const postsCollectionRef = collection(db, "posts");
  
    // onAuthStateChanged(auth, (user) => {
    //   if (!user) {
    //     window.location.pathname = "/login"
    //   }
    // });
  
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getPosts();
    },[postLists]);
  
    
    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
      console.log(id)
    };
    const handleChange = event => {
        setIsAdmin(event.target.value);
        if(event.target.value==='1903175'){
            setPass(true)
        } else{
            setPass(false)
        }
        console.log('value is:', event.target.value);
      };

  return (
    <div>
        <div className='container d-flex justify-content-center mx-auto m-5'>
           <input onChange={handleChange} value={isAdmin} className='pas' type="password" /> 
           <button  className='btn btn-success mx-2'>go</button>
        </div>
        {
            pass ? (
                <>
                <h1 className='text-center'>All Blogs</h1>
                    <ul className='list-group m-5'>
                        {
                            postLists.map((val, key) => {
                                return (
                                    <>
                                        <li className='list-group-item text-center m-3'>
                                            <h3 className='text-primary'>Blog Title - {val.title}</h3>
                                            <p className='fs-4 fst-italic'>blog by - {val.author.name} </p> 
                                            <Link to={`/blogs/${val.title}`}><span className='fs-3'>open blog</span></Link>
                                            <p className="card-text fs-5">
                                            {val.body.slice(0, 50)} . . . <span>আরও পড়ুন</span>{" "}
                                        </p>
                                        <button onClick={() => { deletePost(val.id);}} className='btn btn-danger'>Delete this blog</button>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </>
            ) : (
                <div class="alert alert-warning text-center fs-2" role="alert">
                    Enter valid password to Enter into Admin Panel!
                </div>
            )
        }
        
        
    </div>
  )
}

export default Admin
