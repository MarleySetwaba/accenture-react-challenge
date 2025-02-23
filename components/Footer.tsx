import React from 'react'
import SectionHeader from './SectionHeader'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-primary-main p-10 '>
        <SectionHeader text='Contact Us' text_color='text-white'/>
        <div className='grid md:grid-cols-12 grid-cols-1'>
            <div className='col-span-8 mt-5'>
<h1 className='md:text-5xl text-3xl text-white font-bold line mb-3'>Have a project in mind?</h1>
<h1 className='md:text-5xl text-3xl text-white font-bold line'>Let's make it happen</h1>

      <div className="grid grid-cols-2 gap-8 px-4 mt-5 md:py-8 md:grid-cols-4">
        <div>
            <ul className="text-gray-200  font-medium">
                <li className="mb-4">
                    <Link href="#" className=" hover:underline">Terms of service</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:underline">Impressum</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Facebook</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Instagram</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Twitter</Link>
                </li>

            </ul>
        </div>
        <div>
            <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Github</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">LinkedIn</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Teams</Link>
                </li>

            </ul>
        </div>
        <div>
            <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Youtube</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Behance</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Dribble</Link>
                </li>

            </ul>
        </div>
    </div>



            </div>
            <div className='col-span-4 mt-5'>
<div className='flex flex-col'>
    <div>
    <p className='text-base text-gray-200'>22 Street Name, Suburb, 8000,</p>
    <p className='text-base text-gray-200'>Cape Town, South Africa</p>
    <p className='text-base text-gray-200'>+27 21 431 0001</p>
    <p className='text-base text-gray-200'>enquire@website.co.za</p>
    </div>

    <div className='gap-16 mt-5 lg:py-8 text-left'>
        <p className='text-base text-gray-200 mb-16 mt-1'>Explore open jobs</p>
        <p className='text-base text-gray-200 text'>@2000-2023 Company Name</p>
    </div>
</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer