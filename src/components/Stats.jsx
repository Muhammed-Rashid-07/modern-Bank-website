import React from 'react'
import { stats } from '../constants'
import styles from '../style'

function Stats() {
  return (
    <section className={` flex-row flex-wrap ${styles.flexCenter}  text-white sm:mb-20 mb-6`}>
      {stats.map((stat,index)=>(
        <div key={stat.id} className={`flex-1 flex items-center justify-start flex-row m-3 `}>
          <h4 className=' items-center font-poppins font-semibold xs:text-[40px] xs:leading-[34px] '>{stat.value} </h4>
          <span className={`ml-5 ${styles.paragraph} text-gradient`}>{stat.title}</span>
          <span className='ml-[52px]'>{stats.length-1 === index?"":"|"}</span>
        </div>
      ))}
    </section>
  )
}

export default Stats
