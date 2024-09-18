import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LaunchIcon from '@mui/icons-material/Launch';


function Home() {
  return (
   <div className='p-10'>
     <div >
      <div className='text-2xl font-medium'> <span> Design</span><ArrowRightAltIcon/><span> Develop</span> <ArrowRightAltIcon/><span> Deploy</span></div>
      <div className='flex flex-col text-[100px] font-serif leading-none font-[550]'><span>create your</span><span>website today</span><span className='text-emerald-300'>with US</span></div>

    </div >
    <div className='max-w-[500px] my-5'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius vero repellat suscipit nam ipsam at modi voluptatum voluptas? Hic debitis, molestias illum in rem aliquam architecto adipisci quibusdam consequatur, provident assumenda.</p></div>
    <div className=''><button className='border border-emerald-300 rounded-lg px-4 py-2'>Figma Workplace <LaunchIcon/> </button></div>
   </div>
   
  )
}

export default Home