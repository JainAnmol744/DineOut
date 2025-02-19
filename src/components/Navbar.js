import React from 'react'
import {
  Link
} from "react-router-dom";
import logo from "../assets/dineout.webp"

const Navbar = () => {

    const handleLogout =()=>{

    }
  
  return (
    <div className='container center my-2'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src = {logo} alt="website-logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <form className="form-inline my-2  mx-2 my-lg-0" >
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
        <li className="nav-item mx-2">
          <Link className={`nav-link active }`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`nav-link active }`} aria-current="page" to="/book">Book a Table</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`nav-link active }`} aria-current="page" to="/dineoutpay">Dineout Pay</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`nav-link active }`} aria-current="page" to="/dineoutpassport">Dineout Passport</Link>
        </li>         
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
        <button className="btn btn-primary mx-2" >Login</button>
      </form>:<button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar