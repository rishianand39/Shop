import styled from "styled-components";
const Wrapper = styled.div`
  width: 260px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 5px;
  padding: 5px;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
`;
const Top = styled.div`
  display: flex;
  position: relative;
  height: 70%;
  &:hover .secondImage {
    z-index: 2;
    opacity: 1;
  }

  &:hover .firstImage {
    opacity: 0;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-position: center;
  position: absolute;
  &.firstImage {
    z-index: 1;
  }
  &.secondImage {
    opacity: 0;
  }
`;
const Bottom = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 5px;
height: 30%;
`
const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0 0 0;
  max-height: 36%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  display: flex;
  gap: 15px;
`;
const Span = styled.span`
  text-decoration: ${(props) => (props.strike ? "line-through" : "")};
  font-weight: ${(props) => props.strike && "bold"};
  font-size: 1.1rem;
`;
const NewSeason = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: white;
  color: teal;
  padding: 3px 5px;
  z-index: 3;
  font-weight: 500;
  font-size: 0.8rem;
`;
const Button=styled.button`
  background-color: #2879fe;
  border: none;
  color: white;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;
  &:hover{
    background-color: darkorange;
  }
`
const Card = ({ id, category, title, strike, price, image, isNew }) => {
  return (
    <Wrapper>
      <Top>
        <Img className="firstImage" src={image[0]} alt="" />
        <Img className="secondImage" src={image[1]} alt="" />
        {isNew && <NewSeason>New Season</NewSeason>}
      </Top>
      <Bottom>
        <Title>{title}</Title>
        <Price>
          <Span strike>₹{strike}</Span>
          <Span>₹{price}</Span>
        </Price>
        <Button>Add To Cart</Button>
      </Bottom>
    </Wrapper>
  );
};

export default Card;
