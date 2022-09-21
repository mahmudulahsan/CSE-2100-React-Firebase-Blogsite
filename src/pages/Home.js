import React from 'react'
import Blogs from '../components/Blogs'
import { Link } from 'react-router-dom'
import data from '../Fetch Blogs/data'
import './Home.css'


const Home = () => {

  const set = new Set();
  
  data.map((val) => {
    set.add(val.category)
  })

  var data_size = data.length;
  console.log(Object.keys(data)[data_size-1].title)

  const arr = new Array(...set);

  return (
    <div className="container-fluid mt-5">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          {/* first slide */}
          <div className="row p-4 p-md-5 mb-4 bg-dark text-white rounded">
            <div className="col-md-6 px-0">
              <h3 className='fst-italic' style={{color: "#707071"}}>Recent Blogs</h3>
              <strong className="inline-block mb-2 text-primary">Education</strong>
              <h2 className="fst-italic">হুওাইয়াওেইর তৃতীয় আইসিটি একাডেমী হবে রুয়েটে</h2>
              <small>Mahmudul Ahsan</small>
              <p className="lead my-3 fs-5">
              শিক্ষার্থীদের তথ্য ও যোগাযোগ প্রযুক্তি বিষয়ক জ্ঞান ও দক্ষতা বিকাশের জন্য আইসিটি একাডেমী প্রতিষ্ঠার লক্ষ্যে সম্প্রতি রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়ের সঙ্গে একটি সমঝোতা স্মারক স্বাক্ষর করেছে বিশ্বের শীর্ষস্থানীয় আইসিটি অবকাঠামো সেবা দাতা প্রতিষ্ঠান হুয়াওয়ে টেকনোলজিস (বাংলাদেশ) লিমিটেড।. . .
              </p>
              <Link to={"/blogs/7"}>আরও পড়ুন</Link>
            </div>
            <div className="col-6">
              <div className="feat-img">
                <img height={300} src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/09/15/huawei_ruet_ict_academy_mou_signing_13th_sep_2022.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          {/* second slide */}
        <div className="row p-4 p-md-5 mb-4 bg-dark text-white rounded">
              <div className="col-md-6 px-0">
                <h3 className='fst-italic' style={{color: "#707071"}}>Featured Post</h3>
                <strong className="inline-block mb-2 text-primary">Technology</strong>
                <h2 className="fst-italic">আইফোন ১৪, যা আছে যা নেই..</h2>
                <small>Muaz Ibn Miraz</small>
                <p className="lead my-3 fs-5">
                কোম্পানিটি আইফোন ১৪ দুটি আকারে প্রকাশ করছে, আইফোন ১৪ এবং আইফোন ১৪ প্লাস। নতুন হ্যান্ডসেটগুলি স্যাটেলাইটের মাধ্যমে সাহায্যের জন্য জরুরি কল পাঠাতে সক্ষম। ফোনটি কাছের স্যাটেলাইটগুলির অবস্থান প্রদর্শন করবে এবং কীভাবে ডিভাইসটিকে স্যাটেলাইটের দিকে তাক করা যায় সেটা দেখাবে।\nপনেরো সেকেন্ড থেকে কয়েক মিনিটের মধ্যে 
                </p>
                <Link to={"/blogs/7"}>আরও পড়ুন</Link>
              </div>
              <div className="col-6">
                <div className="feat-img">
                  <img height={300} src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202209190616" alt="" />
                </div>
              </div>
            </div>
        </div>
        <div className="carousel-item">
          {/* third slide */}
              <div className="row p-4 p-md-5 mb-4 bg-dark text-white rounded">
                <div className="col-md-6 px-0">
                  <h3 className='fst-italic' style={{color: "#707071"}}>Featured Post</h3>
                  <strong className="inline-block mb-2 text-primary">Education</strong>
                  <h2 className="fst-italic">অদলবদল, পুরনো বই বিক্রির মাধ্যম</h2>
                  <small>Mahmudul Ahsan</small>
                  <p className="lead my-3 fs-5">
                  পুরনো বই পায়ে হাটার দূরত্বে কেনাবেচা করার সুযোগ সৃষ্টি করতেই অদলবদল এর সৃষ্টি। আমাদের আশেপাশেই অনেকের কাছে বিক্রি করার মতো বই আছে যা তারা আর পড়বেন না। আবার অনেকের অনেক সময় পুরনো বই প্রয়োজন হয়।  খুঁজি।
                  </p>
                  <Link to={"/blogs/7"}>আরও পড়ুন</Link>
                </div>
                <div className="col-6">
                  <div className="feat-img">
                    <img height={300} src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/306311354_127780000011377_850647223197618955_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=jb5TGn25yy8AX-nzY0A&_nc_ht=scontent.fdac27-1.fna&oh=00_AT8_eO_bh4cYu7uZGibXk_DdxbMHbXcYDCq5Br9JiNQXOg&oe=632D844A" alt="" />
                  </div>
                </div>
              </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className='my-4 cat-container'>
    <div className="d-flex justify-content-between">
      {arr.map((val, key)=>(
          <Link className='cat-link-home p-3' key={key} to={`/blogs/category/${val}`}><li className='fs-5'>{val}</li></Link>
      ))}
      </div>
    </div>
    <h3 className='text-center'>Blogs</h3>
    <Blogs />
    </div>
  )
}

export default Home

