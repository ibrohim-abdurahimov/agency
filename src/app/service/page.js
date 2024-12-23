import React from 'react'

const About = () => {
  return (
    <div className='bg-[#FFE6D2] py-24 text-[#232536]'>
      <div className='container m-auto flex items-center  gap-[500px]'>
        <div className='w-[624px]'>
          <p className=' text-sm font-mono font-semibold'>Our Services</p>
          <h2 className='mt-3 text-5xl font-semibold'>
            We Build Software Solutionthat Solve Clients Business Challenges
          </h2>
          <p className='mt-6 text-base'>
            Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
          </p>
          <button className='mt-10 py-5 pl-8 pr-12 bg-[#444CFC] text-white'>Request A Quote</button>
        </div>
        <div className='flex flex-col gap-4 text-2xl font-bold'>
          <p>Technical support</p>
          <p>Development</p>
          <p>AWS/Azure </p>
          <p>Consulting</p>
          <p>Information Technology</p>
        </div>
      </div>
    </div>
  )
}

export default About