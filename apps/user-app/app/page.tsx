'use client'
import React from 'react'
import { TypewriterEffectDemo } from '../@/components/typewriter'
import Image from 'next/image'
import background from "../img/img-2.png"
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
function page() {
  const router=useRouter();
  const signup = () => {
    router.push('/sign-up');
  };
  return (
    <div className="relative w-full h-screen">
    <div className="absolute inset-0">
      <Image
        src={background}
        alt="background-image"
        layout="fill"
        
        objectFit="cover"
       
        quality={100}
      />
    </div>
    <div className="relative pl-20 z-10 flex items-center justify-start  w-full ">
      <TypewriterEffectDemo/>
      
    </div>
    <div className="relative h-5 pl-20 z-10 flex items-center justify-start  w-full ">
      <Button  onClick={signup} className="w-30 mt-8 ml-30 rounded-xl font-semibold bg-white text-black border border-black  text-lg">
        Join now
        </Button>
    </div>
   
  </div>
  )
}

export default page
