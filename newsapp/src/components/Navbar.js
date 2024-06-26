import React, {useEffect } from "react";
import { Link ,useLocation} from "react-router-dom";


const Navbar=()=> {
  let location =useLocation();
  useEffect(()=>{
  console.log(location)
    
  },[location])
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'pink' }}>

          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ color: 'black' }}>

             Newsapp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className= {`nav-link active ${location.pathname==="/home"? "active":""}`}
                    aria-current="page"
                    to="/home"
                    style={{ color: 'black' }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about" style={{ color: 'black' }}>
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>

              </form>
              <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
            </div>
          </div>
        </nav>
      </div>
    );

}

export default Navbar;
