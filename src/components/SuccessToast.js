// @flow
import React from 'react';
import {connect} from 'react-redux'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Check } from 'react-feather';


const SuccessToast = ({alert}) => {
    return (
        <React.Fragment>
            {
                alert ? 
                <div className="p-3 my-2 rounded my-toast">
                <Toast>
                    <ToastHeader className="alert alert-success">
                        Success Message! <Check/>
                     </ToastHeader>
                     <ToastBody className="text-success">
                       {alert}
                     </ToastBody>
               </Toast>
            </div> : ''
            }
         
        </React.Fragment>
    );
};
const mapStateToProps = (state) => ({
    alert:state.alert.successAlert,
})

export default connect(mapStateToProps)(SuccessToast);
