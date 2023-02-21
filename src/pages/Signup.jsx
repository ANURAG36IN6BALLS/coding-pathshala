import React from 'react'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
        <div className='w-[40%] m-auto border-2 border-gray-300 shadow-lg my-10'>


          <div className='flex justify-between text-sm font-bold bg-black text-white p-3'>

             <div className='flex space-x-2 items-center' >
               <MdOutlineCreateNewFolder/>
               <h1>CREATE AN ACCOUNT</h1>
             </div>
             <AiOutlineClose className=' font-bold'/>

          </div>

        <div className='p-2 '>
                <p className='my-2'>First Name <span className='text-red-500'>*</span></p>
                <input type="text"  className='w-full border-2 border-gray-300 py-2'/>
                <p className='my-2'>Last Name <span className='text-red-500'>*</span></p>
                <input type="text"  className='w-full border-2 border-gray-300 py-2'/>
                <p className='my-2'>E-mail <span>*</span></p>
                <input type="email"  className='w-full border-2 border-gray-300 py-2'/>
                <div>
                  <input type="checkbox"  />
                  <p>Sign Up for Newsletter</p>
                </div>
                <p className='my-2'>Password <span>*</span></p>
                <input type="password"  className='w-full border-2 border-gray-300 py-2' />
                <p className='my-2'>Confirm Password <span>*</span></p>
                <input type="password"  className='w-full border-2 border-gray-300 py-2' />
                <p className='my-2'>Please type the letters and numbers below <span>*</span></p>
                <input type="text"  className='w-full border-2 border-gray-300 py-2'/>
                <div className='flex w-[80%] my-2'>
                          <div className='w-[50%] text-lg font-semibold text-center py-2'>IMAGE</div>
                          <button className='bg-yellow-300 w-[50%] font-semibold text-sm rounded py-2'>RELOAD CAPTCHA</button>
                </div>
                <p className='font-semibold text-sm my-2'>^ Attention: <span className='text-gray-400 text-sm py-2' >
                Captcha is case sensitive .</span>
                  </p>
                <div className='space-x-2'>

                <button className='w-[40%] bg-black text-white py-2 rounded-sm '>CREATE AN ACCOUNT</button>
                <button className='w-[30%] bg-yellow-400 py-2 rounded-sm '><Link to={'/'}>Back</Link></button>
                
          </div>
        </div>
         
        </div>
    
    </>
  )
}
