import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux'


import {showSideBar, setParentLoader, clearLoader} from "./redux/Actions/component.action"
import AllTransactionsModal from './components/TransactionsModal'
import Footer from './components/Footer'
import SuceessToast from './components/SuccessToast'
import ErrorToast from './components/ErrorToast'
// import Error500 from './pages/other/Error500'

// default
import './assets/scss/theme.scss';

// dark
// import './assets/scss/theme-dark.scss';

// rtl
// import './assets/scss/theme-rtl.scss';


/**
 * Main app component
 */
class App extends React.Component  {
  constructor (props){
    super(props)
    this.props.setLoader()
    this.showSideBar = this.props.showSideBar
    this.showSideBarFunc = this.props.showSideBarFunc
    if(window.innerWidth < 767) this.props.showSideBarFunc()

    this.state = {
      hasError: false
    }
      
  }
  
  componentDidMount(){
    this.props.clearLoader()
   
  }
  componentDidCatch(){
     this.setState({hasError:true})
  }
  
 render (){
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
}
 const mapDispatchToProps = dispatch => ({
  showSideBarFunc: () => dispatch(showSideBar()),
  setLoader: () => dispatch(setParentLoader()),
  clearLoader:() => dispatch(clearLoader()),
  
})

 const mapstateToProps = state => ({
   showSideBar: state.component.showSideBar
})

export default connect(mapstateToProps,mapDispatchToProps)(App);
