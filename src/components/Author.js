import './Author.css'
import { Link } from 'react-router-dom'

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const Author = () => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const set = new Set();

  useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
   getPosts();
  },);
  
  postLists.map((val) => {
    set.add(val.author.name)
  })
 
const arr = new Array(...set);
 console.log(arr)
  return (
    <div className="container">
    <h3 className='text-center mt-4'><i class="fa-solid fa-user-pen"/> লেখক</h3>
    <hr />
    {arr.map((val, key)=>(
        <div className='d-flex justify-content-center'>
          <div className='d-flex flex-column'>
            <Link className="text-center author m-2"  key={key} to={`/blogs/author/${val}`}>{val}</Link>
        </div>
        </div>     
      ))}
    </div>
  )
}

export default Author



