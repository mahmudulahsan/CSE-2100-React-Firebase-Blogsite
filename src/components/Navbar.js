import React from 'react'
import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="container">
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
              {/* <div className="nav-item fw-bold mx-1">
                <CustomLink className="nav-link fs-4" aria-current="page" to="/blogs/category">
                ক্যাটাগরি
                </CustomLink>
              </div> */}
              <div className="nav-item fw-bold mx-1">
                <CustomLink className="nav-link fs-4" to="/profile">
                  প্রোফাইল
                </CustomLink>
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
            <Link to="blogs"><i className="navbar-items fa-solid fa-magnifying-glass fs-3 mx-5"></i></Link>
          </div>
        </div>
      </nav>
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