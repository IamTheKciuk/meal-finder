import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="page home-page">
            <div className="home-container">
                <div className="text">What will you eat today?</div>

                <Link to="/search">
                    <button className="btn-home">
                        <p className="btn-text">See for yourself </p>
                        <p className="icon">
                            <FaChevronRight />
                        </p>
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default Home;
