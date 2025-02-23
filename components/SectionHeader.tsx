import React from 'react'

const SectionHeader = ({text, text_color = "text-gray-700"}: {text: string, text_color?: string}) => {
  return (
    <div className='flex flex-row items-center mb-10'>
        <div className='bg-primary-active w-12 h-1.5 rounded-md'></div>
  <p className={`text-lg ${text_color} pl-3 md:pl-10`}>{text}</p>
    </div>
  )
}

export default SectionHeader