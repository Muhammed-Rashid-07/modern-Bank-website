import React from 'react'
import { quotes } from '../assets'
import { feedback } from '../constants'
import styles, { layout } from '../style'
import FeedBack from './FeedBack'


function Testimonials() {
  return (
    <section className='flex flex-col'>
      <div className={`${layout.section}flex mt-[148px] justify-between `}>
        <div className={`max-w-[470px] ${styles.flexStart}`}>
          <h2 className={`${styles.heading2}`}>What people are saying about us</h2>
        </div>
        <div className='flex items-center max-w-[470px] mr-[100px]'>
          <p className={`${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className='flex flex-wrap  sm:justify-start justify-center z-[1] relative w-[100%] feedback-container'>
        {feedback.map((data)=>{
          return(
            <FeedBack key={data.id}{...data} />
          )
        })}
      </div>

    </section>
  )
}

export default Testimonials
