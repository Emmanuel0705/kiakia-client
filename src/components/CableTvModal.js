// @flow
import React, { Fragment } from 'react';
import {connect} from 'react-redux'
import {closeModal, setChildLoader, clearLoader} from '../redux/Actions/component.action'
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup,
    Form,Input,ListGroup,ListGroupItem} from 'reactstrap';
import { Check} from 'react-feather';
import { setError } from '../redux/Actions/alert.action';
import Loader from '../components/Loader';
import { cableTv, clearCableData } from '../redux/Actions/transaction.action';

class DataModal extends React.Component {
   constructor(props){
       super(props)
       this.dstvP = [
         {name:'DStv Access', package:'01',amount:'2000'},
         {name:'DStv Family', package:'02',amount:'4000'},
         {name:'DStv Compact', package:'03',amount:'6800'},
         {name:'DStv Compact Plus', package:'04',amount:'10650'},
         {name:'DStv Premium', package:'05',amount:'15800'},
         {name:'DStv Premium + HD/Exra View', package:'06',amount:'18000'}
      ] 
      this.gotvP = [
        {name:'GOtv Lite', package:'01',amount:'400'},
        {name:'GOtv Value', package:'02',amount:'1250'},
        {name:'GOtv Plus', package:'03',amount:'1900'},
        {name:'GOtv Max', package:'04',amount:'3200'}
      ]
      this.starTP = [
        {name:'SarTimes Nova', package:'01',amount:'900'},
        {name:'SarTimes Basic', package:'02',amount:'1300'},
        {name:'SarTimes Smart', package:'03',amount:'1900'},
        {name:'SarTimes Classic', package:'04',amount:'2600'},
        {name:'SarTimes Unique', package:'05',amount:'3800'},
        {name:'SarTimes Super', package:'06',amount:'3800'}
      ]
      this.state = {
        bundle:this.dstvP,
        cable:'01',
        package:this.dstvP[0].package,
        name:this.dstvP[0].name,
        amount:this.dstvP[0].amount,
        cardNo:""
   }
            
   }
 
 onSubmit = e => {
    e.preventDefault()
    const data = {
        cable:this.state.cable,
        package:this.state.package,
        cardNo:this.state.cardNo,
        packageName:this.state.name,
        amount:this.state.amount
    }
    this.props.setLoader()
    this.props.cableTvFunc(data)           
}
onSubscribe = () => {
    this.props.setLoader()
    this.props.cableTvFunc(this.props.cableData)
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
changePackage = (e) => {
    this.setState({package:e.target.value.split(",")[0],
    amount:e.target.value.split(",")[1],name:e.target.value.split(",")[2]})
}

   render(){
    return (
        <React.Fragment>
            <Modal
                isOpen={this.props.cableModal}
                
                className="modal-dialog-scrollable"
                size={null}>
                    {this.props.loader && <Loader/>}
                <ModalHeader toggle={() => this.props.closeModal()}>Cable TV Subscription</ModalHeader>
                  {this.props.error && <div className="alert alert-danger m-3">{this.props.error} </div>}
               
                <ModalBody>
                
                     <Card>
                        <CardBody>
                           {
                               this.props.cableData ? 
                               <Fragment>
                               <ListGroup className="font-size-16">
                                    <ListGroupItem active
                                     className="font-size-22 text-center font-weight-bolder" 
                                    style={{fontFamily:"courier"}} >Confirm Your Details
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Decode Name:</b> {this.props.cableData.name}
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Decode Number:</b> {this.props.cableData.cardNo}
                                     </ListGroupItem>
                                    <ListGroupItem >
                                        <b>Package:</b> {this.props.cableData.packageName}
                                     </ListGroupItem>
                                     <ListGroupItem >
                                         <b>Amount:</b> {this.props.cableData.amount}
                                     </ListGroupItem>
                             </ListGroup>
                             <Button color="primary" onClick={() => this.onSubscribe()}
                              className="mt-2 btn-block">Proceed</Button>
                             <Button color="danger" onClick={() => this.props.clearCableData()} className="mt-2 float-right btn-block">Cancel Transaction</Button>
                             </Fragment>  :
                              <Form onSubmit={e => this.onSubmit(e)}>
                                <FormGroup>
                                        <Label>Cable Tv</Label>
                                        <Input type="select" required 
                                        onChange={ e => this.onChangeCable(e) }>                                   
                                        <option value="01">DSTV</option>
                                        <option value="02">GOTV</option>
                                        <option value="03">StartTimes</option>
                                    </Input>
                                    </FormGroup>
                                <FormGroup>
                                        <Label>Package</Label>
                                        <Input type="select" name="Data" required 
                                        onChange={ e => this.changePackage(e) }>
                                        {
                                            this.state.bundle.map((bundl) => {
                                                return <option key={bundl.name}
                                                value={`${bundl.package},${bundl.amount},${bundl.name}`}>
                                                    {bundl.name}</option>
                                            })
                                        }                          
                                    </Input>
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label>Card No</Label>
                                        <Input value={this.state.cardNo} onChange={e => this.setState({cardNo:e.target.value})}
                                        type="number"
                                        required />
                                        
                                    </FormGroup>
                                    <FormGroup>
                                    <Label>Amount To Pay</Label>
                                    <Input value={this.state.amount} name="AmountToPay" type="text"
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
    cableModal:state.component.showCableModal,
    error:state.alert.errorAlert,
    user:state.user.user,
    loader:state.component.childLoader,
    cableData:state.transaction.cableDetails
})
const mapDispatchToprops = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    setError: e => dispatch(setError(e)),
    setLoader: () => dispatch(setChildLoader()),
    clearLoader: () => dispatch(clearLoader()),
    cableTvFunc: (e) => dispatch(cableTv(e)),
    clearCableData: () => dispatch(clearCableData())
})


export default connect(mapStateToProps,mapDispatchToprops)(DataModal);
