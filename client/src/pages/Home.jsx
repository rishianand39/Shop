import styled from "styled-components";
import Categories from "../components/Categories";
import FeatureProducts from "../components/FeatureProducts";
import Subscribe from "../components/Subscribe";
import ReactSlickSlider from "../components/Slider";

const Wrapper=styled.div`
  
`
const Home = () => {
  return (
    <Wrapper>
      <ReactSlickSlider />
      <FeatureProducts type="Trending"/>
      <Categories />
      <FeatureProducts type="Featured" />
      <Subscribe />
    </Wrapper>
  )
}

export default Home