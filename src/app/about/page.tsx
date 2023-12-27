import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from "../../public/images/abouttitle.webp";
import Img from "../../public/images/about1.webp";




interface Props {

}

const About = (props: Props) => {
  // return (

  // <div className='flex flex-wrap flex-col items-center justify-center w-full flex-1 px-4 text-center mb-8'>
  //   <div className='flex w-full md:w-2/3 lg:w-2/3'>
  //     {/* About section */}
  //     <div className='p-5 w-full md:w-3/6 flex flex-col-reverse'>
  //       {/* About image */}
  //       <div className='flex items-center py-20'>
  //         <Image src={LogoImg} alt="img" />
  //       </div>
  //       <div>
  //         <h2 className='text-blue-800 text-6xl font-light mt-0 pt-0'>We, are Brancy</h2>
  //       </div>
  //       {/* Other content in the first div */}
  //     </div>

  //     {/* Sign up section */}
  //     <div className='w-full md:w-3/6'>
  //       <div className='flex justify-center '>
  //         <Image src={Img} alt="img" />
  //       </div>
  //       {/* Other content in the second div */}
  //     </div>
  //   </div>
  // </div>
  // main container div
  return (
    <div className='flex flex-col items-center justify-center w-full flex-1 px-4 text-center mb-8'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:w-2/3'>
        {/* About section */}
        <div className='flex flex-col p-5 justify-center items-center md:relative'>
          {/* About image */}
          <div className='flex items-center md:absolute top-12 ml-10'>
            <Image src={LogoImg} alt="img" />
          </div>
          <div>
            <h2 className='text-blue-800 text-4xl lg:text-6xl font-light mt-4 md:mt-0 pt-0'>We, are Brancy</h2>
            <p className='text-blue-800 underline text-lg'>Best cosmetics provider</p>
            <p className='text-blue-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus possimus error tenetur sunt, repudiandae asperiores, ullam ex non maxime libero.</p>
          </div>
          {/* Other content in the first div */}
        </div>

        {/* Sign up section */}
        <div className='p-5'>
          <div className='flex justify-center '>
            <Image src={Img} alt="img" />
          </div>
          {/* Other content in the second div */}
        </div>
      </div>
      
      {/* ///////// box ////////////////////// */}


      <div className='flex flex-wrap mt-10'>
        <div className='flex-1 lg:w-330 lg:h-220 md:w-240 md:h-220 sm:w-full sm:h-auto border-2 border-red-500  m-2 rounded-3xl'>
          {/* Content for Box 1 */}
          <div className="m-4">
            <Image src={LogoImg} alt="Image 1" width={330} height={220} className="object-cover" />
          </div>
          <h3 className="text-6xl">5000+</h3>
          <p className="text-2xl m-2">Clients</p>
        </div>

        <div className='flex-1 lg:w-330 lg:h-220 md:w-240 md:h-220 sm:w-full sm:h-auto border-2 border-red-500  m-2 rounded-3xl'>
          {/* Content for Box 2 */}
          <div className="m-4">
            <Image src={LogoImg} alt="Image 2" width={330} height={220} className="object-cover" />
          </div>
          <h3 className="text-6xl">250+</h3>
          <p className="text-2xl m-2">Projects</p>
        </div>

        <div className='flex-1 lg:w-330 lg:h-220 md:w-240 md:h-220 sm:w-full sm:h-auto border-2 border-red-500 m-2 rounded-3xl'>
          {/* Content for Box 3 */}
          <div className="m-4">
            <Image src={LogoImg} alt="Image 3" width={330} height={220} className="object-cover" />
          </div>
          <h3 className="text-6xl">1.5M+</h3>
          <p className="text-2xl m-2">Revenue</p>
        </div>
      </div>



    </div>
  );

  // );
}

export default About
