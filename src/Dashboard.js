import React from "react";
import ProjectGallery from "./ProjectGallery";
import ProjectOverview from "./ProjectOverview";

class Dashboard extends React.Component{
    render(){
        return(
            <div className="Dashboard">
                <ProjectOverview/>
                <ProjectGallery/>
            </div>
        )
    }
}

export default Dashboard;