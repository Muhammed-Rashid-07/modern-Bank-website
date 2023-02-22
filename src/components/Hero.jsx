import React from 'react'
import styles from '../style'
import { discount, arrowUp, robot } from '../assets'
import GetStarted from './GetStarted'

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={` ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className={`flex flex-row py-[6px] items-center bg-discount-gradient rounded-[10px] mb-2 px-4`}>
          <img src={discount} alt="discount" className='h-[32px] w-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20% </span>
            <span>DISCOUNT FOR</span>
            <span className='text-white'> 1 MONTH</span>
            <span> ACCOUNT</span>
          </p>
        </div>
        <div className='mb-[40px] max-w-[700px]  mt-[12px]  sm:flex'>
          <div className='flex flex-col'>
            <span className={`font-poppins font-semibold ss:text[72px] text-[52px] text-white`}>The Next</span>
            <span className={`font-poppins font-semibold ss:text[72px] text-[52px] text-gradient `}>Generation</span>
            <span className={`font-poppins font-semibold ss:text[72px] text-[52px] text-white`}>Payment Method</span>
          </div>
          <div className={`ss:flex hidden md:mr-4 mr-0`}>
            <GetStarted />
          </div>
        </div>
        <div className='max-w-[480px] '>
          <p className={`${styles.paragraph} py-2`}>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            <br></br>We examine annual percentage rates, annual fees.
          </p>
        </div>
      </div>
      <div className={`max-w-[680px] flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
        <img src={robot} className='w-[100%] h-[100%] relative z-[5]' alt="robot image" />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>
      <div className='ss:hidden'>
        <GetStarted />
      </div>
    </section >
  )
}

export default Hero
