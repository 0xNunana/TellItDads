import { faMagnifyingGlass, faUser,faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-white sticky top-0 z-30'>
<div className='max-w-screen-xl mx-auto  flex justify-between items-center py-3 '>
<Image src='/logo.jpg' width={90} height={90} alt='TID LOGO' className='rounded-full'/>
<div className='flex items-center justify-center p-2  border-2 rounded-full  space-x-1'>
    <FontAwesomeIcon icon={faMagnifyingGlass} height={25} width={25} color='gray' className='bg-gray-100 p-0'/>
   <input type='text' className='w-[600px]'/>
</div>
<div className='flex space-x-4'>
<Link href='/Account'>
    <div className='flex items-center space-x-1'>
       
        <FontAwesomeIcon icon={faUser} width={25} height={25}/>
        <p>Account</p>
    </div>
      </Link>
    <p>|</p>
    <Link href='/Login'>
    <div className='flex items-center space-x-1'>
      
        <p>Login</p>
        <FontAwesomeIcon icon={faArrowRightToBracket} width={25} height={25}/>
 
   
    </div>       </Link>
</div>
    </div>
    </div>

  )
}

export default Header