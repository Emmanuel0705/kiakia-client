import React, {useEffect } from 'react';
import Routes from './routes/Routes';
import { BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux'


import {showSideBar} from "./redux/Actions/component.action"
import AllTransactionsModal from './components/TransactionsModal'
import Footer from './components/Footer'
import SuceessToast from './components/SuccessToast'
import ErrorToast from './components/ErrorToast'

// default
import './assets/scss/theme.scss';

// dark
// import './assets/scss/theme-dark.scss';

// rtl
// import './assets/scss/theme-rtl.scss';


/**
 * Main app component
 */
const App = ({showSideBar,showSideBarFunc}) => {
  useEffect(() => {
      if(window.innerWidth < 767) showSideBarFunc()
      
  },[showSideBarFunc])

   return (
    <BrowserRouter>     
        <AllTransactionsModal/>
        <Routes/>
        <ErrorToast/>
        <Footer/>
        <SuceessToast/>
    </BrowserRouter>
   )
}
const mapDispatchToProps = dispatch => ({
  showSideBarFunc: () => dispatch(showSideBar())
})

const mapstateToProps = state => ({
   showSideBar: state.component.showSideBar
})


export default connect(mapstateToProps,mapDispatchToProps)(App);
