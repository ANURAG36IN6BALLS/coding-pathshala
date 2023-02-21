import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function MyAccount() {
  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-9'>

              <h1 className='text-3xl font-semibold  mt-6'>Customer Login</h1>
              
              <button className='flex relative bg-blue-900 text-white font-thin text-[15px] py-1 px-4 rounded m-[10px] shadow-md'>
                <FaFacebookF className='h-5 w-5 mr-[8px] ' />
                SIGN IN WITH FACEBOOK</button>
                
      </div>

      <div className='flex justify-around my-20'>

        <div className=' border-2 border-gray-200 shadow-md w-[30%] p-2'>

          <h1 className='font-semibold text-3xl '>Registerd Customers</h1>
          <p className='text-gray-400 text-sm py-2'>if you have an account ,signin with email address</p>
          <p>
            Email 
            <span className='text-red-600'>*</span></p>
          <input type="email" className='border-2 border-gray-100 w-full h-10 my-2' />
          <p>
            Password
             <span className='text-red-600'>*</span>
          </p>
          <input type="password"  className='border-2 border-gray-100 w-full h-10 my-2' />
          <div>
          <input type="checkbox" /> showpassword

          </div>

          <p className='text-gray-400 text-sm py-2'> Please type the letters and numbers below <span className='text-red-600'>*</span></p>
          <input type="text"
          className='border-2 border-gray-100 w-full h-10 my-2' 
           />

          <div className='flex w-full h-10 '>
            <div className='w-[50%]'>IMAGE</div>
            <button className='bg-yellow-300 w-[50%] font-semibold text-sm rounded'>RELOAD CAPTCHA</button>
          </div>
          <p className='font-semibold text-sm my-2'>^ Attention: <span className='text-gray-400 text-sm py-2' >Captcha is case sensitive .</span> </p>

          <div className='float-right text-gray-800 my-4 '>

          <Link to={'/Forgotpassword'}> forgot your password ?</Link>
            </div>

          <button className='bg-yellow-300 w-full h-10 my-2 font-semibold rounded'>SignIn</button>
          <p className='text-red-600 text-[10px]'><span>*</span> Required fields</p>

        </div>




        
        <div className='w-[40%]'>
            <h1 className='font-semibold text-2xl'>New Customers</h1>
            <p className='text-gray-400 text-sm py-2'>Creating an account haws many benifits:check out faster,keep more 
            <br />than one address , track orders and more
             </p>

              <div className='w-full my-3'>

              <button className='bg-yellow-300 w-[40%] py-3 font-semibold rounded'>
                <Link to={'/Signup'} > CREATE AN ACCOUNT</Link>
                
              </button>
              </div>

             
            
           


        </div>



      </div>


    </>
  )
}
