import React from 'react'
import styles from '../style'
import Buttons from './Buttons'
import GetStarted from './GetStarted'

function CTA() {
  return (
    <section className=''>
      <div className='lg:flex mt-[100px] justify-evenly items-center w-[86%] h-[233px] rounded-[10px] bg-black-gradient'>
        <div className='flex flex-col object-contain '>
          <h1 className={`max-w-[670px]${styles.heading2} `}>Let’s try our service now!</h1>
          <p className={`font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[445px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div>
          <Buttons/>
        </div>

      </div>
    </section>
  )
}

export default CTA
