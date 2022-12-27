import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Container = styled.div`
  background-color:#2879fe;
`;
const Wrapper = styled.div`
  height: 60px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: auto;
`;
const Box = styled.div`
  display: flex;
  gap: 10px;
  flex: ${(props) => (props.emailCont ? "2" : "1")};
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
`;
const Text = styled.span`
  color: white;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  height: 35px;
  width: 75%;
  font-size: 1.2rem;
  outline: none;
  border-radius: 2px;
  border: none;
`;
const JoinUs = styled(Input)`
  background-color: #e8b44c;
  color: white;
  border: none;
  width: 15%;
  min-width: 100px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

const Icon = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #e8b44c;
  color: #eaeaea;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 300ms, background-color 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: black;
  }
`;

const Subscribe = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Text>
            Be in Touch With Us.
            <Img src="https://i.giphy.com/media/PmuLLvty3SDOIaEh77/giphy.webp" />
          </Text>
        </Box>
        <Box emailCont>
          <Input type="email" placeholder="Subscribe to our Email" />
          <JoinUs type="submit" value="JOIN US" />
        </Box>
        <Box>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>
          <Icon>
            <GoogleIcon />
          </Icon>
          <Icon>
            <PinterestIcon />
          </Icon>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Subscribe;
