 export const generateOtp = () => {
    let digits = "0123456789";
    let OTP = "";
    for (let i = 1; i <= 6; i++) {
      let tem = digits[Math.floor(Math.random() * 10)];
      OTP += tem;
    }
    return OTP;
  };