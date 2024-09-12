import React, { Dispatch, SetStateAction } from 'react'
import { GradientBorderNavbar } from './gradient-border-navbar'

interface NavbarProps {
  bgVariant: string;
  setBgVarient: Dispatch<SetStateAction<string>>;
}

const Navbar = ({bgVariant,setBgVarient}: NavbarProps) => {
  return (
    <div>
      <GradientBorderNavbar bgVariant={bgVariant} setBgVarient={setBgVarient}/>
    </div>
  )
}

export default Navbar
