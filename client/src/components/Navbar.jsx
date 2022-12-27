import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import Account from "./Account";
import WishList from "./WishList";

const Header = styled.header`
`;

const Wrapper = styled.nav`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  height: 80px;
`;
const Left = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: ${(props) => (props.icons ? "15px" : "0")};
  & .icon{
    cursor: pointer;
  }
  &:focus{
    border: 1px solid red;
  }
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
`;
const Center = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  font-size: 1.3rem;
`;
const Right = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
const CartCount = styled.span`
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  right: -12px;
  top: -10px;
`;

const InputHolder=styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const Input=styled.input`
  width: 60%;
  height: 40px;
  padding: 10px;
  font-size: 1.2rem;
  outline: none;
`;
const Navbar = () => {
  const [cartOpen,setCartOpen]=useState(false);
  const [acOpen,setAcOpen]=useState(false);
  const [wishOpen,setWishOpen]=useState(false);
  const [searchOpen,setSearchOpen]=useState(false);

  document.addEventListener("click",(event)=>{
    if(!event.target.closest(".cart") && !event.target.closest(".cartcontainer")){
      setCartOpen(false)
    }
  })

  document.addEventListener("click",(event)=>{
    if(!event.target.closest(".account") && !event.target.closest(".accountcontainer")){
      setAcOpen(false)
    }
  })

  document.addEventListener("click",(event)=>{
    if(!event.target.closest(".wishlist") && !event.target.closest(".wishListcontainer")){
      setWishOpen(false)
    }
  })
  

  return (
    <Header>
      <Wrapper>
        <Left>
          <Box>
            <Img src="/img/uk.png" alt="language flag" />
            <KeyboardArrowDownIcon />
          </Box>
          <Box tabindex="0" className="link">
            <Link className="links" to="/products/men">
              Men
            </Link>
          </Box>
          <Box tabIndex="1" className="link">
            <Link className="links" to="/products/women">
              Women
            </Link>
          </Box>
          <Box className="link">
            <Link className="links" to="/products/children">
              Children
            </Link>
          </Box>
          <Box className="link">
            <Link className="links" to="/products/accessories">
              Accessories
            </Link>
          </Box>
        </Left>
        <Center>
          <Link className="links" to="/">
            SHOP
          </Link>
        </Center>
        <Right>
          <Box className="link">
            <Link className="links" to="/">
              Homepage
            </Link>
          </Box>
          <Box className="link" >
            <Link onClick={()=>window.location.hash="#about"} className="links" >
              About
            </Link>
          </Box>
          <Box className="link">
            <Link onClick={()=>window.location.hash="#contact"}  className="links">
              Contact
            </Link>
          </Box>
          <Box className="link">
            <Link onClick={()=>window.location.hash="#stores"} className="links">
              Stores
            </Link>
          </Box>
          <Box icons>
            <SearchIcon className="icon search" onClick={()=>setSearchOpen(!searchOpen)}/>
            <PersonOutlineIcon onClick={()=>setAcOpen(!acOpen)} className="icon account"/>
            <FavoriteBorderIcon className="icon wishlist" onClick={()=>setWishOpen(!wishOpen)}/>
            <Box className="icon cart" onClick={()=>setCartOpen(!cartOpen)}>
              <AddShoppingCartIcon  />
              <CartCount>0</CartCount>
            </Box>
          </Box>
        </Right>
      </Wrapper>
      {searchOpen &&
      <InputHolder>
      <Input type="text" placeholder="Search Products"/>
      </InputHolder>}
      {cartOpen && <Cart/>}
      {acOpen && <Account />}
      {wishOpen && <WishList />}
    </Header>
    
  );
};

export default Navbar;
