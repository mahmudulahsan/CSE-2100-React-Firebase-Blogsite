import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { auth } from '../firebase-config'
import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from "firebase/auth";

const Navbar = ({isAuth, setIsAuth, isAdmin}) => {

  const [profileImage, setProfileImage] = useState("");
  // const [admin, setAdmin] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      console.log("logout success")
      window.location.pathname = "/"
    })
  }
  // console.log(auth)
  console.log(isAdmin)

  onAuthStateChanged(auth, (user) => {
    if (user) {
        setProfileImage(user.photoURL)
        // console.log(window.location.pathname)
    }
    });

    // useEffect(() => {
    //   if(window.location.pathname === '/admin'){
    //     setAdmin(true)
    //   }
    // },[]);
    

  return (
    <div className="container">
      {
        ('/admin' === window.location.pathname) ? (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand fs-1" to="/">
                কথা.কম
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <div className="nav-item fw-bold mx-1">
                    <CustomLink className="nav-link fs-4" aria-current="page" to="/admin">
                    ব্লগ
                    </CustomLink>
                  </div>
                </ul>
                  {/* <div className="nav-item fw-bold">
                    <CustomLink className="nav-link fs-6" aria-current="page" to="/blogs/author">
                    লেখক
                    </CustomLink>
                  </div> */}
                <Link to="blogs"><i className="navbar-items fa-solid fa-magnifying-glass fs-3 mx-5"></i></Link>
              </div>
            </div>
          </nav>
        </>
        ) : (
          <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand fs-1" to="/">
                কথা.কম
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <div className="nav-item fw-bold mx-1">
                    <CustomLink className="nav-link fs-4" aria-current="page" to="/">
                      হোম
                    </CustomLink>
                  </div>
                  <div className="nav-item fw-bold mx-1">
                    <CustomLink className="nav-link fs-4" aria-current="page" to="/blogs">
                    ব্লগ
                    </CustomLink>
                  </div>
                  <div className="nav-item fw-bold mx-1">
                    {isAuth && <CustomLink className="nav-link fs-4" to="/profile">
                      প্রোফাইল
                    </CustomLink>} 
                  </div>
                  <div className="nav-item fw-bold mx-1">
                    {isAuth ? <CustomLink className="nav-link fs-4" to="/createblog">
                      ব্লগ লিখুন
                    </CustomLink> : 
                    <CustomLink className="nav-link fs-4" to="/login">
                      ব্লগ লিখুন
                    </CustomLink>}
                    
                  </div>
                </ul>
                <div className="nav-item fw-bold">
                    <CustomLink className="nav-link fs-6" aria-current="page" to="/blogs/category">
                    ক্যাটাগরি
                    </CustomLink>
                  </div>
                  <div className="nav-item fw-bold">
                    <CustomLink className="nav-link fs-6" aria-current="page" to="/blogs/author">
                    লেখক
                    </CustomLink>
                  </div>
                  <div className="nav-item">
                    {isAuth && <img src={profileImage} className="profile-picture" alt="..."/>}
                  </div>
                  {/* <div className="nav-item fw-bold">
                    {isAuth ? (<CustomLink className="text-dark nav-link fs-6" aria-current="page" to="/profile">
                    {auth.currentUser.displayName} 
                    </CustomLink>) : <div></div>} 
                  </div> */}
                  <div className="nav-item fw-bold">
                    {(!isAuth) ? <CustomLink className="btn btn-success text-light nav-link fs-6" aria-current="page" to="/Login">
                    লগইন 
                    </CustomLink> :  <button onClick={signUserOut} className='btn btn-danger'>লগ আউট </button> } 
                  </div>
                <Link to="blogs"><i className="navbar-items fa-solid fa-magnifying-glass fs-3 mx-5"></i></Link>
              </div>
            </div>
          </nav>
          </>
        )
      }

    </div>
  )
}

export default Navbar

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}