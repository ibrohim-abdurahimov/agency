import Image from 'next/image'
import React from 'react'
import img from '@/assets/Image (6).png'

const page = () => {
  return (
    <div className='py-24 text-center text-[#232536]'>
      <div className='container m-auto'>
        <div className='w-[625px] m-auto'>
          <p className=' text-sm font-mono font-semibold'>CAREER AT FINSWEET</p>
          <h2 className='mt-3 text-5xl font-semibold'>
            We hired people who are
            Always Passionate about what they do
          </h2>
          <p className='mt-6 text-base'>
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .
          </p>
        </div>
        <div className='mt-16'>
          <Image src={img} alt='foto' className='m-auto'/>
        </div>
        <p className='mt-20 text-lg font-semibold'>See Our open positions </p>
      </div>
    </div>
  )
}

export default page