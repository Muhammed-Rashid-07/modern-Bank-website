import React from 'react'
import { apple, bill, google } from '../assets'
import styles,{layout} from '../style'

function Billing() {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={` flex ${layout.sectionImgReverse } justify-evenly`}>
        <img src={bill} className='w-[100%] h-[100%] relative z-[5]' alt="" />
        <div className='absolute z-[3] -left-1/2 bottom-0 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink __gradient'/>
      </div>
      <div className={`${layout.sectionInfo} flex flex-col lg:ml-[135px]`}>
        <h2 className={`${styles.heading2}`}>Easily control your<br className='sm:block hidden'></br> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex sm:mt-10 mt-6'>
          <img src={apple} className='mr-[32px] w-[128px] cursor-pointer' alt="" />
          <img src={google} className='mr-[32px] w-[128px] cursor-pointer' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Billing
