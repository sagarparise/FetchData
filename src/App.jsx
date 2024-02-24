
import { useEffect, useState } from 'react'
import './App.css'
import InfoRow from './components/InfoRow'
import axios from 'axios'
function App() {
const[info, setInfo] = useState([])


useEffect(()=>{

  (async function (){
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      // setInfo(data)
     setInfo(res.data);
    } catch (err) {
      console.log(err.message);
    }
  })()

}, [])

  return (
    <div className=' w-full h-fit bg-[#1e1e1e] flex justify-center items-center overflow-y-scroll py-10'>
      <div className=' bg-[#0f0e0e] lg:w-3/4  w-[95%] rounded-lg p-5'>
      <table className=' w-full h-full'>
       <tbody className=''>
        {
        info && info.map(item=> (
          <InfoRow key={item.id} info ={item} />
        ))
       }
        
       </tbody>
      </table>
      </div>
    </div>
  )
}

export default App
