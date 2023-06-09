import React from "react";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {

    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg white py-3 shadow-sm">
                <div class="container">
                    <NavLink class="navbar-brand fw-bold fs-4" to="/">Việt Thắng</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/cart" className="btn btn-outline-success ms-2">
                                <i className="fa fa-shopping-cart me-2">Cart ({state? state.length : 0})</i>
                                </NavLink>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;