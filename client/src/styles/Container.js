import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 80vw;
  margin: auto;
`;
export const SlideImg = styled.img`
  height: 450px;
  width: 100%;
  object-fit: cover;
`;
export const Pre = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: grey;
    color: #fff;
  }
`;
export const Next = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: #ffffff;
  color: #000000;
  padding: 5px 10px 0px;
  cursor: pointer;
  z-index: 1;
  border-radius: 2px;
  width: 50px;
  &:hover {
    background-color: grey;
    color: #fff;
  }
`;

// Announcement
export const AnnouncementContainer = styled.div`
  border: 1px solid white;
  padding: 5px 0;
  & p {
    color: #2879fe;
    font-size: 1.2rem;
    margin: 0;
    text-align: center;
    animation: animate 1.5s linear infinite;
    @keyframes animate {
      0% {
        opacity: 0;
      }
      25%{
        opacity: 0.2;
      }

      50% {
        opacity: 0.5;
      }
      75%{
        opacity: 0.7;
      }

      100% {
        opacity: 0;
      }
    }
  }
`;
