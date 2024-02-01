import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <Link href = {'/'}>
        <h2>LOGO</h2>
        </Link>
         
      <div className='navDiv'>
    
         <Link href={'/'}>  <p>Home</p> </Link>

         <Link href={'about'}> <p>About</p> </Link>
         
        <Link href={'contact'}> <p>Contact</p> </Link>

        <Link href={'services'}>  <p>Services</p> </Link>

        <input type="text" placeholder='Search' />
      </div>

    </div>
  )
}

export default Navbar