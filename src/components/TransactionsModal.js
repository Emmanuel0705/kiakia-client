// @flow
import React from 'react';
import AirtimeModal from './AirtimeModal';
import DataModal from './DataModal'
import {connect} from 'react-redux'
import PaymentModal from './PaymentModal'
import CableTvModal from './CableTvModal';

const TransactionsModal = ({airtimeModal,dataModal,paymentModal,cableModal}) => {
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
        </React.Fragment>
    );
};
const mapStateToProps = (state) => ({
    airtimeModal:state.component.showAirtimeModal,
    dataModal:state.component.showDataModal,
    cableModal:state.component.showCableModal,
    paymentModal:state.component.showPaymentModal
})

export default connect(mapStateToProps)(TransactionsModal);
