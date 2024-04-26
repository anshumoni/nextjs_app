'use client'
import React from 'react'
import Image from 'next/image'
import {Custombuttonprops} from '@/types'

const Custombutton = ({title,btntype,containerStyle,handleClick,textStyle,rightIcon}:Custombuttonprops) => {
  return (
    <button
     disabled={false}
     type={btntype || 'button'}
     className={`custon-btn ${containerStyle}`}
     onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt="right icon" fill className='object-contain'/>
        </div>
      )}
    
    </button>
  )
}

export default Custombutton