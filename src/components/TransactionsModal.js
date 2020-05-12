// @flow
import React from 'react';
import AirtimeModal from './AirtimeModal';
import DataModal from './DataModal'
import {connect} from 'react-redux'
import PaymentModal from './PaymentModal'
import CableTvModal from './CableTvModal';
import ElectricityModal from './ElectricityModal'
import RechargeModal from './RechargePinModal'
import TransferModal from './transferModal'

const TransactionsModal = ({airtimeModal,dataModal,paymentModal,cableModal,
    electricityModal,rechargeModal,transferModal}) => {
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
          {
              transferModal ? <TransferModal/> : ""
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
    rechargeModal:state.component.showRechargeModal,
    transferModal:state.component.showTransferModal
})

export default connect(mapStateToProps)(TransactionsModal);
