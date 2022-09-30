import React from 'react'
import Blogs from '../components/Blogs'
import { Link } from 'react-router-dom'
import './Home.css'

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";


const Home = () => {

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
    return(set.add(val.category))
  })

  const arr = new Array(...set);

  // console.log(postLists[0].title)

  return (
  <div className="container-fluid mt-5">
    <div className="row p-4 p-md-5 mb-4 bg-dark text-white rounded">
      <div className="col-md-6 px-0">
        <h3 className='fst-italic' style={{color: "#707071"}}>Featured Blog</h3>
        <strong className="inline-block mb-2 text-primary">Edu</strong>
        <h2 className="fst-italic">হুওাইয়াওেইর তৃতীয় আইসিটি একাডেমী হবে রুয়েটে</h2>
        <small>Mahmudul Ahsan</small>
        <p className="lead my-3 fs-5">
        শিক্ষার্থীদের তথ্য ও যোগাযোগ প্রযুক্তি বিষয়ক জ্ঞান ও দক্ষতা বিকাশের জন্য আইসিটি একাডেমী প্রতিষ্ঠার লক্ষ্যে সম্প্রতি রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়ের সঙ্গে একটি সমঝোতা স্মারক স্বাক্ষর করেছে বিশ্বের শীর্ষস্থানীয় আইসিটি অবকাঠামো সেবা দাতা প্রতিষ্ঠান হুয়াওয়ে টেকনোলজিস (বাংলাদেশ) লিমিটেড।. . .
        </p>
        <div className="text-center">
          <Link  to={"/blogs/10"}>আরও পড়ুন</Link>
        </div>
        
      </div>
      <div className="col-6">
        <div className="feat-img">
          <img height={300} src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/09/15/huawei_ruet_ict_academy_mou_signing_13th_sep_2022.jpg" alt="" />
        </div>
      </div>
      </div>
    <div className='my-4 cat-container'>
    <div className="d-flex justify-content-around">
      {arr.map((val, key)=>(
          <Link className='cat-link-home p-3' key={key} to={`/blogs/category/${val}`}><li className='fs-5'>{val}</li></Link>
      ))}
      </div>
    </div>
    <h3 className='text-center fw-bold mt-3'>Blogs</h3>
    <Blogs />
    </div>
  )
}

export default Home

