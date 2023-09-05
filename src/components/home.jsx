import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


export default function Home() {
    

  return (
    <div>
        <div className="container p-4">
            <h1 className='text-center m-4'>Our Product: <strong className='text-primary'>Natiq</strong> </h1>
            <p className='m-4 fs-5 lh-4'><strong className='text-primary'>Natiq</strong> is an innovative and user-friendly solution designed to facilitate the seamless transformation of Arabic text into expressive and dynamic audio content. This project combines cutting-edge text-to-speech technology with a unique echo effect, providing users with a versatile tool for various applications.</p>
        

           <NavLink to ="/natiq" className='nav-link btn btn-primary p-2' >Go to Natiq App</NavLink>
        </div>

    </div>
  )
}
