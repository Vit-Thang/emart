import React from "react";
import Product from "./Products";

const Home = () => {
    return (
        <div className="home">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/pic4.jpg" class="card-img" alt="Background" height="800px" />
                    <div class="card-img-overlay d-flex flex-column justify-content-around">
                        <div className="container">
                            <h5 class="card-title display-3 fw-bolder mb-0">VT Store</h5>
                            <p class="card-text lead fs-2">Welcome to my website. Happy to serve and help you.</p>
                        </div>
                    </div>
            </div>
            <Product/>
        </div>
    );
}

export default Home;