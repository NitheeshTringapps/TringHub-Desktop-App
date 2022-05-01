import React from "react";
import CurrentProjects from "./CurrentProjects";
import Dashboard from "./Dashboard";
import TopMenu from "./TopMenu";
import './App.css';

function Homepage(){
    return(
        <div className="Homepage">
            <TopMenu/>
            <h2 className="SubHeading">Dashboard</h2>
            <Dashboard/>
            <h2 className="SubHeading">Current Projects</h2>
            <CurrentProjects/>
        </div>
    )
}

export default Homepage;