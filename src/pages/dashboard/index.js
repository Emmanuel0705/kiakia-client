import React, { Component } from 'react';
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap';
import Flatpickr from 'react-flatpickr'
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag, DollarSign, User } from 'react-feather';
import Loader from '../../components/Loader';
import OverviewWidget from '../../components/OverviewWidget';
import crypto from 'crypto'

import Statistics from './Statistics';
import RevenueChart from './RevenueChart';
import TargetChart from './TargetChart';
import SalesChart from './SalesChart';
import Orders from './Orders';
import Performers from './Performers';
import Tasks from './Tasks';
import PaystackButton from 'react-paystack';
import { showPaymentModal, setParentLoader } from '../../redux/Actions/component.action';
import { connect } from 'react-redux';
import { fakeWallet } from '../../redux/Actions/auth.action';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);
        this.key = "pk_test_88866eb856c55f2e82c99400b220abbad1c077f3"
        this.ref = crypto.randomBytes(12).toString("hex")

        this.state = {
            filterDate: [oneWeekAgo, new Date()]
        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="">
                    { /* preloader */}
                    {this.props.loader && <Loader />}

                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Dashboard</h4>
                        </Col>

                        <Col sm={8} xl={6}>
                            <div className="form-inline float-sm-right mt-3 mt-sm-0 ">
                                
                                <UncontrolledButtonDropdown>
                                    <Button onClick={() => this.props.setPaymentModal()} color="primary">
                                    ₦ Fund Your Wallet
                                    </Button>
                                </UncontrolledButtonDropdown>
                                
                            </div>
                        </Col>
                    </Row>

                    {/* stats */}
                    <Statistics></Statistics>

                    {/* charts */}
                    <Row>
                    
                        <Col xl={12}>
                            <Orders />
                        </Col>
                        
                    </Row>

                    {/* charts */}
                   
                </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setPaymentModal: () => dispatch(showPaymentModal()),
    setLoader:()=> dispatch(setParentLoader())
})
const mapStateToProps = state => ({
    loader:state.component.parentLoader
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);