import React from 'react'
import {FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { CgProfile } from "react-icons/cg";



interface Props {
    
}

const Register = (props: Props) => {
    return (
        
        <div>
            
            <div className='bg-green-300 w-full h-40 mb-8 py-10'>
                <div className='font-san ml-80'>
                    <a href="#">Home</a>
                    <p></p>
                </div>
                <div className='ml-80 mt-4 text-3xl'>
                    Account
                </div>
            </div>            
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-8'>
            <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                <div className='w-3/5 p-5'>
                    <div className='text-left font-bold'>
                       <span className='text-green-500'>Glossy</span>Labs
                     </div>
                   <div className='py-10'>
                       <h2 className='text-3xl font-bold text-green-500 mb-2'>
                        Register Here
                        </h2>

                        <div className='flex flex-col items-center mt-10'>
                           <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                               <CgProfile className='text-gray-400 m-2' />
                               <input type="text" name="name" placeholder="Name" className='bg-gray-100 outline-none text-sm flex-1' /> 
                           </div>
                           <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                               <FaRegEnvelope className='text-gray-400 m-2' />
                               <input type="email" name="email" placeholder="E-mail" className='bg-gray-100 outline-none text-sm flex-1' /> 
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                               <MdLockOutline className='text-gray-400 m-2' />
                               <input type="password" name="password" placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' /> 
                            </div>
                            
                            <a href='#' className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-5'>
                               Submit
                            </a>
                        </div>
                        
                   </div>
            </div>{/*sign in section */}


           <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                <h2 className='text-3xl font-bold mb-2'>
                    Sign In Here
                </h2>
                <div className='border-2 w-10 border-white inline-block mb-2'></div>
                <p className='mb-10'>
                    Fill up personal information and start journey with us.
                </p>
                <a href='./login' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>
                    Sign In
                </a>
                </div>{/*sign up section */}
            </div>
            </div>
        </div>
    )
}

export default Register
