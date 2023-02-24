import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Buttons from './Buttons'


function CardDeal() {
  return (
    <section className={` mt-[170px] ${layout.section} justify-between`}>
      <div className='flex flex-col'>
        <div className='max-w-[570px]'>
          <h2 className={`${styles.heading2} `}>Find a better card deal in few easy steps.</h2>
          <p className={`mt-[24px] max-w-[500px] font-normal text-dimWhite text-[18px] leading-[30.8px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        </div>
        <div className='mt-[48px]'>
          <Buttons />
        </div>
      </div>
      <div className={` md:ml-10 ml-0 md:mt-0 mt-10 relative max-w-[470px] flex justify-center lg:mr-[135px]`}>
        <img src={card} className={``} alt="card" />
      </div>

    </section>
  )
}

export default CardDeal
