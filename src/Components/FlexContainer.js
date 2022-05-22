import SideBar from "./SideBar";
import MainContent from "./MainContent";
import React from "react";

class FlexContainer extends React.Component{
    render(){
        return(
        <div className="flexContainer">
            <SideBar/>
            <MainContent/>
        </div>
        )
    }
}

export default FlexContainer