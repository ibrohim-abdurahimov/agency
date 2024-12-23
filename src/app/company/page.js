import React from 'react'
import img1 from '@/assets/Image 1.png'
import img2 from '@/assets/Image 2.png'
import img3 from '@/assets/Image 3.png'
import Image from 'next/image'

const page = () => {
  return (
    <div className='py-24 text-[#232536]'>
      <div className='container m-auto'>
        <p  className=' text-sm font-mono font-semibold'>Company</p>
        <h2 className='w-[624px] mt-3 text-5xl font-semibold'>
          Award-winning Company seen and used by millions around the world.
        </h2>
        <p className='mt-6 text-base w-[624px]'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.
        </p>
        <div className='mt-16 grid grid-cols-3 gap-3'>
          <div>
            <Image src={img1} alt='foto' className='w-full'/>
          </div>
          <div>
            <Image src={img2} alt='foto' className='w-full'/>
          </div>
          <div>
            <Image src={img3} alt='foto' className='w-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page