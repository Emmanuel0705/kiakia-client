// @flow
import React, { Fragment } from 'react';
import {connect} from 'react-redux'
import {closeModal, setChildLoader, clearLoader} from '../redux/Actions/component.action'
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup,
    Form,Input,ListGroup,ListGroupItem} from 'reactstrap';
import { Check} from 'react-feather';
import { setError } from '../redux/Actions/alert.action';
import Loader from '../components/Loader';
import { cableTv, payElectricityBill, clearElectData } from '../redux/Actions/transaction.action';

class ElectricityModal extends React.Component {
   constructor(props){
       super(props)
       this.company = [
         {name:'Eko Electric - PHCN', number:'01'},
         {name:'Ikeja Electric - IKEDC', number:'02'},
         {name:'Kano Electric - KEDCO', number:'04'},
         {name:'Port Harcourt - PHED', number:'05'},
         {name:'Jos Electric - JED', number:'06'}
      ] 
     
      this.state = {
        meterType:'01',
        meterNo:'',
        compName:this.company[0].name,
        compNo:this.company[0].number,
        amount:''
   }
            
   }
 
 onSubmit = e => {
    e.preventDefault()
    this.props.setLoader()
    console.log(this.state)
    this.props.payBill(this.state)      
}
onSubscribe = () => {
    this.props.setLoader()
    this.props.payBill(this.props.electricityData) 

}
componentDidMount(){
   
}
onChangeCable = e => {
    if(e.target.value === '01'){
        this.setState({bundle:this.dstvP,cable:"01",package:this.dstvP[0].package,
        name:this.dstvP[0].name,amount:this.dstvP[0].amount})
    }
    if(e.target.value === '02'){
        this.setState({bundle:this.gotvP,cable:"02",package:this.gotvP[0].package,
        name:this.gotvP[0].name,amount:this.gotvP[0].amount})
    }
    if(e.target.value === '03'){
        this.setState({bundle:this.starTP,cable:"03",package:this.starTP[0].package,
        name:this.starTP[0].name,amount:this.starTP[0].amount})
    }
   
}
onChangeCompany = (e) => {
    this.setState({number:e.target.value.split(",")[0],
    compName:e.target.value.split(",")[1]})
}

   render(){
    return (
        <React.Fragment>
            <Modal
                isOpen={this.props.electricityModal}
                
                className="modal-dialog-scrollable"
                size={null}>
                    {this.props.loader && <Loader/>}
                <ModalHeader toggle={() => this.props.closeModal()}>Electricity Bill Payment</ModalHeader>
                  {this.props.error && <div className="alert alert-danger m-3">{this.props.error} </div>}
               
                <ModalBody>
                
                     <Card>
                        <CardBody>
                           {
                               this.props.electricityData ? 
                               <Fragment>
                               <ListGroup className="font-size-16">
                                    <ListGroupItem active
                                     className="font-size-22 text-center font-weight-bolder" 
                                    style={{fontFamily:"courier"}} >Confirm Your Details
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Company Name: </b> 
                                        {this.props.electricityData.compName}
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Meter Type: </b>
                                         {this.props.electricityData.meterType === "01"? 
                                         (" Prepiad"):(" Postpaid")}
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Customer Name: </b> {this.props.electricityData.name}
                                     </ListGroupItem>
                                     <ListGroupItem >
                                        <b>Meter No.: </b> {this.props.electricityData.meterNo}
                                     </ListGroupItem>
                                     <ListGroupItem >
                                         <b>Amount: </b> ₦{this.props.electricityData.amount}
                                     </ListGroupItem>
                             </ListGroup>
                             <Button color="primary" onClick={(e) => this.onSubscribe(e)}
                              className="mt-2 btn-block">Proceed</Button>
                             <Button color="danger" onClick={() => this.props.clearElectData()} className="mt-2 float-right btn-block">Cancel Transaction</Button>
                             </Fragment>  :
                              <Form onSubmit={e => this.onSubmit(e)}>
                                <FormGroup>
                                        <Label>Electricity Company</Label>
                                        <Input type="select" required 
                                        onChange={ e => this.onChangeCompany(e) }>                                   
                                         {
                                            this.company.map((comp) => {
                                                return <option key={comp.name}
                                                value={`${comp.number},${comp.name}`}>
                                                    {comp.name}</option>
                                            })
                                        }     
                                    </Input>
                                    </FormGroup>
                                <FormGroup>
                                        <Label>Meter Type</Label>
                                        <Input type="select" name="Data" required 
                                        onChange={ e => this.setState({meterType:e.target.value}) }>
                                        <option value='01'>
                                            Prepaid Meter
                                        </option>
                                        <option value='02'>
                                            Postpaid Meter
                                        </option>                                                            
                                    </Input>
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label>Meter Number</Label>
                                        <Input value={this.state.meterNo} 
                                        onChange={e => this.setState({meterNo:e.target.value})}
                                        type="number"
                                        required />
                                        
                                    </FormGroup>
                                    <FormGroup>
                                    <Label>Amount</Label>
                                    <Input required value={this.state.amount} name="AmountToPay"
                                      onChange={e => this.setState({amount:e.target.value})} 
                                      type="number" />
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
    electricityModal:state.component.showElectricModal,
    error:state.alert.errorAlert,
    user:state.user.user,
    loader:state.component.childLoader,
    cableData:state.transaction.cableDetails,
    electricityData:state.transaction.electricityData
})
const mapDispatchToprops = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    setError: e => dispatch(setError(e)),
    setLoader: () => dispatch(setChildLoader()),
    clearLoader: () => dispatch(clearLoader()),
    cableTvFunc: (e) => dispatch(cableTv(e)),
    clearElectData: () => dispatch(clearElectData()),
    payBill:(data) => dispatch(payElectricityBill(data))
})


export default connect(mapStateToProps,mapDispatchToprops)(ElectricityModal);
