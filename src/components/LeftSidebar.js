import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isMobileOnly } from "react-device-detect";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import * as FeatherIcon from 'react-feather';

import AppMenu from './SideBarMenu';
import StateManager from 'react-select';


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

class LeftSidebar extends Component {
    menuNodeRef;

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }

    /**
     * Bind event
     */
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Bind event
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e) => {
        if (this.menuNodeRef.contains(e.target)) return;
        // else hide the menubar
        if (document.body && isMobileOnly) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    /**
     * Handle click
     * @param {*} e
     * @param {*} item
     */
    handleClick(e) {
        console.log(e);
    }

    render() {
        const isCondensed = this.props.isCondensed || false;

        return (
            <React.Fragment>
                <div className='left-side-menu' ref={node => this.menuNodeRef = node}>
                    <UserProfile />
                    {!isCondensed && <PerfectScrollbar><SideNav /></PerfectScrollbar>}
                    {isCondensed && <SideNav />}
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    user:state.user.user
})
export default connect(mapStateToProps)(SideNav);
