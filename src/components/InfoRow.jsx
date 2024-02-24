import React from 'react'
import { useState } from 'react'

function InfoRow({info}) {
  const isNegative = info.price_change_percentage_24h < 0
 

  return (
    <tr className=' text-white  border-b border-gray-400 '>
      <td className=' flex items-center gap-5 py-2'>
        <img src= {info.image} alt="" className=' w-12 h-12 rounded-full' />
        <h2 className=' font-semibold text-lg'> {info.name}</h2>
      </td>
      <td className=' uppercase text-lg  py-2 px-2'>
       {info.symbol}
      </td>
      <td className=' text-lg text-right  py-2 px-4'>
        {`$ ${info.current_price}`}
      </td>
      <td className=' text-lg  py-2 px-2'>
      {`$ ${info.total_volume}`}
      </td>
      <td className={`text-lg  py-2 px-2 ${isNegative ? ' text-red-600': 'text-[#55b03a]'}`}>
       {` ${info.price_change_percentage_24h} %`}
      </td>
      <td className=' text-lg  py-2 px-2'>
      {`Mkt Cap : ${info.market_cap}`}
      </td>

    </tr>
  )
}

export default InfoRow