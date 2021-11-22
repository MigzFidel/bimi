import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Offcanvas} from 'react-bootstrap';
import Icon from '../../Assets/img/icon/Icon.png'
import {useLocation} from 'react-router';

export default function Navigationbar() {

    const location = useLocation();

    return (
        <nav class="navbar navbar-expand-md navbar-dark sticky-top">
            <div class="container-fluid">
                <Link class="navbar-brand" to={"/bimi"}><img src={Icon} style={{height: "2rem", marginRight: "1rem"}}/>BIMI TAKOYAKI</Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="navbar-item">
                            <Link
                                class={location.pathname == "/bimi" || location.pathname == "/bimi/"
                                ? "nav-link active"
                                : "nav-link"}
                                to={"/bimi"}>HOME</Link>
                        </li>
                        <li class="navbar-item">
                            <Link
                                class={location.pathname == "/bimi/about"
                                ? "nav-link active"
                                : "nav-link"}
                                to={"/bimi/about"}>ABOUT</Link >
                        </li>
                        <li class="navbar-item">
                            <Link
                                class={location.pathname == "/bimi/menu"
                                ? "nav-link active"
                                : "nav-link"}
                                to={"/bimi/menu"}>MENU</Link>
                        </li>
                    </ul>
                    <a class="nav-link" href="#">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                </div>
            </div>
        </nav>

    );
    /*
    return ( <Navbar bg="dark" variant="dark" sticky="top">
        <div class="container-fluid">
            <Link class="navbar-brand" to={"/bimi"}><img src={Icon} style={{height: "2rem", marginRight: "1rem"}}/>BIMI TAKOYAKI</Link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="navbar-item">
                        <Link class={location.pathname == "/bimi" || location.pathname == "/bimi/" ? "nav-link active" :"nav-link"} to={"/bimi"}>HOME</Link>
                    </li>
                    <li class="navbar-item">
                        <Link class={location.pathname == "/bimi/about" ? "nav-link active" :"nav-link"} to={"/bimi/about"}>ABOUT</Link >
                    </li>
                    <li class="navbar-item">
                        <Link class={location.pathname == "/bimi/menu" ? "nav-link active" :"nav-link"} to={"/bimi/menu"}>MENU</Link>
                    </li>
                </ul>
                <a class="nav-link" href="#">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </div>
        </div>
    </Navbar>
    );*/
}