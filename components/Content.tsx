import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
    <div className='bg-[#D6DBDC]/30 min-h-screen '>
        <div className='max-w-screen-xl mx-auto py-5'>
            <div className='w-full relative h-[500px]'>
            <Image src='/logo.jpg' fill alt='bg'/>
            </div>
            <p className='text-center p-3'>Features to be worked on. Kindly contribute to the work. Contributors will be featured in the footer section. Please create a branch to work in.Merge conflicts are really tedious. You can reach out to me via kudayapaul@proton.me.
            <span className='font-bold text-xl'>This is not a paid work. its for fun.</span>
            
             </p>
            <div className='grid sm:grid-cols-3 p-5 gap-4'>
            <div className='bg-red-100 p-5'>
  <p>Auhentication</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Suggest a feature</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Blogs</p>
</div><div className='bg-red-100 p-5'>
  <p>Mentorship</p>
</div><div className='bg-red-100 p-5'>
  <p>Member Spotlight </p>
</div><div className='bg-red-100 p-5'>
  <p>Polls</p>
</div><div className='bg-red-100 p-5'>
  <p>Privacy</p>
</div><div className='bg-red-100 p-5'>
  <p>About Us</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Marketplace</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Admin dasboard</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Funding/wallet</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Investment</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Health</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Event/ Calendar</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Multiple language support</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Partnerships</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Survey and feedback</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Mobile app</p>
</div>
<div className='bg-red-100 p-5'>
  <p>Library</p>
</div>
            </div>

        </div>
        </div>
  )
}

export default Content