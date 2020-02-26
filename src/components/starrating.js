import React from 'react'

export default function Starrating({rate, onChangeRating}) {
  
    let arr=[]
    for (let i=0;i<5;i++)
    {
      if (i<rate)
      { arr.push(<span onClick={() => onChangeRating(i+1)}><i class="fas fa-star"></i></span>)}
    else{arr.push(<span onClick={() => onChangeRating(i+1)}><i class="far fa-star"></i></span>)}
    }
    
  
  return (
    <div className="etoile">
      <span> {arr}</span>
    </div>
  )
}



