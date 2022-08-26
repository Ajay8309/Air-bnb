import React from 'react'
import logo from '../public/airbnb-logo.png'
import hero from '../public/photo-grid.png'
import './index.css'


export default function Header(){
    return(
        <div>
        <nav className='navbar'>
            <img src={logo} alt="" />   
        </nav>
         
         <div className="hero">
            <img src={hero} alt="" />
           
           <div className="body">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activites led by
                on-of-a-kind hosts-all without leaving home
            </p>
           </div>
         </div>


        </div>
    )
}