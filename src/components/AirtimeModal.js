// @flow
import React,{useState} from 'react';
import {connect} from 'react-redux'
import {closeModal,setChildLoader, clearLoader} from '../redux/Actions/component.action'
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup,
     Form,Input} from 'reactstrap';
import { Check } from 'react-feather';
import { setError } from '../redux/Actions/alert.action';
import Loader from '../components/Loader';

const AirtimeModal = ({airtimeModal,closeModal,error,setError,user,loader,setLoader,clearLoader}) => {
    const [formData,setFormData] = useState({MobileNetwork:"",MobileNumber:"",Amount:""})
    const onChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        setLoader()
        setTimeout(() => {
            if(parseInt(formData.Amount) > parseInt(user.wallet)) {
                console.log(user.wallet)
                setError("Insufficient Ballance")
            }else{
               setError("Sever Error! pls try again")
            }
            clearLoader()
        }, 7000);
       
       
    }

    return (
        <React.Fragment>
            <Modal
                isOpen={airtimeModal}
                
                className="modal-dialog-scrollable"
                size={null}>
                    {loader && <Loader/>}
                <ModalHeader toggle={() => closeModal()}>Purchase Airtime</ModalHeader>
                  {error && <div className="alert alert-danger m-3">{error} </div>}
               
                <ModalBody>
                     <Card>
                        <CardBody>
                           <Form onSubmit={e => onSubmit(e)}>
                           <FormGroup>
                                <Label>Mobile Network</Label>
                                <Input value={formData.MobileNetwork} type="select" name="MobileNetwork" 
                             required onChange={ e => onChange(e) }>
                                   
                                   <option value="01">MTN</option>
                                   <option value="02">GLO</option>
                                   <option value="04">Airtel</option>
                                   <option value="03">9Mobile</option>
                               </Input>
                            </FormGroup>
                           <FormGroup>
                                <Label>Airtime Amount (₦50 - ₦50,000)</Label>
                                <Input value={formData.Amount} name="Amount" 
                                onChange={e => onChange(e)} type="number"
                                 placeholder="" required />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label>Mobile Number</Label>
                                <Input value={formData.MobileNumber} onChange={e => onChange(e)}
                                name="MobileNumber" type="number"
                                 required />
                                
                            </FormGroup>
                            <FormGroup>
                            <Label>Amount To Pay (2% Discount)</Label>
                            <Input name="AmountToPay" type="number"
                                 disabled value={(formData.Amount*1) * 0.98} />
                            </FormGroup>
                            <Button color="primary" type="submit">
                                <Check/> Submit
                            </Button>
                            
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
    airtimeModal:state.component.showAirtimeModal,
    error:state.alert.errorAlert,
    user:state.user.user,
    loader:state.component.childLoader,
})
const mapDispatchToprops = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    setError: e => dispatch(setError(e)),
    setLoader: () => dispatch(setChildLoader()),
    clearLoader: () => dispatch(clearLoader())
})

export default connect(mapStateToProps,mapDispatchToprops)(AirtimeModal);
