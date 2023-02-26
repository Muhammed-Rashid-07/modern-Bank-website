import React from 'react'
import styles from '../style'
import Buttons from './Buttons'
import GetStarted from './GetStarted'

function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-[90%] sm:flex-row flex-col rounded-[10px] bg-black-gradient-2 box-shadow`}>
      <div className='flex-1 '>
        <h1 className={`max-w-[670px]${styles.heading2} p-2`}>Let’s try our service now!</h1>
        <p className={`font-normal text-dimWhite text-[18px] p-2 leading-[30.8px] max-w-[445px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='p-2'>
        <Buttons />
      </div>
    </section >
  )
}

export default CTA
