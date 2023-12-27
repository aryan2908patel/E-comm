import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from "../../public/images/abouttitle.webp";
import Img from "../../public/images/about1.webp";




interface Props {
    
}

const About = (props: Props) => {
    return (
      <div>
           
           <div className='flex flex-wrap flex-col-reverse items-center justify-center w-full flex-1 px-4 text-center mb-8'>
  <div className='flex w-full md:w-2/3 lg:w-2/3'>
    {/* About section */}
    <div className='p-5 w-full md:w-3/6 flex flex-col-reverse'>
      {/* About image */}
      <div className='flex items-center py-20'>
        <Image src={LogoImg} alt="img" />
      </div>
      <div>
        <h2 className='text-blue-800 text-6xl font-light mt-0 pt-0'>We, are Brancy</h2>
      </div>
      {/* Other content in the first div */}
    </div>
    
    {/* Sign up section */}
    <div className='w-full md:w-3/6'>
      <div className='flex justify-center '>
        <Image src={Img} alt="img" />
      </div>
      {/* Other content in the second div */}
    </div>
  </div>
</div>
            
            
      </div>
    );
}

export default About
