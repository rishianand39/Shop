import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";


const OtpWrapper=styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;
  width: fit-content;
  border-radius: 3px;
`
const OtpInput=styled.input`
  width:40px;
  height:40px;
  border: none;
  margin-right: 10px;
  border-bottom: 1px solid grey;
  font-size: 1.3rem;
  outline: none;
`;
const OtpBox=styled.div`
  display: flex;
  margin-bottom: 20px;
`
const OtpPage = () => {
  const dispatch=useDispatch()
  const [otp,setOtp]=useState({
    "one":null,
    "two":null,
    "three":null,
    "four":null,
    "five":null,
    "six":null,
  })
  console.log(otp)
  // ONLY ACCEPT NUMBER
  let digitValidate = function (ele) {
    ele.value = ele.value.replace(/[^0-9]/g, "");
  };

  // TAB CHANGE ON INPUT
  let tabChange = function (val) {
    let tab = document.querySelectorAll("input");
    // tab=[tab,tab,tab,tab,tab,tab]

    setOtp({
      ...otp,
      [tab[val].name]: tab[val].value,
    });
   
    if (tab[val].value !== "" && val!==5) {
      tab[val+1].focus();
    } 
    
    else if (tab[val].value === "" && val!==0) {
      tab[val-1].focus();
    }
  };

  // HANDLE VERIFY OTP
  const handleVerify=()=>{
    let enteredOtp=Object.values(otp).map(Number).join("")
    // dispatch()
  }

  return (
    <OtpWrapper>
      <OtpBox>
        <OtpInput
          className="otp"
          type="text"
          onInput={(e)=>{digitValidate(e.target)
          tabChange(0)
          }}
          maxLength="1"
          name="one"
          autoFocus
        />
        <OtpInput
          className="otp"
          type="text"
          onInput={(e)=>{digitValidate(e.target)
            tabChange(1)
          }}
          maxLength="1"
          name="two"
        />
        <OtpInput
          className="otp"
          type="text"
          onInput={(e)=>{digitValidate(e.target)
          tabChange(2)
          }}
          maxLength="1"
          name="three"
        />
        <OtpInput
          className="otp"
          type="text"
          onInput={(e)=>{digitValidate(e.target)
          tabChange(3)
          }}
          maxLength="1"
          name="four"
        />
        <OtpInput
          className="otp"
          type="text"
          onInput={(e)=>{digitValidate(e.target)
          tabChange(4)
          }}
          maxLength="1"
          name="five"
        />
        <OtpInput
          className="otp"
          type="text"
          onInput={(e)=>{digitValidate(e.target)
          tabChange(5)
          }}
          maxLength="1"
          name="six"
        />
      </OtpBox>
      <Button onClick={handleVerify} className="btn otp_verify_btn">VERIFY OTP</Button>
      <p>
        Not received your code?
        <br />
        <Link className="links" style={{color:"blue"}} to="/">
          Resend code
        </Link>
      </p>
    </OtpWrapper>
  );
};

export default OtpPage