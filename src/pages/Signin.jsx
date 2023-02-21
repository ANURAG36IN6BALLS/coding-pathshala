import React from 'react'
import {BiLogIn} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function signin() {
  return (

    <>
        <div 
        className=
        'w-[40%] m-auto my-10 border-2 border-gray-300  shadow-lg absolute top-0 left-0 bottom-0 right-0 bg-white  h-full'
        >

              <div className='text-white text-lg font-bold bg-black flex justify-between py-3 items-center'>
                <div className='flex  items-center space-x-1'>
                   <BiLogIn />
                   <h1>Sign In</h1>
                </div>
                <AiOutlineClose className=' font-bold'/>
               
            </div>
          <div className='p-4'>

            <div>

              <div className='flex justify-between p-2 '>
                <span className='border-b-2 border-gray-500 pb-5'>Registered Customers</span>
                <span className='border-b-2 border-gray-500 pb-5'>or Sign In With</span>
              </div>
              <div className='flex justify-between items-center'>
                <p>Email <span className='text-red-500'>*</span></p>
                <button className='flex relative bg-blue-900 text-white font-thin text-[15px] py-1 px-4 rounded m-[10px]
                shadow-md'>
                  <FaFacebookF className='h-5 w-5 mr-[8px] ' />
                SIGN IN WITH FACEBOOK</button>
              </div>

              <input type="email" placeholder=' your Email' className='border-2 border-gray-300 p-2 rounded w-[60%] my-4' />

              <p>Password <span className='text-red-500'>*</span></p>
              <input type="password" placeholder=' password' className='border-2 border-gray-300 p-2 rounded w-[60%] my-4' />

              <p className='py-1'>Please type the letters and numbers below <span className='text-red-500 '>*</span></p>

               <div className='flex w-[80%] h-10  '>
                    <div className='w-[50%] text-lg font-semibold text-center'>IMAGE</div>
                    <button className='bg-yellow-300 w-[50%] font-semibold text-sm rounded'>RELOAD CAPTCHA</button>
                </div>
                 <p className='font-semibold text-sm my-2'>^ Attention: <span className='text-gray-400 text-sm py-2' >
                  Captcha is case sensitive .</span>
                   </p>
                <button className='bg-black text-white text-sm font-bold p-2 w-[30%] rounded mb-3'>Login</button>
                <br />
                <Link to={"/Forgotpassword"}>
                    <button className='bg-yellow-400 text-sm font-bold p-2 w-[30%] rounded mb-3'>
                      Forgotpassword ?
                      </button>
                </Link>
                <br />
                <Link to={"/Signup"} className='border-[1px] border-gray-300 p-2'>Create A New Account ?</Link>



            </div>




            </div>
        </div>
    </>
  )
}
