// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'react-feather';
import {connect} from 'react-redux'
import {showAirtimeModal,showDataModal, showCableModal} from '../redux/Actions/component.action'

const Navbar = ({showAirtimeModal,showDataModal,showCableModal}) => {
    return (
        <React.Fragment>
            <div className="sidebar-content">
               <div id="sidebar-menu" className="slimscroll-menu">
                   <ul className="metismenu" id="menu-bar">
                        <li className="active">
                           <Link to="/dashboard">
                              <Home/>
                              <span> Dashboard </span>
                          </Link>
                        </li>
                        <li onClick={() => showAirtimeModal()}>
                           <Link to="">
                               <i className="uil uil-outgoing-call"></i>
                              <span> Buy Airtime </span>
                          </Link>
                        </li>
                        <li onClick={() => showDataModal()}>
                           <Link to="">
                           <i className="uil uil-signal"></i>
                              <span> Buy Data Bundle </span>
                          </Link>
                        </li>
                        <li onClick={() => showCableModal()}>
                           <Link to="">
                           <i className="uil uil-rss-alt"></i>
                              <span> Cable TV </span>
                          </Link>
                        </li>
                    </ul>
              </div>
            </div>
        </React.Fragment>
    );
};
const mapDispatchToprops = dispatch => ({
    showAirtimeModal: () => dispatch(showAirtimeModal()),
    showDataModal: () => dispatch(showDataModal()),
    showCableModal: () => dispatch(showCableModal())
})

export default connect(null,mapDispatchToprops)(Navbar);
