import React, { useEffect, useState } from 'react'
import Wowslider from './Wowslider'

const WoW = () => {
  const[data,setData] = useState([])
  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then((res) =>{
      return res.json()
    })
    .then((mess) => {
      setData(mess);
    })
  },[])
  // console.log(data)
  let i = 67;
  // console.log(data)
  
  
  return (
    <>

      <Wowslider text = {data}/>
  </>
  )
}

export default WoW