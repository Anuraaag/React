import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">

                <h4 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.title}</h4>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>

                <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="modeSwitch"/>
                    <label className="form-check-label" htmlFor="modeSwitch"> {` ${props.mode === 'light' ? 'Enable':'Disable'} Darkmode`}</label>
                </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Default Title",
}