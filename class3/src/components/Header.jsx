import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5'>
        <h3>Brand Logo</h3>
        <div className='flex gap-8'>
            <h4>About</h4>
            <h4>Work</h4>
            <h4>Services</h4>
            <h4>Contact</h4>
        </div>
    </div>
  )
}

export default Header