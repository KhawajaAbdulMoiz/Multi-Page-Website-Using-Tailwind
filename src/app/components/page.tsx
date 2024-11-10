import React from 'react'
import Image from 'next/image'

export default function Main() {
  return (
    <div className='bg-black'>
        <div className='main-div text-white text-left flex items-center px-20 justify-center'>
            <div className='main-text text-left mr-20 sm: text-left mt-20'> 
                <h2 className='main-heading font-semibold text-gray-500 text-[25px]'>Pro.Beyond.</h2>
                <h1 className='main font-mixed font-light text-white text-[96px] '>IPHONE 14 <b>Pro</b></h1>
                <h2 className='main-heading font-semibold text-gray-500 text-[25px] '>Created to change everything for the better. For everyone</h2>
                <button className='main-button border border-white text-white text-[16px] rounded px-10 py-4 mt-10 text-blue' >Shop Now</button>
            </div>
            <Image
                src="/Iphone.png" 
                alt="Cart"
                width={406} 
                height={632}
                className="main-img mt-6 w-321 h-289" 
                style={{ width: 'auto', height: 'auto' }} 
            />
        </div>
     </div>
  )
}




      

