import React from "react";
import './App.css';
import logo from './assets/images/left_menu/Logo.svg';
import dashboard from './assets/images/left_menu/icon_dashboard.svg';
import members from './assets/images/left_menu/ic_members-icon_users.svg';
import projects from './assets/images/left_menu/ic_briefcase-icon_briefcase.svg';
import clients from './assets/images/left_menu/ic_rocket-icon_startup.svg';
import workplan from './assets/images/left_menu/ic_calendar-icon_date.svg';
import messages from './assets/images/left_menu/ic_chat-icon_chat.svg';

class LeftMenu extends React.Component{
    render(){
        const content = options.map((option) =>
            <div key={option.text} className="eachOption">
                <img src={option.icon} className="side_logo" alt={options.text}/>
                <p className="side_text">{option.text}</p>
            </div>
        );
        return(
            <div className="LeftMenu">
                <img src={logo} className="logo" alt="logo"/>
                <div className="side_content">
                    {content}
                </div>
            </div>
        )
    }
}
const options = [
    {icon: dashboard, text: "DASHBOARD"},
    {icon: members, text: "MEMBERS"},
    {icon: projects, text: "PROJECTS"},
    {icon: clients, text: "CLIENTS"},
    {icon: workplan, text: "WORKPLAN"},
    {icon: messages, text: "MESSAGES"},
];

export default LeftMenu;