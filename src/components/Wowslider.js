import React from 'react'

const Wowslider = ({text}) => {
    // let arr = Math.random(1,10)
    // console.log(arr)


  return (
    <section className='quotes'>
  
         {
          text.map(({author,text}) =>{
            return(
              <div className = 'slider'>
                <p>{text}</p>
                <div className='author'>
                <span>--</span><h4>{author}</h4>
                </div>
              </div>
            )
          })
        } 
      
        </section>
  )

      }
export default Wowslider