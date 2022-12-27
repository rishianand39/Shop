import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 4;
  background-color: white;
  width: 450px;
  padding: 10px;
  border-radius: 3px;
`;
const Heading = styled.h2`
  color: gray;
  margin: 0;
  font-size: 1.2rem;
`;
const Items = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
`;
const Title = styled.h4`
  margin: 0;
  color: gray;
`;
const Img = styled.img`
  width: 80px;
  height: 100%;
`;
const Box = styled.div`
display: ${props=>props.desc && "flex"};
& .remove{
  color: red;
  cursor: pointer;
}
`;
const Text = styled.p`
  font-size: 0.8rem;
  margin-top: 5px;
  color: ${(props) => props.price && "#2879fe"};
  font-size: ${(props) => props.price && "0.8rem"};
  font-size: ${props=>props.total && "1.2rem"};
  font-weight: ${props=>props.total && "bold"};
  font-weight: ${(props) => props.price && "bold"};
  color: ${props=>props.reset && "red"};
  cursor: ${props=>props.reset && "pointer"};

`;
const Button = styled.button`
  background-color: #2879fe;
  border: none;
  color: white;
  width: 180px;
  height: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 10px ;
`
const Cart = () => {
  const carts = [
    {
      id: 1,
      title: "Diverse Men Casual Shirt",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quae delectus possimus obcaecati perferendis tempore n",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
      isNew: true,
    },
    {
      id: 2,
      title: "Diverse Men Casual Shirt",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quae delectus possimus obcaecati perferendis tempore n",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
      isNew: true,
    },
  ];



  return (
    <Wrapper className="cartcontainer">
      <>
      <Heading>Products in your cart</Heading>
      {carts.map((cart) => (
        <Items key={cart.id}>
          <Img src={cart.images[1]} />
          <Box>
            <Title>{cart.title}</Title>
            <Box desc>
              <div>
                <Text>{cart.desc.substring(0, 100)}</Text>
                <Text price>1 * ₹{cart.price}</Text>
              </div>
               <DeleteOutlineIcon  className="remove" />
            </Box>
          </Box>
        </Items>
      ))}
      <TotalAmount>

      <Heading total>SUBTOTAL</Heading>
      <Text total>₹ 7389</Text>
      </TotalAmount>
      <Button>PROCEED TO CHECKOUT</Button>
      <Text reset>Reset Cart</Text>
      </>
    </Wrapper>
  );
};

export default Cart;
