import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home, Navigation, PastWinner, PhotoAlbum, Voting,} from "./pages";

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/voting" element={<Voting/>}/>
            <Route path="/pastwinner" element={<PastWinner/>}/>
            <Route path="/photoalbum" element={<PhotoAlbum/>}/>
        </Routes>
    </Router>,

    document.getElementById("root")
);
