import styled from "styled-components";
import Categories from "../components/Categories";
import FeatureProducts from "../components/FeatureProducts";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";

const Wrapper=styled.div`
  
`
const Home = () => {
  return (
    <Wrapper>
      <Slider />
      <FeatureProducts type="Trending"/>
      <Categories />
      <FeatureProducts type="Featured" />
      <Subscribe />
    </Wrapper>
  )
}

export default Home