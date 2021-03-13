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
                    <div className="title-desc">
                        The ONION is an web application for searching meal
                        recipes. You can write what are you looking for in the
                        search tab and/or choose category. All recipes have an
                        ingredient and it's amount listed in table. You can also
                        check single ingredient's photo and description by
                        clicking on it in recipe page.
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>*work in progress</p>
                        <p>
                            *this app works much better on big screens - not all
                            pages are responsive at this moment
                        </p>
                    </div>
                    {/* TODO: logo - onion - on the right side of "About" */}
                </div>
                <div className="about-desc">
                    <div className="column">
                        <div className="icon-container">
                            <BsQuestion className="about-icon" />
                        </div>
                        <h4>Who did it?</h4>
                        <p className="about-column-info">
                            This project is created by Karol Kwit, beginner
                            frontend developer. Contact me at:
                            <a
                                href="http://www.mrkwit.pl"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                mrkwit.pl
                            </a>
                        </p>
                    </div>
                    <div className="column">
                        <div className="icon-container">
                            <AiFillDatabase className="about-icon" />
                        </div>
                        <h4>Database</h4>
                        <p className="about-column-info">
                            The ONION is using an restful API to get recipes and
                            other data. The API site is:{" "}
                            <a
                                href="https://www.themealdb.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                themealdb.com{" "}
                            </a>
                        </p>
                    </div>
                    <div className="column">
                        <div className="icon-container">
                            <FaMoneyBillWave className="about-icon" />
                        </div>
                        <h4>Support us</h4>
                        <p className="about-column-info">
                            If you want to support the project just go to the
                            kitchen and cook something good from the one of
                            recipes.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
