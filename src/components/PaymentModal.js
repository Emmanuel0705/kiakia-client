// @flow
import React,{useState} from 'react';
import {connect} from 'react-redux'
import PaystackButton from 'react-paystack';
import {closeModal} from '../redux/Actions/component.action'
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, 
     Form,Input} from 'reactstrap';
import crypto from 'crypto'
import { verifyPayment } from '../redux/Actions/transaction.action';

const PaymentModal = ({paymentModal,closeModal,verifyPayment,user}) => {
    const [formData,setFormData] = useState({amount:""})
    const onChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmit = e => {
      closeModal()
    }
    const key = "pk_test_88866eb856c55f2e82c99400b220abbad1c077f3"
    const ref = crypto.randomBytes(12).toString("hex")

    return (
        <React.Fragment>
            <Modal
                isOpen={paymentModal}
                
                className="modal-dialog-scrollable"
                size={null}>
                <ModalHeader toggle={() => closeModal()}>Payment Details</ModalHeader>
                <ModalBody>
                     <Card>
                        <CardBody>
                           <Form onSubmit={e => onSubmit(e)}>
                           
                           <FormGroup>
                                <Label>Amount (₦)</Label>
                                <Input value={formData.Amount} name="amount" 
                                onChange={e => onChange(e)} type="number"
                                 placeholder="" required />
                            </FormGroup>
                            
                            <PaystackButton color="primary"
                                callback={e => verifyPayment(e.reference)}
                                 className="btn btn-primary" text="Pay Now"
                                 close={e => console.log('close',e)} embed={false}
                                 reference={ref} email={user.email} 
                                 amount={formData.amount * 100} paystackkey={key} tag="button"/>
                                                       
                           </Form>
                        </CardBody>
                    </Card>
                
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" className="ml-1" onClick={() => closeModal()}>
                         Cancel</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
};
const mapStateToProps = (state) => ({
    paymentModal:state.component.showPaymentModal,
    user:state.user.user
})
const mapDispatchToprops = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    verifyPayment: e => dispatch(verifyPayment(e))
})

export default connect(mapStateToProps,mapDispatchToprops)(PaymentModal);
