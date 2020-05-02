// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import { connect } from 'react-redux';

const Statistics = ({user}) => {
    const numberFormat = new Intl.NumberFormat()
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={6}>
                    <StatisticsChartWidget
                        description="Wallet Ballance"
                        title={`₦ ${numberFormat.format(user.wallet)}.00`}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        colors={['#f77e53']}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: `0%`
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={6}>
                    <StatisticsChartWidget
                        description="User Referred"
                        title="0"
                        colors={['#f77e53']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '0%'
                        }}></StatisticsChartWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};
const mapDispatchToProps = dispatch => ({
  
})
const mapStateToProps = state => ({
    user:state.user.user
})

export default connect(mapStateToProps)(Statistics);
