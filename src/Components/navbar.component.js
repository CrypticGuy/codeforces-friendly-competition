import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Binarybl00d</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">New Contest</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/update">Running Contest</Link>
                    </li>
                    <li className="nav-item mr-sm-2">
                        <Link className="nav-link" to="/" onClick={() => {Cookies.remove('curr_username'); window.location.reload()}} isAuth={false}>Logout</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
    
}
