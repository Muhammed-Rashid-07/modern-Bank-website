import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Buttons from './Buttons'


const FeatureCard = ({ icon, content, title, index }) => (
  //feature card is a class which added in index which gives hover effect

  <div className={`max-w-[470px] flex flex-row p-6 feature-card rounded-[20px] ${index != features.length - 1 ? 'mb-6' : 'mb-0'} sm:flex-1 lg:mr-[135px]`}>
    <div className={`w-[64px] h-[64px] flex justify-center items-center rounded-full bg-dimBlue`}>
      <img src={icon} className='w-[50%] h-[50%] object-contain' alt="icon" />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h3 className='text-poppins text-white font-bold mb-2'>{title}</h3>
      <p className='text-dimWhite font-poppins'>{content}</p>
    </div>
  </div>
)

function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>You do the business, <br className='sm:block hidden;'></br>we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-[24px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Buttons styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((data, index) => (
          //here we are calling FeatureCard function from above.Giving a copy of data as spread operators
          <FeatureCard key={data.id}{...data} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
