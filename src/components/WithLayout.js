import React from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Topbar'
import { connect } from 'react-redux';
import {showSideBar} from '../redux/Actions/component.action'

const WithLayout = ({Component,showSideBar,showSideBarFunc}) => {
    const hideBarOnMobile = () => {
        if(window.innerWidth < 767) if(showSideBar) showSideBarFunc()
    }
    return (
        <div id="wrapper">
           <Navbar/>
           <Sidebar/>
           <div className="content-page" onClick={() => hideBarOnMobile()}>
              <div className="content">
                  <div className="container-fluid">
                       <Component/>
                  </div>
               </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    showSideBarFunc: () => dispatch(showSideBar())
})

const mapstateToProps = state => ({
     showSideBar: state.component.showSideBar
})


export default connect(mapstateToProps,mapDispatchToProps)(WithLayout);
