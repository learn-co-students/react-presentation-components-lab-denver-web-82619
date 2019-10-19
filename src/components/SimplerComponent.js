// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = () => {
  
  const handleClick = (event) => {
    const [r, g, b] = [r, g, b].map(() => Math.random()*255 )
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  }

  return (
    <div onClick={handleClick}>I am just happy</div>
  )
}

export default SimplerComponent