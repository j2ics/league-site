import React, { Component, Fragment } from 'react'
import logo from '../assets/img/j2ics-logo-md.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return <Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="/"><img src={logo} style={{"height": "28px"}}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Standings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Schedule</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Roster</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    <p>Copyright - J2ICS 2019</p>
                </div>
            </nav>
        </Fragment>
    }
}

export default Header;