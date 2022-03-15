import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Proptypes from 'props-types';
export default function
    Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode} `}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <div className={`form-check from-switch text-${props.mode === 'light' ? 'dark' : 'light'} `} >
                            {/* Onclicking togglemode is called that results in a sending the state of toggleMode changed */}
                            <input className='form-check-input' onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className='form-check-label' htmlFor='flexSwitchDefault'>Enable Light Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
//props kaisa hai bata rahe hum bata rahe hum
// Navbar.Proptypes = { title: Proptypes = string };

//default props 
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'Set aboutText'
};