import React from 'react'
import { Link } from 'react-router-dom'

export default function Requestforspecimen() {
  return (
    <div>

        <div>
            <div>
                <Link
                    to={'/'}
                    className='hover:underline px-5 text-gray-500'
                    >
                        Home
                </Link>
                <span>
                   	&#62; 
                    </span>

                <span 
                className='px-5'
                    >
                    Request for Specimen
                </span>
            </div>

            <h1 
            className='text-center text-4xl font-semibold'
            >
                Request for Specimen
            </h1>


            <div className=' m-auto my-8 w-[70%] flex space-x-10 '>

                    <div className='space-y-8 text-lg w-[30%]'>

                        <p className='p-2'>First Name :</p>
                        <p className='p-2'>Last Name :</p>
                        <p className='p-2'>Email Id :</p>
                        <p className='p-2'>Contact :</p>
                        <p className='p-2'>Address :</p>
                        <p className='p-2'>Pincode :</p>
                        <p className='p-2'>Subject of Teaching :</p>
                        <p className='p-2'>Number of Students <br />
                                Teaching Presently  ::</p>
                        <p className='p-2'>Institute name :</p>
                        <p className='p-2'>Institute Address :</p>
                        <p className='p-2'>Book name <br /> recommending <br /> presently:</p>


                    </div>
                    <div className=' flex flex-col space-y-8 w-[40%] m-2 '>
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="email" className='border-[2px] border-gray-300 p-2 '   />
                        <input type="tel"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="number"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                        <input type="text"  className='border-[2px] border-gray-300 p-2 '  />
                    </div>

                       
              
            </div>

        </div>


    </div>
  )
}
