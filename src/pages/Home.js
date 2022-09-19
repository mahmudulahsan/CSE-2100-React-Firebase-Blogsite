import React from 'react'
import Blogs from '../components/Blogs'



const Home = () => {

  return (
    <div className="container-fluid mt-5">
        <div class="row p-4 p-md-5 mb-4 bg-dark text-white rounded">
          <div class="col-md-6 px-0">
            <strong class="inline-block mb-2 text-primary">Tech</strong>
            <h2 class="fst-italic">RUET CSE Fest is on the way</h2>
            <p class="lead my-3 fs-5">
              Department of Computer Science &amp; Engineering, Rajshahi
              University of Engineering &amp; Technology is going to arrange
              ‘RUET CSE FEST 2K22’, one of the biggest tech carnivals for the
              enthusiastic mega minds of Bangladesh, on 4 June 2022 at RUET
              Campus, Rajshahi.
            </p>
          </div>
          <div class="col-6">
            <img
              src="https://images.unsplash.com/photo-1636743091340-af4ee8147080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              width="600px"
              alt=""
            />
          </div>
        </div>
        <h3 className='text-center pt-3'>Blogs</h3>
        <hr />
        <Blogs />
    </div>
  )
}

export default Home

