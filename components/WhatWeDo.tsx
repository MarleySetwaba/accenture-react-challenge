import React from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import Link from 'next/link'


const IconSection = ({header, text, image}: { header: string, text: string, image: string}) => {
    return (
<div className="md:col-span-6 lg:col-span-3 p-6 rounded-lg shadow-sm min-h-20 ">
<Image src={image} className='w-24 py-4' width={100} height={100} alt={`${header} Icon`} />
    <Link href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{header}</h5>
    </Link>
    <div className='py-7'>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{text}</p>
    </div>
</div>
    )
}


const WhatWeDo = () => {
  return (
    <div className='px-10 py-24'>
        <SectionHeader text='What We Do'/>
<blockquote className="text-3xl md:text-5xl/snug font-semibold text-gray-800 text-left text-wrap">
    <p className='tracking-tight'>We offer a complete range of bespoke design and developement services to help you turn your ideas into digital masterpieces.</p>
</blockquote>


<div className='grid md:grid-cols-12 pt-10 grid-cols-1'>
<IconSection 
header='Web development'
text='We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
image='/assets/app_dev_icon.svg'
/>
<IconSection
header='User experience &amp; design'
text='Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
image='/assets/ux_icon.svg'
/>
<IconSection
header='Mobile app development'
text='Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
image='/assets/web_dev_icon.svg'
/>
<IconSection
header='Blockchain solutions'
text='We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
image='/assets/icon.svg'
/>
</div>

</div>
  )
}

export default WhatWeDo