import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
    <div className='bg-[#D6DBDC]/30 min-h-screen '>
        <div className='max-w-screen-xl mx-auto py-5'>
            <div className='w-full relative h-[500px]'>
            <Image src='/logo.jpg' fill alt='bg'/>
            </div>

        </div>
        </div>
  )
}

export default Content