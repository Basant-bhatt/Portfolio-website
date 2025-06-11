import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
function Navbar() {
  let [showmwnu,setshowmenu]=useState(false)
  return (
    
   <>
   <div className="navmaincontainer">

   <div className='navcontainer'>

    

        <img src="1000079100.png" className='logo' />
  
        <div className="navitems">
         
            <Link activeClass='active' smooth={true} spy={true} to='intro' duration={500} offset={-100} className='navlist'>Home</Link>
            <Link activeClass="active" smooth={true}  spy={true} to='skills' duration={500} offset={-20} className='navlist'>About</Link>
            <Link activeClass="active" smooth={true} spy={true} to='works' duration={500} offset={-10} className='navlist'>Portfolio</Link>
            <Link activeClass="active" smooth={true} spy={true} to='clients' duration={500} offset={-50} className='navlist'>Skills</Link>
          
        </div>
            <button className='contactbtn ' onClick={()=>document.querySelector(".contactsection").scrollIntoView()}><i className='fa-solid fa-message contacticon' ></i>Contact me</button>

               <i className='fa-solid fa-bars-staggered menuicon' onClick={()=>setshowmenu(!showmwnu)} ></i>
  
        <div className="navmenu" style={{display:showmwnu?"flex":"none"}}>
         
            <Link activeClass='active' smooth={true} spy={true} to='intro' duration={500} offset={-100} onClick={()=>setshowmenu(false)} className='listitem'>Home</Link>
            <Link activeClass="active" smooth={true}  spy={true} to='skills' duration={500} offset={-20} onClick={()=>setshowmenu(false)} className='listitem'>About</Link>
            <Link activeClass="active" smooth={true} spy={true} to='works' duration={500} offset={-10} onClick={()=>setshowmenu(false)} className='listitem'>POrtfolio</Link>
            <Link activeClass="active" smooth={true} spy={true} to='clients' duration={500} offset={-50} onClick={()=>setshowmenu(false)} className='listitem'>Skills</Link>
            <Link activeClass="active" smooth={true} spy={true} to='contactsection' duration={500} offset={-50} onClick={()=>setshowmenu(false)} className='listitem'>Contact</Link>
          
        </div>
    </div>
   </div>
    
   </>
  )
}

export default Navbar