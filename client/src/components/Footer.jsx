import styled from "styled-components";
import { Link } from "react-router-dom";
const FooterContainer = styled.footer`
  margin: 100px 0 20px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin: 0 10% 20px 10%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.copywrites ? "row" : "column")};
  gap: 10px;
  flex: 1;
  text-align: justify;
`;
const Box = styled.span`
  color: gray;
  font-size: ${(props) => (props.logo ? "1.9rem" : "inherit")};
  color:${props=>props.logo? "#2879fe" : "inherit"} ;
  font-weight: ${props=>props.logo? "bold" : "inherit"};
  display: flex;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
`;
const Img = styled.img`
  width: 100%;
  height: 70px;
  object-fit: cover;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Column id="stores">
          <Heading>
            <Link className="links" to="/">
              Categories
            </Link>
          </Heading>
          <Box>
            <Link className="links" to="/">
              Women
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
              Men
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
              Shoes
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
              Accessories
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
             
              New Arrivals
            </Link>
          </Box>
        </Column>
        <Column>
          <Heading>Links</Heading>
          <Box>
            <Link className="links" to="/">
              FAQ
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
              Pages
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
              Stores
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
              Compare
            </Link>
          </Box>
          <Box>
            <Link className="links" to="/">
              Cookies
            </Link>
          </Box>
        </Column>
        <Column id="about">
          <Heading>About</Heading>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum accusamus laudantium necessitatibus blanditiis, magnam, modi
            recusandae laudantium, laborum fuga quo consequuntur illum.
          </Box>
        </Column>
        <Column id="contact">
          <Heading>Contact</Heading>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum accusamus laudantium necessitatibus blanditiis, magnam, modi
            recusandae laudantium, laborum fuga quo consequuntur illum.
          </Box>
        </Column>
      </Wrapper>
      <Wrapper>
        <Column copywrites>
          <Box logo>
            <Link className="links" to="/">
              Store
            </Link>
          </Box>
          <Box> © Copyright 2023. All Rights Reserved</Box>
        </Column>
        <Column>
          <Img src="/img/payment.png" alt="payment" />
        </Column>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
