import React, { useState } from 'react'
import { arrowUp } from '../assets' 
import styles from '../style'
function GetStarted() {
  return (
    <div className={`flex justify-center mt-5`}>
            <button className={`animate-pulse cursor-pointer w-[140px] rounded-full flex flex-col border-sky-300 border-[3px] h-[140px]
          justify-center items-center text-sky-300 text-left ${styles.paragraph} `} >
              <div className={`flex`}>
                <span className='pr-2 text-[18px]'>Get</span>
                <img src={arrowUp} alt="" />
              </div>
              <span>Started</span></button>
          </div>
  )
}

export default GetStarted
