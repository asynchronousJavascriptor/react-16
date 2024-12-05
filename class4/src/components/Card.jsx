import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div className='border-2 text-4xl p-5 border-black h-80 w-80 rounded'>
        {props.user}, {props.age}
    </div>
  )
}

export default Card