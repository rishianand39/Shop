import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  width: 80vw;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 250px);
  grid-template-areas:
    "sale newseason men accessories"
    "women newseason shoes shoes";
  gap: 5px;
`;
const Box = styled.div`
  position: relative;
  grid-area: ${(props) => props.gridarea && `${props.gridarea}`};
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  cursor: pointer;
  background: white;
  text-transform: uppercase;
  font-weight: 500;
  border: none;
  height: 30px;
  min-width: 100px;
  padding: 5px;
`;
const Categories = () => {
  return (
    <Wrapper>
      <Box gridarea="sale">
        <Img src="https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <Link to="/products/sale">
          <Button>SALE</Button>
        </Link>
      </Box>
      <Box gridarea="newseason">
        <Img src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80" />
        <Link to="/products/newseason">
          <Button>NEW SEASON</Button>
        </Link>
      </Box>
      <Box gridarea="men">
        <Img src="https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <Link to="/products/men">
          <Button>MEN</Button>
        </Link>
      </Box>
      <Box gridarea="accessories">
        <Img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <Link to="/products/accessories">
          <Button>ACCESSORIES</Button>
        </Link>
      </Box>
      <Box gridarea="women">
        <Img src="https://plus.unsplash.com/premium_photo-1664202526793-fca03a9cab29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <Link to="/products/women">
          <Button>WOMEN</Button>
        </Link>
      </Box>
      <Box gridarea="shoes">
        <Img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Link to="/products/shoes">
          <Button>SHOES</Button>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default Categories;
