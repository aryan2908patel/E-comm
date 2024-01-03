import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from "../../public/images/abouttitle.webp";
import Img from "../../public/images/about1.webp";
import client from "../../public/images/client.webp"
import revenue from "../../public/images/revenue.webp"
import projects from "../../public/images/projects.webp"




interface Props {

}

const About = (props: Props) => {

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
            <p className='text-blue-800 underline text-lg text-left'>Best cosmetics provider</p>
            <p className='text-blue-800 text-left mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus possimus error tenetur sunt, repudiandae asperiores, ullam ex non maxime libero.</p>
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

      {/* ///////////////////// three boxes ////////////////////// */}

      <div className='flex flex-wrap mt-10'>
        <div className='flex-1 flex justify-center items-center flex-col lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-500 m-2 rounded-3xl p-5'>
          {/* Content for Box 1 */}
          <div className="m-4 flex justify-center items-center">
            <Image src={client} alt="Image 1" width={80} height={80} />
          </div>
          <h3 className="text-6xl w-80 overflow-hidden">5000+</h3>
          <p className="text-2xl m-2">Clients</p>
        </div>

        <div className='flex-1 flex justify-center items-center flex-col lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-500 m-2 rounded-3xl p-5'>
          {/* Content for Box 2 */}
          <div className="m-4 flex justify-center items-center">
            <Image src={projects} alt="Image 2" width={80} height={80} />
          </div>
          <h3 className="text-6xl w-80 overflow-hidden">250+</h3>
          <p className="text-2xl m-2">Projects</p>
        </div>

        <div className='flex-1 flex justify-center items-center flex-col lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-500 m-2 rounded-3xl p-5'>
          {/* Content for Box 3 */}
          <div className="m-4 flex justify-center items-center">
            <Image src={revenue} alt="Image 3" width={80} height={80} />
          </div>
          <h3 className="text-6xl w-80 overflow-hidden">1.5M+</h3>
          <p className="text-2xl m-2">Revenue</p>
        </div>
      </div>
    </div>
  );

}

export default About
