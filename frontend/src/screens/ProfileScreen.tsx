import { useState,useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import FormContainer from "../components/FormContainer";
import {useDispatch,useSelector} from "react-redux"
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { AuthState, setCredentials } from "../slices/authSlice";
import Loader from "../components/Loader";
export const ProfileScreen = () => {
    const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword,setConfirmPassword] = useState('')

const navigate = useNavigate()
const dispatch = useDispatch()
const { userInfo } = useSelector((state: { auth: AuthState }) => state.auth);
const [updateProfile,{isLoading}] = useUpdateUserMutation()
useEffect(() => {
    if (userInfo) {
      setName(userInfo.name ? String(userInfo.name) : '');
      setEmail(userInfo.email ? String(userInfo.email) : '');
    }
  }, [userInfo]);

const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password !== confirmPassword) {
        toast.error("passwords do not match")
    }else {
        try {
            const res = await updateProfile({
                _id:userInfo?._id,
                name,
                email,
                password,
            }).unwrap()
            dispatch(setCredentials({...res}))
            toast.success('profile updated')
        } catch (err) {
            console.error(err); // Log the error for debugging
            toast.error('An error occurred while updating the profile');
        }
        
    }

}
  return (
    <FormContainer >
        <h1>update profile</h1>
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
            {isLoading && (<Loader/>)}
            <Button type="submit" variant="primary" className="mt-3">
                update
            </Button>

        </Form>
    </FormContainer>
  )
}
