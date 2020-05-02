import React from 'react';
import {connect} from 'react-redux'

import LeftSidebar from '../components/LeftSidebar';


const Sidebar = ({showSideBar}) => {
    return (   
        showSideBar ? <div style={{display:''}} className="left-side-menu"><LeftSidebar/></div> :""            
    )
}

const mapstateToProps = state => ({
     showSideBar: state.component.showSideBar
})

export default connect(mapstateToProps)(Sidebar);
