import React from "react";
import { BsQuestion } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";

const About = () => {
    return (
        <main className="page about-page">
            <section className="about-section">
                <div className="about-title">
                    <h1>About</h1>
                    <p className="title-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Maiores nesciunt autem exercitationem placeat? A
                        sed provident quas animi, minus ratione dicta expedita
                        odit tempora quo pariatur debitis. Enim, mollitia
                        quaerat.
                    </p>
                    {/* TODO: logo - onion - on the right side of "About" */}
                </div>
                <div className="about-desc">
                    <div className="column">
                        <div className="icon-container">
                            <BsQuestion className="about-icon" />
                        </div>
                        <h4>What we do</h4>
                        <p className="about-column-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi accusantium voluptates perspiciatis
                            nesciunt aliquid ipsam quod iusto ipsum adipisci
                            laudantium.
                        </p>
                    </div>
                    <div className="column">
                        <div className="icon-container">
                            <AiFillDatabase className="about-icon" />
                        </div>
                        <h4>Database</h4>
                        <p className="about-column-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi est culpa esse necessitatibus odio
                            totam itaque, ex quo dolorum nulla!
                        </p>
                    </div>
                    <div className="column">
                        <div className="icon-container">
                            <FaMoneyBillWave className="about-icon" />
                        </div>
                        <h4>Support us</h4>
                        <p className="about-column-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos inventore quae in facere dolor at fuga
                            delectus voluptatum totam molestias.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
