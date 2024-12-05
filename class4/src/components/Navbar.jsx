import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='py-5 px-10 flex items-center justify-center gap-10 bg-pink-500 text-white font-semibold'>
        <h4>About</h4>
        <h4>Work</h4>
        <h4>Contact</h4>
        <h4>Services</h4>

        <Button />
    </div>
  )
}

export default Navbar