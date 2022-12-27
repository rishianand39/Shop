import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

const Wrapper=styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
`
const CategoryList = () => {
  let products = [
    {
      id: 1,
      category:"men",
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
      category:"women",
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
      category:"men",
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
      category:"women",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
    ,
    {
      id: 5,
      category:"children",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
    ,
    {
      id: 6,
      category:"children",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
    ,
    {
      id: 7,
      category:"men",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
    ,
    {
      id: 8,
      category:"women",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
    ,
    {
      id: 9,
      category:"men",
      title: "Diverse Men Casual Shirt",
      price: 549,
      strike: 987,
      images: [
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/616OsVbedXL._UY550_.jpg",
      ],
    },
    ,
    {
      id: 10,
      category:"children",
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
      {products.map((product) => (
        <Link to={`${product.id}`} className="links" key={product.id}>
        <Card {...product}  />
        </Link>
      ))}
    </Wrapper>
  );
};

export default CategoryList;
