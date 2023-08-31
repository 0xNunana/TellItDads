import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='bg-[#3578E5] p-3 '>
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-around'>
                <div>
                    <Image src='/logo.jpg' width={50} height={50} alt='footer logo'/>
                </div>
                <div className='flex space-x-7'>
<FontAwesomeIcon icon={faFacebookF} height={25} width={25} color='white' className='hover:text-black'/>
<FontAwesomeIcon icon={faInstagram} height={25} width={25} color='white' className='hover:text-black'/>
<FontAwesomeIcon icon={faTwitter} height={25} width={25} color='white' className='hover:text-black'/>
     </div>
                <div className=''>
                    <p>Contact Us</p>
                    <p>email address</p>
  
                </div>
            </div>
            <div>
                <p className='border-b flex justify-center text-white' >Contributers</p>
                
                <div className='flex justify-around items-center'>
                    <Image src='/nuna.png' height={100} width={100} alt='0xNunana'/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer