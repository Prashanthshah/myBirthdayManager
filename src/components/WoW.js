import React, { useEffect, useState } from 'react'


const WoW = () => {
  const[data,setData] = useState([])
  const[index, setIndex] = useState(0)
  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then((res) =>{
      return res.json()
    })
    .then((mess) => {
      setData(mess);
    })
  },[])

  
  useEffect(()=>{
  let slider = setInterval(()=>{
    setIndex(Math.floor(Math.random()*1600));
  },5000);
  return ()=> clearInterval(slider)
  },[])
  return (
  <section className='quotes'>

       {
        data.map(({author,text},i) =>{
          let position = 'nextSlide';
          if(i === index){
            position = 'currentSlide';
          }
      

          return(
            <article key = {i} className = {position}>
              <p>{text}</p>
              <div className='author'>
              <span>--</span><h4>{author}</h4>
              </div>
            </article>
          )
          })
      } 
    
      </section>
)
    }

export default WoW