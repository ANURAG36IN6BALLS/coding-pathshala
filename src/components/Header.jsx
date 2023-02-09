import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import logo from './assets/regular_images/logo.png'
import {GoSearch} from 'react-icons/go'
import {FiUsers} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'
import {BsHandbag} from 'react-icons/bs'

export default function Header() {
  return (
   
 <> 

            <div>
                  <header >
                      <div className='flex justify-end items-center bg-black h-[40px]  '>
                              <div >
                                <ul className='flex space-x-4 mr-[130px] cursor-pointer'>
                                  <li className='text-white font-thin text-[15px] '>My Account</li>
                                  <li className='bg-white w-[0.1px] h-3 mt-[6px]'></li>
                                  <li className='text-white font-thin text-[15px] '>FAQs</li>
                                  <li className='bg-white w-[0.1px] h-3 mt-[6px]'></li>
                                  <li className='text-white font-thin text-[15px] flex justify-center items-center '>Contact Us
                                  <ImWhatsapp className='ml-3 h-5 w-5'/>
                                  </li>    
                                </ul>
                              </div>

                      </div>




                      <div className='flex '>


                            <div className='h-[100px] w-[200px] '>
                              <img src={logo} alt='logo' />
                            </div>


                            <div className='flex items-center space-x-5 '>

                                  <div className='flex items-center relative '>
                                    <input type='search' 
                                    placeholder='Search entire store here....'
                                    className='border-[2px] border-black w-[500px] h-[55px] rounded ml-48 pl-4'/>
                                    <GoSearch className=' h-[55px] w-[60px] bg-blue-300 p-[13px] rounded absolute right-0' />
                                  </div>

                                  <div className='flex items-center'> 
                                    <FiUsers className='h-[30px] w-[40px]' />

                                      <div className='text-md'>
                                        <p>Sign In</p>
                                        <p>Create an Account</p>
                                      </div>


                                  </div>

                                  <div className='flex items-center'> 
                                    <FiHeart className='h-[30px] w-[40px]' />

                                      <div className='text-md'>
                                        <p>Favorite</p>
                                        <p>My Wish List</p>
                                      </div>
                                  </div>
                                      <div className='flex items-center'> 
                                        <BsHandbag className='h-[30px] w-[40px]' />

                                      <div className='text-md'>
                                        <p>My Cart</p>
                                        <p>₹0.00</p>
                                      </div>

                                  </div>



                            </div>


                      </div>

                  </header>

                  </div>


    </>



  )
}
