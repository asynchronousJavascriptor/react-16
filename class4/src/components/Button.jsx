import React from 'react'

const Button = (props) => {


    
  return (
    <div>
       <button className='py-2 mb-2 px-5 text-2xl text-white bg-pink-600 rounded-lg'>
        {props.btn}
        </button> 
    </div>
  )
}

export default Button