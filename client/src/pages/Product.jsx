import { useState } from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useSearchParams } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 95vw;
  margin: auto;
`;
const Left = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  flex: 1;
`;
const SmallImgCon = styled.div`
  flex: 1;
  height: fit-content;
  position: sticky;
  top: 0;
`;
const MainImgCont = styled.div`
  flex: 4;
  height: 80vh;
`;
const Img = styled.img`
  width: ${(props) => (props.previewImg ? "150px" : "100%")};
  height: ${(props) => (props.previewImg ? "150px" : "100%")};
  cursor: ${(props) => props.previewImg && "pointer"};
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 20px;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-top: 0;
`;
const Text = styled.p`
font-weight: ${props=>props.price && "bold"};
font-size: ${props=>props.price && "1.5rem"};
color: ${props=>props.price && "#2879fe"};
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  color: #2879fe;
`;
const AddToCart = styled.button`
  background-color: #2879fe;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-weight: bold;
  width: 200px;
  margin: 20px 0;
  cursor: pointer;
`;
const Buy= styled.button`
   background-color: #2879fe;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-weight: bold;
  width: 200px;
  height: 45px;
  margin: 20px 0;
  cursor: pointer; 
`
const Desc = styled.div`
  margin-top: 100px;
`;
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(1);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1670514808108-190b4fa1a328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1670607615480-1b235656deda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
    },
  ];
  return (
    <Wrapper>
      <Left>
        <SmallImgCon>
          {images.map((image) => (
            <Img
              key={image.id}
              previewImg
              src={image.url}
              alt=""
              onClick={() => setSelectedImg(image.id)}
            />
          ))}
        </SmallImgCon>
        <MainImgCont>
          <Img mainImg src={`${images[selectedImg - 1].url}`} alt="" />
        </MainImgCont>
      </Left>
      <Right>
        <Title>Title</Title>
        <Text price>$199</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          totam officia distinctio vel, aperiam animi nobis, ex beatae quisquam
          iure nihil ullam accusamus, quam et. Vero modi ab reiciendis. Vitae!
        </Text>
        <Box>
          <Button
            onClick={() => setQuantity((pre) => (pre === 1 ? 1 : pre - 1))}
          >
            -
          </Button>
          {quantity}
          <Button onClick={() => setQuantity((pre) => pre + 1)}>+</Button>
        </Box>
        <Box>
        <AddToCart>
          <AddShoppingCartIcon /> ADD TO CART
        </AddToCart>
        <Buy>BUY NOW</Buy>
        </Box>
        <Box>
          <Button>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </Button>
          <Button>
            <BalanceIcon /> ADD TO COMPARE
          </Button>
        </Box>
        <Desc>
          <Text>Vendor: Polo</Text>
          <Text>Product Type: T-Shirt</Text>
          <Text>Tags: tshirt, women,top</Text>
          <hr />
          <Text>DESCRIPTION</Text>
          <hr />
          <Text>ADDITIONAL INFORMATION</Text>
          <hr />
          <Text>FAQ</Text>
        </Desc>
      </Right>
    </Wrapper>
  );
};

export default Product;
