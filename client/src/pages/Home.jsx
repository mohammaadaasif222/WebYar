import React, { useEffect } from "react";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";

export default function Home() {
  const navigate = useNavigate()
  const {currentUser} = useSelector((state)=>state.user);
  useEffect(()=>{
   if(!currentUser.success){
    navigate('/sign-in')
   }
  },[])
  return (
    <>
      <ImageUpload />
    </>
  );
}
