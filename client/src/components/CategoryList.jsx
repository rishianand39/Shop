import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

const Wrapper=styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
`
const CategoryList = ({categoryValue,maxPrice,sort}) => {
  const [products, setProducts]=useState([])
  const location = useLocation()
  // eslint-disable-next-line
  const [error,setError]=useState(false)

  
console.log(process.env.REACT_APP_API_BASE_URL, 'iefdifeknfisf')

  useEffect(()=>{
    const fetchProducts=async()=>{
      try {
        let result=await axios.get(`${process.env.REACT_APP_API_BASE_URL}/product${location.search}`)
        setProducts(result.data)
      } catch (error) {
        setError(true)
      }
    }
    fetchProducts()
  },[location])


  return (
    <Wrapper>
      {products.length===0 && <div>Sorry No Product available</div>}
      {products.map((product) => (
        <Link to={`${product._id}`} className="links" key={product._id}>
        <Card {...product}  />
        </Link>
      ))}
    </Wrapper>
  );
};

export default CategoryList;
