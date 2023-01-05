import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAccount } from "../redux/auth/action";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
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
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: #2879fe;
  color: white;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

const Error = styled.span`
  color: red;
  margin: 8px;
`;

const Text = styled.div`
  margin: 5px 20px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  console.log(auth);

  // HANDLING INPUTS
  const handleClick = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLING CREATE/SUBMIT BTN
  const handleCreateAccount = (event) => {
    event.preventDefault();
    dispatch(createAccount(user));
  };

  return (
    <Container>
        <Wrapper> 
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input
              onChange={handleClick}
              name="username"
              placeholder="username"
              type="text"
            />
            <Input
              onChange={handleClick}
              name="first_name"
              placeholder="First Name"
              type="text"
            />
            <Input
              onChange={handleClick}
              name="last_name"
              placeholder="Last Name"
              type="text"
            />
            <Input
              onChange={handleClick}
              name="email"
              placeholder="email"
              type="email"
            />
            <Input
              onChange={handleClick}
              name="password"
              placeholder="password"
              type="password"
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button disabled={auth.isLoading} onClick={handleCreateAccount}>
              CREATE
            </Button>

            <Text>
             <Link to="/signup" className="links">ALREADY HAVE A ACCOUNT?</Link>
            </Text>
            {auth.isFailure && <Error>{auth.message}</Error>}
          </Form>
        </Wrapper>
    </Container>
  );
};

export default Register;
