import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleMeal from "./pages/SingleMeal";

//import components
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/meal/:id">
                    <SingleMeal />
                </Route>
                <Route path="/*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
