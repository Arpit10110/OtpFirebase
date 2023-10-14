import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { auth } from '../FirebaseConfig';
import {RecaptchaVerifier,signInWithPhoneNumber  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "../Css/Phone.css"
const PhoneLog = () => {
  const [Phoneno,setPhoneno]=useState();
  const [Otp,setOtp]=useState('')
  const navigate=useNavigate();
  const [otpsend,setotpsend]=useState(false);
  //genterating the captcha
  const gencap=()=>{
   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recapCont', {
    'size': 'visible',
    'callback': (response) => {
    }
  });
  }
  const Captchacheck=()=>{
    console.log(Phoneno);
    gencap();
    let appVerifier =  window.recaptchaVerifier;
    signInWithPhoneNumber(auth, Phoneno, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP SEND..");
      let cap=document.querySelector("#recapCont");
      cap.style="display:none;"
      setotpsend(true);
    }).catch((error) => {
      setPhoneno();
     alert(error.message);
     navigate('/');
    });
  }
  const Sucss=()=>{
    navigate('Thanks')
  }
  const subotp=()=>{
   console.log(Otp)
   let confirmationResult= window.confirmationResult;
   confirmationResult.confirm(Otp).then((result) => {
    const user = result.user;
    console.log(user)
    setOtp('');
    Sucss();
  }).catch((error) => {
    alert(error.message);
  });
  }
  return (
    <>
    <div className="main">
      <h4>LogIn with Phone No.</h4>
      <div className="phoneNo">
     <PhoneInput
      placeholder="Enter phone number"
      defaultCountry="IN"
      value={Phoneno}
      onChange={setPhoneno}/>
      <button className='Sendotp' onClick={Captchacheck}>Send OTP</button>
      </div>
      <din id="recapCont"></din>
      {
        otpsend=== true?<div className='Otpdiv' ><input  placeholder='Enter the otp' value={Otp}  onChange={(e)=>{setOtp(e.target.value);}} /> <button className='submitbtn' onClick={subotp}>Submit otp</button></div>
        : <div/>
      }
     <din id="recapCont"></din>
    </div>
    </>
  )
}

export default PhoneLog
