import React from 'react'
import { Link } from 'react-router-dom'
import {GrMap} from 'react-icons/gr'

export default function Trackyourorder() {
  return (
    <>
            <div className='m-[100px]'>
                <Link
                    to={'/'}
                    className='hover:underline p-5 text-gray-500'
                    >
                        Home
                </Link>
                <span>
                   	&#62; 
                    </span>

                <span 
                className='px-5'
                    >
                    Track Your Order
                </span>
                <h1 className='text-center text-4xl font-semibold text-gray-900'>Tracking</h1>

                <div  className=' shadow-lg my-8 rounded p-5 border border-gray-300 rounded-md'>

                    <div className='flex items-center space-x-4'>
                    < GrMap className='text-4xl'/>
                    <p className='text-2xl'>Track status of your shipment</p>
                    </div>
                    <hr className='my-4 ' />
                    <div className='flex space-x-4'>
                        <p>Search By :</p>
                        <input type="radio" name="order" />
                        <span>Order ID</span>
                        <input type="radio" name="order" />
                        <span>AWB</span>
                    </div>
                    <input type="text" placeholder='Enter order Id to Search' className='p-2 w-[60%] border-2 border-gray-400 
                    rounded px-4 mt-4' /><br />
                    <input type="tel" placeholder='Enter Mobile to Search' className='p-2 w-[60%] border-2 border-gray-400 
                    rounded px-4 mt-4' /> <br />
                    <button className='bg-blue-900 text-white font-semibold py-2 px-8 my-4 rounded'>Submit</button>
                </div>

                
            </div>

    
    </>
  )
}
