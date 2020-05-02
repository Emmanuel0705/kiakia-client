// @flow
import React, {useState} from 'react';
import {connect} from 'react-redux'
import {closeModal, setChildLoader, clearLoader} from '../redux/Actions/component.action'
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup,
    Form,Input} from 'reactstrap';
import { Check} from 'react-feather';
import { setError } from '../redux/Actions/alert.action';
import Loader from '../components/Loader';

const DataModal = ({dataModal,setError,closeModal,user,error,loader,clearLoader,setLoader}) => {
    const [formData,setFormData] = useState({MobileNetwork:"",MobileNumber:"",
    Amount:"335.00",Data:"335.00"})
    const onChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})

    }
    const onSubmit = e => {
        e.preventDefault()
        setLoader()
        setTimeout(() => {
            if(parseInt(formData.Data.split(" ")[0]) > parseInt(user.wallet)) {
                console.log(user.wallet)
                setError("Insufficient Ballance")
            }else{
               setError("Sever Error! pls try again")
            }
            clearLoader()
        }, 7000);       
    }
    const mtnData = [{value:'1000', data:'1GB',amount:'335.00'},
                     {value:'2000', data: '2GB',amount:'N670.00'},
                     {value:"5000", data: "5Gb",amount:'1675'},
                     {value:"10000.01", data: "10GB",amount:"1920"},
                     {value:"22000.01", data: "22GB",amount:"3360"}]

    return (
        <React.Fragment>
            <Modal
                isOpen={dataModal}
                
                className="modal-dialog-scrollable"
                size={null}>
                    {loader && <Loader/>}
                <ModalHeader toggle={() => closeModal()}>Buy Data Bundle</ModalHeader>
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
                                <Label>Data Bundle</Label>
                                <Input type="select" name="Data" 
                             required onChange={ e => onChange(e) }>
                                 {mtnData.map( (val) => {
                                   return <option key={val.value} value={`${val.amount} ${val.value}`}>{val.data}</option>
                                })}                                 
                               </Input>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label>Mobile Number</Label>
                                <Input value={formData.MobileNumber} onChange={e => onChange(e)}
                                name="MobileNumber" type="number"
                                 required />
                                
                            </FormGroup>
                            <FormGroup>
                            <Label>Amount To Pay</Label>
                            <Input name="AmountToPay" type="text" disabled value={String(formData.Data).split(" ")[0]} />
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
    dataModal:state.component.showDataModal,
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


export default connect(mapStateToProps,mapDispatchToprops)(DataModal);
