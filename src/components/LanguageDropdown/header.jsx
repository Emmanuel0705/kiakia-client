// @flow
import React from 'react';

const Header = (props) => {
    return (
        <React.Fragment>
           <div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
                <div className="container-fluid">
                   
                    <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
                        <li className="">
                            <button className="button-menu-mobile open-left disable-btn">
                                <i data-feather="menu" className="menu-icon"></i>
                                <i data-feather="x" className="close-icon"></i>
                            </button>
                        </li>
                    </ul>
                    <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
                        <li className="d-none d-sm-block">
                            <div className="app-search">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search..."/>
                                        <span data-feather="search"></span>
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                   
                </div>

            </div>
        </React.Fragment>
    );
};

export default Header;
