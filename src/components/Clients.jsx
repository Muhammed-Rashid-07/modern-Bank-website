import React from 'react'
import { dropbox,coinbase,airbnb,binance } from '../assets'
import { clients } from '../constants'

function Clients() {
  return (
    <section>
      <div className='lg:flex justify-evenly max-w-[90%] items-center mt-[111px] '>
        {clients.map((client)=>{
          return(
            <div key={client.id}>
              <img src={client.logo} className='w-[100px] object-contain sm:w-[192px] mt-5' alt="" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Clients
