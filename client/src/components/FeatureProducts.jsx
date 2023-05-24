import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Card from "./Card";
import { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);

  // FETCH TOP 5 PRODUCTS BASED ON POPULARITY
  const fetchProduct = async () => {
    try {
      let products = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/product?popularity[gt]=6&limit=4`
      );
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Wrapper>
      <Top>
        <Heading>{type} Products</Heading>
        <Description>
          These are tending these days on our website. Go and check it out. Add
          it to your cart or wishlist them else you will lose it. Pay on
          delivery available. Ecomm is the largest ecommerce in the world and so
          you have access to world class products.Enjoy the hassle-free
          experience as you shop comfortably from your home or your workplace.
          You can also shop for your friends, family and loved-ones and avail
          our gift services for special occasions.
        </Description>
      </Top>
      <Bottom>
        {products.map((product) => (
          <Link
            to={`products/${product._id}`}
            className="links"
            key={product.id}
          >
            <Card {...product} />
          </Link>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default FeatureProducts;
