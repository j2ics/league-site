import React, { Component, Fragment } from 'react'
import logo from '../assets/img/j2ics-logo-md.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand" href="/"><img src={logo} style={{"height": "28px"}}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/standings" className="nav-link">Standings</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule" className="nav-link">Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/roster" className="nav-link">Roster</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    <p>Copyright - J2ICS 2019</p>
                </div>
            </nav>
        </Fragment>
    }
}

export default Header;