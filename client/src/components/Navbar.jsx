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
  font-size: 1.5rem;
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
  margin:10px 0px;
padding:10px;
`;
const Navbar = () => {
  const [cartOpen,setCartOpen]=useState(false);
  const [acOpen,setAcOpen]=useState(false);
  const [wishOpen,setWishOpen]=useState(false);
  const [searchOpen,setSearchOpen]=useState(false);


  document.addEventListener("click",(event)=>{
    if(cartOpen){
      if(!event.target.closest(".cart") && !event.target.closest(".cartcontainer")){
        setCartOpen(false)
      }
    }
  })

  document.addEventListener("click",(event)=>{
    if(acOpen){
      if(!event.target.closest(".account") && !event.target.closest(".accountcontainer")){
        setAcOpen(false)
      }
    }
  })

  document.addEventListener("click",(event)=>{
    if(wishOpen){
      if(!event.target.closest(".wishlist") && !event.target.closest(".wishListcontainer")){
        setWishOpen(false)
      }
    }
  })
  
  // Active tab
  const handleActiveTab=(element)=>{
    let current_active_tab=document.querySelector(".active")
    current_active_tab.classList.remove("active");
    element.classList.add("active")
  }

  return (
    <Header>
      <Wrapper>
        <Left>
          <Box>
            <Img src="/img/uk.png" alt="language flag" />
            <KeyboardArrowDownIcon />
          </Box>
          <Box tabindex="0" className="link" onClick={(event)=>handleActiveTab(event.target)}>
            <Link className="links" to="/products/men">
              Men
            </Link>
          </Box>
          <Box tabIndex="1" className="link" onClick={(event)=>handleActiveTab(event.target)}>
            <Link className="links" to="/products/women">
              Women
            </Link>
          </Box>
          <Box className="link" onClick={(event)=>handleActiveTab(event.target)}>
            <Link className="links" to="/products/children">
              Children
            </Link>
          </Box>
          <Box className="link" onClick={(event)=>handleActiveTab(event.target)}>
            <Link className="links" to="/products/accessories">
              Accessories
            </Link>
          </Box>
        </Left>
        <Center onClick={(event)=>{
          let current_active_tab=document.querySelector(".active")
          current_active_tab.classList.remove("active");
          document.querySelector(".home").classList.add("active")
        }}>
          <Link className="links" to="/" >
            SHOP
          </Link>
        </Center>
        <Right>
          <Box className="link" onClick={(event)=>handleActiveTab(event.target)}>
            <Link className="links home active" to="/">
              Home
            </Link>
          </Box>
          <Box className="link"onClick={(event)=>handleActiveTab(event.target)} >
            <Link onClick={()=>window.location.hash="#about"} className="links" >
              About
            </Link>
          </Box>
          <Box className="link" onClick={(event)=>handleActiveTab(event.target)}>
            <Link onClick={()=>window.location.hash="#contact"}  className="links">
              Contact
            </Link>
          </Box>

          <Box icons>
            <SearchIcon className="icon search" onClick={(event)=>{
              setSearchOpen(pre=>!pre)
            }}/>
            <PersonOutlineIcon onClick={(event)=>{
              setAcOpen(pre=>!pre)
            }} className="icon account"/>
            <FavoriteBorderIcon className="icon wishlist" onClick={(event)=>{
              setWishOpen(pre=>!pre)
            }}/>
            <Box className="icon cart" onClick={(event)=>{
              setCartOpen(pre=>!pre)
            }}>
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
