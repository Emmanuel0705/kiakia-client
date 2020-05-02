import React from 'react';

import { connect } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';


import AppMenu from './SideBarMenu';



/**
 * User Widget
 */
const UserProfile = ({user}) => {
    return <React.Fragment>
        <div className="media user-profile mt-2 mb-2">
           
            <div className="media-body">
                <h6 className="pro-user-name mt-0 mb-0">{user.username}</h6>
                <span className="pro-user-desc">{user.email}</span>
            </div>

            
        </div>
    </React.Fragment>
}


/**
 * Sidenav
 */
const SideNav = ({user}) => {
    return <div className="sidebar-content">
        <div id="sidebar-menu">
            <UserProfile user={user}/>
            <AppMenu />
        </div>
    </div>
}


const mapStateToProps = state => ({
    user:state.user.user
})
export default connect(mapStateToProps)(SideNav);
