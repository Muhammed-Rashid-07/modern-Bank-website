import React from 'react'
import { quotes } from '../assets'
import styles from '../style'

function FeedBack({ img, content, name, title }) {
  return (
    <section className=''>
      <div className={`flex w-[370px] mr-[65px] h-[395px] py-12 px-10 feature-card rounded-[10px]`}>
        <div className={`flex flex-col justify-between sm:${styles.flexCenter}`}>
          <img src={quotes} className='max-w-[42.6px]' alt="" />
          <p className={` ${styles.paragraph}`}>{content}</p>
          <div className='flex justify-evenly'>
            <img src={img} className="max-w-[48px]" alt="" />
            <div>
              <p className='font-poppins text-[20px] text-white'>{name}</p>
              <p className={`font-poppins text-[16px] text-dimWhite`}>{title}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedBack
