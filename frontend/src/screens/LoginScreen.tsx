import { useState,useEffect } from "react";
import {Link,Navigate,useNavigate} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux"
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/usersApiSlice";
import { AuthState, setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import React from 'react'
import Loader from "../components/Loader";

export const LoginScreen = () => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const navigate = useNavigate()
const dispatch = useDispatch()

const [login,{isLoading}] = useLoginMutation()

const { userInfo } = useSelector((state: { auth: AuthState }) => state.auth);
useEffect(() => {
    if(userInfo) {
        navigate('/')
    }
},[navigate,userInfo])
const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const res = await login({email,password}).unwrap();
        dispatch(setCredentials({...res}))
        navigate('/')
    } catch (error) {
        toast.error('invalid email or Password')
    }

}
  return (
    <FormContainer >
        <h1>sign in</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="password">
            <Form.Label>password </Form.Label>
            <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            </Form.Group>
            {isLoading && (<Loader/>)}
            <Button type="submit" variant="primary" className="mt-3">
                sign In
            </Button>
            <Row className="py-3">
                <Col>
                New Costumer? <Link to="/register">register</Link></Col>
            </Row>

        </Form>
    </FormContainer>
  )
}
