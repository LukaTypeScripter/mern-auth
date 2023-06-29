import { useState } from "react";
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from "../components/FormContainer";


import React from 'react'

export const RegisterScreen = () => {
    const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword,setConfirmPassword] = useState('')
const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit')

}
  return (
    <FormContainer >
        <h1>sign in</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter Email adress"
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
            <Form.Group className="my-2" controlId="password">
            <Form.Label>confirm password</Form.Label>
            <Form.Control
            type="password"
            placeholder="confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
            </Form.Group>
            
            <Button type="submit" variant="primary" className="mt-3">
                sign In
            </Button>
            <Row className="py-3">
                <Col>
                Already have an account? <Link to="/login">login</Link></Col>
            </Row>

        </Form>
    </FormContainer>
  )
}
