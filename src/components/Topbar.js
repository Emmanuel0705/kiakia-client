import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container,Button } from 'reactstrap';
import { Menu, X, LogOut } from 'react-feather';

import {showSideBar} from '../redux/Actions/component.action'

import logo from '../assets/images/logo.png';
import { logout } from "../redux/Actions/auth.action";




class Topbar extends Component {
  constructor(props) {
    super(props);

    this.handleRightSideBar = this.handleRightSideBar.bind(this);
  }

  /**
   * Toggles the right sidebar
   */
  handleRightSideBar = () => {
    this.props.showRightSidebar();
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
          <Container fluid>
            { /* logo */}
            <Link to="/" className="navbar-brand mr-0 mr-md-2 logo">
              <span className="logo-lg">
                <img src={logo} alt="" height="24" />
                <span className="d-inline h5 ml-2 text-logo">KIAKIA</span>
              </span>
              <span className="logo-sm">
                <img src={logo} alt="" height="24" />
              </span>
            </Link>

            { /* menu*/}
            <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
              <li className="">
                <button onClick={() => this.props.showSideBar()}
                 className="button-menu-mobile open-left disable-btn">
                  <Menu className="menu-icon" />
                  <X className="close-icon" />
                </button>
              </li>
            </ul>


            <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
            <Button color="primary" onClick={() => this.props.logout()} className="width-sm"><LogOut/> Logout </Button>
            </ul>

          </Container>
        </div>
      </React.Fragment >
    );
  }
}
const mapDispatchToProps = dispatch => ({
  showSideBar: () => dispatch(showSideBar()),
  logout: () => dispatch(logout())
})

export default connect(
  null,
mapDispatchToProps
)(Topbar);
