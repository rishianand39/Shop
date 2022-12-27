import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams,useSearchParams } from "react-router-dom";
import CategoryList from "../components/CategoryList";


const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  height: fit-content;
  position: sticky;
  top: 0;
`;
const Box = styled.div`
  margin-bottom: 35px;
  padding:0 2rem;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
`;
const InputWrapper = styled.div`
  margin-bottom: 10px;
`;
const Label = styled.label`
  margin-left: 10px;
`;
const Right = styled.div`
  flex: 3;
`;
const Banner = styled.div`
  width: 100%;
  height: 20vh;
  margin: 20px auto 50px auto;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Products = () => {
  const categoryId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryValue,setCategoryValue] = useState(new Set([]))


  
  const handleCheckbox=(e)=>{
    setCategoryValue(pre=>{
      if(pre?.has(e.target.value)){
        categoryValue.delete(e.target.value);
        return new Set(categoryValue)
      }else{
       return new Set([
          ...categoryValue,
          e.target.value
        ])
      }
    })

  }

  useEffect(()=>{
    setSearchParams({category: [...categoryValue]},{replace:true})
  },[categoryValue, setCategoryValue])


  return (
    <Wrapper>
      <Left>
        <Box>
          <Title>Product Categories</Title>
          <InputWrapper>
            <input type="checkbox" value="hat" id="hat" onClick={handleCheckbox}/>
            <Label htmlFor="hat">Hat</Label>
          </InputWrapper>
          <InputWrapper>
            <input type="checkbox" value="shirts" id="shirts" onClick={handleCheckbox}/>
            <Label htmlFor="shirts">Shirts</Label>
          </InputWrapper>
          <InputWrapper>
            <input type="checkbox" value="pants" id="pants" onClick={handleCheckbox}/>
            <Label htmlFor="pants">Pants</Label>
          </InputWrapper>
          <InputWrapper>
            <input type="checkbox" value="jeans" id="jeans" onClick={handleCheckbox}/>
            <Label htmlFor="jeans">Jeans</Label>
          </InputWrapper>
          <InputWrapper>
            <input type="checkbox" value="electronics" id="electronics" onClick={handleCheckbox}/>
            <Label htmlFor="electronics">Electronics</Label>
          </InputWrapper>
          <InputWrapper>
            <input type="checkbox" value="jewelery" id="jewelery" onClick={handleCheckbox}/>
            <Label htmlFor="jewelery">Jewelery</Label>
          </InputWrapper>
          <InputWrapper>
            <input type="checkbox" value="bags" id="bags" onClick={handleCheckbox}/>
            <Label htmlFor="bags">Bags</Label>
          </InputWrapper>
        </Box>
        <Box>
          <Title>Filter by price</Title>
          <InputWrapper>
            <span>₹0</span>
            <input
              type="range"
              max="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>₹{maxPrice}</span>
          </InputWrapper>
        </Box>
        <Box>
          <Title>Sort by</Title>
          <InputWrapper>
          <input type="radio" id="lowest" />
          <Label htmlFor="lowest" value="asc" onChange={() => setSort("asc")}>
            Price(Lowest First)
          </Label>
          </InputWrapper>
          <InputWrapper>
          <input type="radio" id="highest" />
          <Label
            htmlFor="highest"
            value="desc"
            onChange={() => setSort("desc")}
            >
            Price(Highest First)
          </Label>
            </InputWrapper>
            <InputWrapper>
          <input type="radio" id="lowest" />
          <Label htmlFor="lowest" value="asc" >
            Popularity
          </Label>
          </InputWrapper>
          <InputWrapper>
          <input type="radio" id="lowest" />
          <Label htmlFor="lowest" value="asc" >
            Top Rated
          </Label>
          </InputWrapper>
        </Box>
      </Left>
      <Right>
        <Banner>
          <Img
            src="https://images.unsplash.com/photo-1652434677276-c3d4c08f4b5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="banner"
          />
        </Banner>
        <div>
          <CategoryList />
        </div>
      </Right>
    </Wrapper>
  );
};

export default Products;
