// @flow
import React from 'react';
import {connect} from 'react-redux'
import {closeModal, setChildLoader, clearLoader} from '../redux/Actions/component.action'
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup,
    Form,Input} from 'reactstrap';
import { Check} from 'react-feather';
import { setError } from '../redux/Actions/alert.action';
import Loader from '../components/Loader';
import { buyData } from '../redux/Actions/transaction.action';

class DataModal extends React.Component {
   constructor(props){
       super(props)
       this.mtnData = [
         {value:'1000', data:'1GB',amount:'335'},
         {value:'2000', data: '2GB',amount:'670'},
         {value:"5000", data: "5GB",amount:'1675'}
      ]
      this.gloData = [
        {value:'1600.01', data:'2GB',amount:'920'},
        {value:'3750.01', data:'4.5GB',amount:'1840'},
        {value:'5000.0', data:'7.2GB',amount:'2300'},
        {value:'6000.01', data:'8.75GB',amount:'2760'},
        {value:'8000.01', data:'12.5GB',amount:'3680'},
        {value:'12000.01', data:'15.6GB',amount:'4600'},
        {value:'16000.01', data:'25GB',amount:'7360'},
        {value:'30000.01', data:'52.5GB',amount:'13800'},
        {value:'45000.01', data:'62.5GB',amount:'16,560'}
      ]
      this.etisalatData = [
        {value:'500.01', data:'500MB',amount:'450'},
        {value:'1000.01', data:'1GB',amount:'950'},
        {value:'1500.01', data:'1.5GB',amount:'1140'},
        {value:'2500.01', data:'2.5GB',amount:'1425'},
        {value:'4000.01', data:'4GB',amount:'1900'},
        {value:'5500.01', data:'5.5GB',amount:'3800'},
        {value:'11500.01', data:'11.5GB',amount:'4750'},
        {value:'15000.01', data:'15GB',amount:'9500'},
        {value:'27000.01', data:'27GB',amount:'14250'},
      ]
      this.airtelData = [
        {value:'1500.01', data:'1.5GB',amount:'950'},
        {value:'3500.01', data:'3.5GB',amount:'1900'},
        {value:'7000.01', data:'7GB',amount:'4750'},
        {value:'16000.01', data:'16GB',amount:'7600'},
        {value:'22000.01', data:'22GB',amount:'9500'}
      ]

      this.state = {
         bundle:this.mtnData,
         network:'01',
         amount:this.mtnData[0].value,
         amountToPay:this.mtnData[0].amount,
         phone:""
    }
       
   }
 
 onSubmit = e => {
    e.preventDefault()
    const data = {
        network:this.state.network,
        amount:this.state.amount,
        amountToPay:this.state.amountToPay,
        phone:this.state.phone
    }
    console.log(data)
    this.props.setLoader()
    
    setTimeout(() => {
        this.props.buyDataFunc(data)
    
    }, 1000);       
}
componentDidMount(){
   
}
onChangeNetwork = e => {
    if(e.target.value === '01'){
        this.setState({bundle:this.mtnData,network:"01",amount:this.mtnData[0].value,
        amountToPay:this.mtnData[0].amount})
    }
    if(e.target.value === '02'){
        this.setState({bundle:this.gloData,network:"02", amount:this.gloData[0].value,
        amountToPay:this.gloData[0].amount})
    }
    if(e.target.value === '03'){
        this.setState({bundle:this.etisalatData,network:"03",amount:this.etisalatData[0].value,
        amountToPay:this.etisalatData[0].amount})
    }
    if(e.target.value === '04'){
        this.setState({bundle:this.airtelData,network:"04", amount:this.airtelData[0].value,
        amountToPay:this.airtelData[0].amount})
    }
}
changeBundle = (e) => {
    this.setState({amount:e.target.value.split(",")[0],amountToPay:e.target.value.split(",")[1]})
}

   render(){
    return (
        <React.Fragment>
            <Modal
                isOpen={this.props.dataModal}
                
                className="modal-dialog-scrollable"
                size={null}>
                    {this.props.loader && <Loader/>}
                <ModalHeader toggle={() => this.props.closeModal()}>Buy Data Bundle</ModalHeader>
                  {this.props.error && <div className="alert alert-danger m-3">{this.props.error} </div>}
               
                <ModalBody>
                
                     <Card>
                        <CardBody>
                           <Form onSubmit={e => this.onSubmit(e)}>
                           <FormGroup>
                                <Label>Mobile Network</Label>
                                <Input type="select" name="MobileNetwork" 
                             required onChange={ e => this.onChangeNetwork(e) }>                                   
                                   <option value="01">MTN</option>
                                   <option value="02">GLO</option>
                                   <option value="04">Airtel</option>
                                   <option value="03">9Mobile</option>
                               </Input>
                            </FormGroup>
                           <FormGroup>
                                <Label>Data Bundle</Label>
                                <Input type="select" name="Data" 
                             required onChange={ e => this.changeBundle(e) }>
                                {
                                    this.state.bundle.map((bundl) => {
                                        return <option key={bundl.amount}
                                        value={`${bundl.value},${bundl.amount}`}>
                                            {bundl.data}</option>
                                    })
                                }                          
                               </Input>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label>Mobile Number</Label>
                                <Input  onChange={e => this.setState({phone:e.target.value})}
                                name="MobileNumber" type="number"
                                 required />
                                
                            </FormGroup>
                            <FormGroup>
                            <Label>Amount To Pay</Label>
                            <Input value={this.state.amountToPay} name="AmountToPay" type="text" disabled  />
                            </FormGroup>
                            <Button color="primary" type="submit">
                                <Check/> Submit
                            </Button>
                            
                           </Form>
                            
                            
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
    dataModal:state.component.showDataModal,
    error:state.alert.errorAlert,
    user:state.user.user,
    loader:state.component.childLoader,
})
const mapDispatchToprops = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    setError: e => dispatch(setError(e)),
    setLoader: () => dispatch(setChildLoader()),
    clearLoader: () => dispatch(clearLoader()),
    buyDataFunc: (e) => dispatch(buyData(e))
})


export default connect(mapStateToProps,mapDispatchToprops)(DataModal);
