"use client";

import React from 'react'

const Button = ({text, className, onClick, type = "button"}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
  )
}

export default Button