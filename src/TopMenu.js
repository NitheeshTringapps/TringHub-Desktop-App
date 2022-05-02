import React, { useState } from "react";
import Notification_Icon from './assets/images/top_menu/ic_notification-icon_notification_off.svg';
import Profile_Photo from './assets/images/top_menu/profile.png';
import Search_Icon from './assets/images/top_menu/Search box/ic_search-icon_search.svg';
import Icon_Plus from './assets/images/top_menu/button_add_project/icon_plus.svg';

class TopMenu extends React.Component{
    render(){
        return(
            <div className="TopMenu">
                <SearchBox/>
                <AddProjectButton/>
                <div className="divider"></div>
                <img src={Notification_Icon} className="Notification_Icon" alt="Notification_Icon"/>
                <NotificationBadge/>
                <div className="divider"></div>
                <img src={Profile_Photo} className="Profile_Photo" alt="Profile_Photo"/>
            </div>
        )
    }
}

function SearchBox(){
    return(
        <div className="SearchBox">
            <img src={Search_Icon} className="Search_Icon" alt="Search_Icon"/>
            <input type="text" id="search" name="search" placeholder="Search your project here"></input>
        </div>
    );
}

function AddProjectButton(){
    const[addProjectClicked, setAddProjectClicked]=useState(false);
    const handleClick= ()=>{
        addProjectClicked?setAddProjectClicked(false):setAddProjectClicked(true);
    }
    return(
        <div className={addProjectClicked?"addProject_Clicked":"addProject"} onClick={handleClick}>
            <img src={Icon_Plus} className="Icon_Plus" alt="Icon_Plus"/>
            <p className="add-project-text">Add Project</p>
        </div>
    );
}

function NotificationBadge(){
    const[badgeClicked, setBadgeClicked]=useState(false);
    const handleClick= ()=>{
        badgeClicked?setBadgeClicked(false):setBadgeClicked(true);
    }
    return(
        <span class={badgeClicked?"notification-badge-clicked":"notification-badge"} onClick={handleClick}>3</span>
    );
}

export default TopMenu;