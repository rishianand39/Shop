import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 4;
  background-color: white;
  width: 250px;
  padding: 10px;
  border-radius: 3px;
`;
const Title = styled.h2`
  color: gray;
  margin: 0;
  font-size: 1.2rem;
`;
const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
  display: flex;
  gap:5px;
  align-items: center;
  &:hover{
    color:#2879fe;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ButtonCont = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;
const Button = styled.button`
  background-color: #2879fe;
  border: none;
  color: white;
  width: 100px;
  height: 35px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;
`;
const Account = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {loggedIn ? (
        <Wrapper className="accountcontainer">
          <Box>
            <Link className="links" to="/orders">
              <Title>Your Account</Title>
            </Link>
            <Link className="links" to="/profile">
              <Text>Profile</Text>
            </Link>
            <Link className="links" to="/orders">
              <Text>Your Orders</Text>
            </Link>
            <Link className="links" to="/signout">
                <Text>
                  Sign Out
                  <ExitToAppIcon />
                </Text>
            </Link>
          </Box>
        </Wrapper>
      ) : (
        <Wrapper className="accountcontainer">
          <Box>
            <Title>Welcome</Title>
            <Text>To access account and manage orders</Text>
            <ButtonCont btnholder>
              <Link to="/signin">
              <Button>SIGNIN</Button>
              </Link>
              <Link to="/signup">
              <Button>SIGNUP</Button>
              </Link>
            </ButtonCont>
          </Box>
          <Box>
            <Link className="links" to="/orders">
              <Text>Orders</Text>
            </Link>
            <Link className="links" to="/wishlist">
              <Text>Wishlist</Text>
            </Link>
            <Link className="links" to="/contact">
              <Text>Contact Us</Text>
            </Link>
            <Link className="links" to="/coupons">
              <Text>Coupons</Text>
            </Link>
          </Box>
        </Wrapper>
      )}
    </>
  );
};

export default Account;
