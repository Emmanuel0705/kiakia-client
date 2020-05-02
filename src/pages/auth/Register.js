import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button,
     Alert, InputGroup, InputGroupAddon } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, Lock,User } from 'react-feather';
import {registerUser} from "../../redux/Actions/auth.action"
import logo from '../../assets/images/logo.png'
import Loader from '../../components/Loader';


const Login = ({registerUser,error,history,user,loading}) => {
    useEffect(() => {
        if(user.wallet) history.push('/dashboard')
    })
    const [formData,setFormData] = useState({password:"",email:"",username:"",confirmPassword:""})
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = e => {
        registerUser(formData,history)
    }

        return (
            <React.Fragment>
                    
                { <div className="account-pages my-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={10}>
                                <Card className="">
                                    <CardBody className="p-0">
                                        <Row>
                                            <Col md={6} className="p-5 position-relative">
                                                { /* preloader */}
                                                {loading && <Loader />}

                                                <div className="mx-auto mb-5">
                                                    <a href="/"> 
                                                    <img src={logo} alt="" height="24" />                                                       
                                                        <h3 
                                                        className="d-inline align-middle ml-1 text-logo">
                                                            KIAKIA
                                                        </h3>
                                                    </a>
                                                </div>

                                                <h6 className="h5 mb-0 mt-4">
                                                    Register Below!
                                                </h6>
                                                <p className="text-muted mt-1 mb-4">
                                                    Fill the below form to register with us</p>


                                                {error && <Alert color='danger' isOpen={error ? true : false}>
                                                    <div>{error}</div>
                                                </Alert>}

                                                <AvForm onValidSubmit={(e) => onSubmit()} className="authentication-form">
                                                    <AvGroup className="">
                                                        <Label for="username">Username</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <User className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput value={formData.username}
                                                            onChange={e => onChange(e)}
                                                             type="text" name="username" id="username"
                                                             placeholder="John" required />
                                                        </InputGroup>
                                                         
                                                        <AvFeedback>Email is required</AvFeedback>
                                                    </AvGroup>
                                                    <AvGroup className="">
                                                        <Label for="username">Email Address</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Mail className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput value={formData.email}
                                                            onChange={e => onChange(e)}
                                                             type="email" name="email" id="username"
                                                             placeholder="hello@gmail.com" required />
                                                        </InputGroup>
                                                         
                                                        <AvFeedback>Email is required</AvFeedback>
                                                    </AvGroup>


                                                    <AvGroup className="mb-3">
                                                        <Label for="password">Password</Label>
                                                        
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Lock className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="password"
                                                            value={formData.password} name="password" id="password"
                                                             placeholder="Enter your password" required
                                                             onChange={e => onChange(e)} />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>
                                                    <AvGroup className="mb-3">
                                                        <Label for="password">Confirm Password</Label>
                                                        
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Lock className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="password"
                                                            value={formData.confirmPassword} name="confirmPassword" id="password"
                                                             placeholder="Enter your password" required
                                                             onChange={e => onChange(e)} />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>

                                                    <FormGroup className="form-group mb-0 text-center">
                                                        <Button color="primary" 
                                                        className="btn-block"
                                                        type="submit">Log In</Button>
                                                    </FormGroup>
                                                </AvForm>
                                            </Col>

                                            <Col md={6} className="d-none d-md-inline-block">
                                                <div className="auth-page-sidebar">
                                                    <div className="overlay"></div>
                                                    <div className="auth-user-testimonial">
                                                        <p className="font-size-24 font-weight-bold text-white mb-1">I simply love it!</p>
                                                        <p className="lead">"It's a elegent templete. I love it very much!"</p>
                                                        <p>- Admin User</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col className="col-12 text-center">
                                <p className="text-muted">Already have an account? <Link to="/login" className="text-primary font-weight-bold ml-1">Login</Link></p>
                            </Col>
                        </Row>

                    </Container>
                </div>}
            </React.Fragment>
        )
    }
const mapStateToProps = state => ({
    error:state.alert.errorAlert,
    token:state.session.token,
    user:state.user.user,
    loading:state.component.childLoader
})
const mapDispatchToProps = dispatch => ({
    registerUser: (data,history) => dispatch(registerUser(data,history))
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));