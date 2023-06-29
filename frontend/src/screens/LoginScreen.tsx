import { useState } from "react";
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from "../components/FormContainer";


import React from 'react'

export const LoginScreen = () => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit')

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
