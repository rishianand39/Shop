import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import electronics from "../images/electronics.jpg"
import sale from "../images/sale.avif";
import men from "../images/men.avif"
import women from "../images/women.avif"
import shoes from "../images/shoes.avif"
import newSeason from "../images/new-season.avif"
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
  const navigate=useNavigate()

  return (
    <Wrapper>
      <Box gridarea="sale">
        <Img src={sale} />
          <Button onClick={()=>{
            navigate({
              pathname:"/products",
              search:'?category=sale'
            })
          }}>SALE</Button>
      </Box>
      <Box gridarea="newseason">
        <Img src={newSeason} />
        <Button onClick={()=>{
            navigate({
              pathname:"/products",
              search:'?category=newseason'
            })
          }}>NEW SEASON</Button>
      </Box>
      <Box gridarea="men">
        <Img src={men} />
        <Button onClick={()=>{
            navigate({
              pathname:"/products",
              search:'?category=men'
            })
          }}>MEN</Button>
      </Box>
      <Box gridarea="accessories">
        <Img src={electronics} />
        <Button onClick={()=>{
            navigate({
              pathname:"/products",
              search:'?category=electronics'
            })
          }}>ELECTRONICS</Button>
      </Box>
      <Box gridarea="women">
        <Img src={women} />
        <Button onClick={()=>{
            navigate({
              pathname:"/products",
              search:'?category=women'
            })
          }}>WOMEN</Button>
      </Box>
      <Box gridarea="shoes">
        <Img src={shoes} />
        <Button onClick={()=>{
            navigate({
              pathname:"/products",
              search:'?category=shoe'
            })
          }}>SHOES</Button>
      </Box>
    </Wrapper>
  );
};

export default Categories;
