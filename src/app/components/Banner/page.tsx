import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div>
      <Image
            src="/Banner 2.png" 
            alt="Phones"
            width={1800} 
            height={448}
            className='banner'
          />
       
    </div>
  )
}

export default Banner
