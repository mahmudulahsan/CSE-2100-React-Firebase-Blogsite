import './Category.css'
import { Link } from 'react-router-dom'

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const Category = () => {

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
    set.add(val.category)
  })

  const arr = new Array(...set);

  return (
    <div className="container">
      <h3 className='text-center mt-4'><i class="fa-solid fa-sitemap"/> ক্যাটাগরি</h3>
      <hr />
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column'>
        {arr.map((val, key)=>(
          <Link className="text-center category m-2"  key={key} to={`/blogs/category/${val}`}>{val}</Link>
        ))}
      </div>
      </div>     
    </div>

    
  )
}

export default Category