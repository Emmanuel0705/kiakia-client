// @flow
import React from 'react';
import AirtimeModal from './AirtimeModal';
import DataModal from './DataModal'
import {connect} from 'react-redux'
import PaymentModal from './PaymentModal'
import CableTvModal from './CableTvModal';
import ElectricityModal from './ElectricityModal'
import RechargeModal from './RechargePinModal'

const TransactionsModal = ({airtimeModal,dataModal,paymentModal,cableModal,
    electricityModal,rechargeModal}) => {
    return (
        <React.Fragment>
          {
              airtimeModal ? <AirtimeModal/>: ''
          }
           {
              dataModal ? <DataModal/>: ''
          }
          {
             paymentModal ? <PaymentModal/>: ''
          }
          {
               cableModal ? <CableTvModal/>: '' 
          }
          {
              rechargeModal ? <RechargeModal/> : ""
          }
          {
              electricityModal ? <ElectricityModal/> : ""
          }
        </React.Fragment>
    );
};
const mapStateToProps = (state) => ({
    airtimeModal:state.component.showAirtimeModal,
    dataModal:state.component.showDataModal,
    cableModal:state.component.showCableModal,
    paymentModal:state.component.showPaymentModal,
    electricityModal:state.component.showElectricModal,
    rechargeModal:state.component.showRechargeModal
})

export default connect(mapStateToProps)(TransactionsModal);
