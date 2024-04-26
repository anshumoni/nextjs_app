"use client"
import React from 'react'
import Image from 'next/image'
import Custombutton from './Custombutton'

const Hero = () => {
    const handleScroll =()=>{

    }
  return (
    <div className='here'>
        <div className='flex-1 pt-36 paddong-x'>
            <h1 className='hero__title'>
             Find,book or rent  a car easily 
            </h1>
            <p className='hero__subtitle'>
                Streamline your car  with our effortless experience
            </p>
            <Custombutton title="Explore Your car" containerStyle="bg-primary-blue 
            text-white rounded-full mt-20 p-5"
             handleClick={handleScroll}/>
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt='Hero' fill className='object-contain'/>
                <div className='hero__image-overlay'></div>
            </div>
        </div>
    </div>
  )
}

export default Hero