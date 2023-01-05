import { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"
import {useSelector, useDispatch} from "react-redux"
import { signin } from "../redux/auth/action";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position:center ;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
background-color: white;
width: 40%;
padding: 20px;
`;

const Title = styled.h1`
font-size:24px ;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;

`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin:10px 0px;
padding:10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: #2879fe;
  color: white;
  cursor: pointer;
  &:disabled{
    background-color:grey;
    color:"red";
    cursor: not-allowed;
  }

`;

const Error=styled.span`
  color:red;
`
const Text = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const auth= useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const [user,setUser]=useState({
    username:"",
    password:""
  })

  // HANDLE INPUTS
  const handleInputs=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }


  // SUBMIT SIGN IN FORM
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(signin(user))
}

  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input onChange={handleInputs} placeholder="username" name="username"/>
        <Input onChange={handleInputs} type="password" placeholder="password" name="password" />
        <Button onClick={handleSubmit} disabled={auth.isLoading}>LOGIN</Button>
        {auth.isFailure && <Error>{auth.message}</Error>}
        <Text>
        <Link to="/" className="links">DO NOT YOU REMEMBER THE PASSWORD</Link>
        </Text>
        <Text>
        <Link to="/signup" className="links">CREATE A NEW ACCOUNT</Link>
        </Text>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login