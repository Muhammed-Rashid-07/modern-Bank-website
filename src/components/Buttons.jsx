import React from 'react'

function Buttons({styles}) {
  return (
    <button type='button' className={`bg-blue-gradient font-poppins font-normal w-[170px] h-[64px] ${styles} rounded-2xl `}>Get Started</button>
  )
}

export default Buttons
