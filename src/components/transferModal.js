// @flow
import React, { Fragment } from 'react';
import {connect} from 'react-redux'
import {closeModal, setChildLoader, clearLoader} from '../redux/Actions/component.action'
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup,
    Form,Input,ListGroup,ListGroupItem} from 'reactstrap';
import { Check} from 'react-feather';
import { setError } from '../redux/Actions/alert.action';
import Loader from '../components/Loader';
import { cableTv, requestPin } from '../redux/Actions/transaction.action';

class TransferModal extends React.Component {
   constructor(props){
       super(props)
       
      this.state = {
        network:'01',
        value:"100",
        quantity:"",
        toVerify:false
   }
            
   }
 
 onSubmit = e => {
    e.preventDefault()
    this.props.setLoader()
    setTimeout(() => {
        this.setState({toVerify:true})
        this.props.clearLoader()
    }, 2000);
    
             
}
networkName = val => {
  switch(val){
      case '01':
          return "MTN"
     case '02':
         return "GLO"
     case '03':
         return "Etisalat"
     case '04':
         return "Airtel"
    default :
    return ""
  }
}
onSubscribe = () => {
    this.props.setLoader()
    this.props.requestPin({...this.state,verified:true})
}
componentDidMount(){
   
}
cancelVerification = () => {
    this.props.setLoader()
    setTimeout(() => {
        this.setState({toVerify:false})
        this.props.clearLoader()
    }, 2000) 
}
changePackage = (e) => {
    this.setState({package:e.target.value.split(",")[0],
    amount:e.target.value.split(",")[1],name:e.target.value.split(",")[2]})
}

   render(){
    return (
        <React.Fragment>
            <Modal
                isOpen={this.props.showModal}
                
                className="modal-dialog-scrollable"
                size={null}>
                    {this.props.loader && <Loader/>}
                <ModalHeader toggle={() => this.props.closeModal()}>Transfer Money</ModalHeader>
                  {this.props.error && <div className="alert alert-danger m-3">{this.props.error} </div>}
               
                <ModalBody>
                
                     <Card>
                        <CardBody>
                           {
                               this.state.toVerify ? 
                               <Fragment>
                               <ListGroup className="font-size-16">
                                    <ListGroupItem active
                                     className="font-size-22 text-center font-weight-bolder" 
                                    style={{fontFamily:"courier"}} >Confirm Your Request
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Network: </b> 
                                        {this.networkName(this.state.network)}
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Quantity: </b> {this.state.quantity}
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Airtime Value: </b> {this.state.value}
                                     </ListGroupItem>
                                     <ListGroupItem >
                                         <b>Amount to be paid: </b>
                                          {(this.state.quantity *
                                           this.state.value) * 0.98}
                                     </ListGroupItem>
                             </ListGroup>
                             <Button color="primary" onClick={() => this.onSubscribe()}
                              className="mt-2 btn-block">Proceed</Button>
                             <Button color="danger" onClick={() => this.cancelVerification()} className="mt-2 float-right btn-block">Cancel Transaction</Button>
                             </Fragment>  :
                              <Form onSubmit={e => this.onSubmit(e)}>
                                <FormGroup>
                                        <Label>Network</Label>
                                        <Input type="select" required 
                                        onChange={ e => this.setState({network:e.target.value}) }>                                   
                                        <option value="01">MTN</option>
                                        <option value="02">GLO</option>
                                        <option value="03">Etisalat</option>
                                        <option value="04">Airtel</option>
                                    </Input>
                                    </FormGroup>
                                <FormGroup>
                                        <Label>Airtime Value</Label>
                                        <Input type="select" name="Data" required 
                                        onChange={ e => this.setState({value:e.target.value}) }>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="500">500</option>
                                                        
                                    </Input>
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label>
                                            Quantity <label className="text-danger">(1 - 100)</label>
                                        </Label>
                                        <Input value={this.state.quantity}
                                         onChange={e => this.setState({quantity:e.target.value})}
                                        type="number" required />
                                        
                                    </FormGroup>
                                    <FormGroup>
                                    <Label>Amount To Pay (2% discount)</Label>
                                    <Input value={this.state.quantity * this.state.value * 0.98}
                                      name="AmountToPay" type="text"
                                    disabled  />
                                    </FormGroup>
                                    <Button color="primary" type="submit">
                                        <Check/> Submit
                                    </Button>
                             
                              </Form>
                           }
                                                      
                            
                        </CardBody>
                    </Card>
                
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" className="ml-1" onClick={() => this.props.closeModal()}>
                         Cancel</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
   }
   
};
const mapStateToProps = (state) => ({
    showModal:state.component.showTransferModal,
    error:state.alert.errorAlert,
    user:state.user.user,
    loader:state.component.childLoader,
    rechargeData:state.transaction.rechargeData
})
const mapDispatchToprops = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    setError: e => dispatch(setError(e)),
    setLoader: () => dispatch(setChildLoader()),
    clearLoader: () => dispatch(clearLoader()),
    cableTvFunc: (e) => dispatch(cableTv(e)),
    requestPin: e => dispatch(requestPin(e))
})


export default connect(mapStateToProps,mapDispatchToprops)(TransferModal);
