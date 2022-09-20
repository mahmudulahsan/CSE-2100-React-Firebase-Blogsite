import React from 'react'
import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import SearchPage from '../components/SearchPage'
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
              <div className="nav-item fw-bold">
                <CustomLink className="nav-link fs-5" aria-current="page" to="/">
                  Home
                </CustomLink>
              </div>
              <div className="nav-item fw-bold">
                <CustomLink className="nav-link fs-5" aria-current="page" to="/blogs">
                  Blogs
                </CustomLink>
              </div>
              <div className="nav-item fw-bold">
                <CustomLink className="nav-link fs-5" to="/profile">
                  Profile
                </CustomLink>
              </div>
            </ul>
            <Link to="SearchPage"><i className="fa-solid fa-magnifying-glass fs-3 mx-5"></i></Link>
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