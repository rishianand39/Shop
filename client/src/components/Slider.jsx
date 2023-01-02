import { useState } from "react";
import styled from "styled-components";
import { SliderData } from "../data/SliderData";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Wrapper = styled.div`
  width: 80vw;
  height: calc(60vh - 80px);
  margin: auto;
  position: relative;
  overflow: hidden;
`;

const Box = styled.div`
  display: flex;
  width: 320vw;
  height: 100%;
  transform: ${props=>`translateX(-${props.index * 80}vw)`};
  transition-property: transform;
  transition-duration:1s;
  transition-timing-function:ease-out;
`;

const Img = styled.img`
width: 80vw;
  height: 100%;
  object-fit: cover;
`;
const Arrows=styled.div`
    width: fit-content;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 80px;
    gap: 10px;
    margin: auto;
`;
const Arrow = styled.button`
 border: 1px solid #eceaea;
cursor: pointer;
display: flex;
width: 50px;
height: 40px;
justify-content:center;
align-items: center;
transform:${props=>props.left? "rotate(180deg)" : "rotate(0deg)"};

`;
const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0);

    const handleSlide=(value)=>{
        let last=SliderData.length-1;
        if(currentSlide===last && value===+1){
            setCurrentSlide(0)
        }else if(currentSlide===0 && value===-1){
            setCurrentSlide(last)
        }else{
            setCurrentSlide(pre=>pre+value)
        }
    }

  return (
    <Wrapper>
      <Box index={currentSlide}>
        {SliderData.map((slider) => {
          return <Img key={slider.id} src={slider.url} alt="" />;
        })}
      </Box>
      <Arrows >
            <Arrow left onClick={()=>handleSlide(-1)}><ArrowRightAltIcon /></Arrow>
            <Arrow onClick={()=>handleSlide(+1)}><ArrowRightAltIcon /></Arrow>
        </Arrows>
    </Wrapper>
  );
};

export default Slider;
