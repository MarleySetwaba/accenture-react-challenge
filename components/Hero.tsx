import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
<section className="bg-center bg-cover bg-no-repeat bg-[url('/assets/confidence.jpeg')] bg-gray-700 bg-blend-multiply">
    <div className="relative h-screen text-center py-24 lg:py-56">
        <div className='absolute bottom-10 left-0 '>
        <h1 className="mb-4 pl-5 md:pl-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl text-left">Live With Confidence</h1>
        <p className="mb-8 pl-5 md:pl-10 text-left text-lg font-normal text-gray-300 lg:text-xl">Jose Mourinho brings confidence to pan-African Sanlam campaign</p>
        <div className="text-left pl-5 md:pl-10">
            <Link href="#" className="bg-primary-main inline-flex justify-center hover:text-gray-200 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                View project
            </Link>  
        </div>
        </div>
    </div>
</section>

  )
}

export default Hero