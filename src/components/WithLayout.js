import React from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Topbar'
import { connect } from 'react-redux';
import {showSideBar,setParentLoader} from '../redux/Actions/component.action'
import Loader from '../components/Loader';

const WithLayout = ({Component,showSideBar,showSideBarFunc,setParentLoader,loader}) => {
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
                 { loader ? <Loader/> :
                       <Component/>}
                  </div>
               </div>
            </div>
    
                       
                    
        </div>
          
    )
}


const mapDispatchToProps = dispatch => ({
    showSideBarFunc: () => dispatch(showSideBar()),
    setLoader: () => dispatch(setParentLoader())
})

const mapstateToProps = state => ({
     showSideBar: state.component.showSideBar,
     loader:state.component.parentLoader

})


export default connect(mapstateToProps,mapDispatchToProps)(WithLayout);
