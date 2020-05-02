// @flow
import React from 'react';
import {connect} from 'react-redux'
import { Toast, ToastBody, ToastHeader} from 'reactstrap';


const ErrorToast = ({alert}) => {
    return (
        <React.Fragment>
            {
                alert ? 
                <div className="p-3 my-2 rounded my-toast">
                <Toast>
                    <ToastHeader className="alert alert-danger">
                        Error Message !
                     </ToastHeader>
                     <ToastBody className="text-danger">
                        {alert}
                     </ToastBody>
               </Toast>
            </div> : ''
            }
         
        </React.Fragment>
    );
};
const mapStateToProps = (state) => ({
    alert:state.alert.errorAlert,
})

export default connect(mapStateToProps)(ErrorToast);
