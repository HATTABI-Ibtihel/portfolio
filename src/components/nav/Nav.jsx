import React from 'react'
import './nav.css'
import {AiFillHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {GiNotebook} from "react-icons/gi"
import {FaHandsHelping} from "react-icons/fa"
import {BsFillChatDotsFill} from "react-icons/bs"
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')

  return (
    <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiFillHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiNotebook/></a>
    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaHandsHelping/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillChatDotsFill/></a>
    </nav>
  )
}

export default Nav