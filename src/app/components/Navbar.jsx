import Image from 'next/image'
import emblem from '/public/emblem.png'
import { TbHeartSearch } from "react-icons/tb"

export default function Home() {
  return (
    <nav >
      <div className="flex flex-row justify-between p-6 bg-white">
      <div className='flex'>
        <div>
          <h1 className='text-green-400 text-2xl'>Jan-Sanjeevani</h1> 
          <h2 className='text-black text-sm mx-5'>Telemedicine Service</h2> 
        </div>
        <div className='border-x border-black h-14 ml-3'></div>
        <Image src={emblem} className='w-8 h-14 mx-5'/>
        <div>
          <h4 className='text-black text-sm font-bold'>
            Ministry of Health and<br></br>Family Welfare
          </h4>
          <h4 className='text-black text-xs'>Government of India</h4>  
        </div>
      </div>
      
      <div className='bg-gray-300 rounded-full flex justify-between mr-6'>
          <div className='mx-5 mr-24 mt-4 text-gray-500'>Search</div>
          <div className='bg-orange-400 rounded-full px-5'>
              <TbHeartSearch className='text-4xl mt-2'/>
          </div>
      </div>
      </div>
      <div className='bg-gray-600 h-14'>

      </div>
    </nav>
    
  )
}
