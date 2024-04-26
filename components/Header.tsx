import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Custombutton from './Custombutton'

const Header = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6'>
            <Link href="/" className='flex justify-center items-center'>
                <Image src="/logo.svg" alt="Car Hub" width={118} height={18} className='object-content'/>
            </Link>
            <Custombutton btntype="submit" title="SignIn" 
            containerStyle="text-primary-blue  rounded-full mt-5 p-5 m-[240]"/>
        </nav>
    </header>
  )
}

export default Header