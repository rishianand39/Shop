import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 40px auto;
`;
const Top = styled.div`
  display: flex;
`;
const Heading = styled.h1`
  flex: 2;
  text-transform: capitalize;
`;
const Description = styled.p`
  flex: 3;
  color: gray;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const FeatureProducts = ({ type }) => {
  let products = [
    {
      id: 1,
      category: "men",
      title: "Diverse Men Casual Shirt",
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
      category: "men",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
      isNew: true,
    },
    {
      id: 3,
      category: "men",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
    {
      id: 4,
      category: "men",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
  ];
  return (
    <Wrapper>
      <Top>
        <Heading>{type} Products</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo
          quis totam tempore. Alias tempora quae dolor perferendis, numquam
          quidem omnis nam, eaque laboriosam laborum repellendus fugit vel?
          Corporis, consequatur.
        </Description>
      </Top>
      <Bottom>
        {products.map((product) => (
          <Link to={`products/${product.category}/${product.id}`} className="links" key={product.id}>
          <Card {...product} />
          </Link>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default FeatureProducts;
