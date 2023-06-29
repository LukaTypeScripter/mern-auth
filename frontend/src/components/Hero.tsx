import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Hero() {
  return (
    <div className='py-5'>
        <Container className='d-flex justify-content-center'>
            <Card className='p-5 d-flex flex-column align-items-center
            hero-card bg-light w-75
            '>
                <h1 className='text-center mb-4'>MERN AUTH</h1>
                <p className='text-center mb-4'>
                wdawdawdawdawd
                </p>
                <div className='d-flex'>
                    <LinkContainer to={'/login'}>
                    <Button className='me-3'  variant='primary'>
                        sign in
                    </Button>
                    </LinkContainer>
                    <LinkContainer to={"register"}>
                    <Button   variant='secondary'>
                       sign up
                    </Button>
                    </LinkContainer>
                </div>
            </Card>
        </Container>
    </div>
  )
}

export default Hero