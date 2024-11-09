"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai' // Email icon
import { FaPhoneAlt } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi' // Password toggle (eye) icons
import { IoPersonOutline } from 'react-icons/io5'
import { RiLockPasswordFill } from 'react-icons/ri'

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)  
    const [passwordVisibleTwo, setPasswordVisibleTwo] = useState(false)  

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible)  
    }
    const togglePasswordTwo = () => {
        setPasswordVisibleTwo(!passwordVisibleTwo)  
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-slate-200 relative'>
            <div className='flex md:flex-row flex-col w-full justify-center items-center '>

                {/* Left side with the image */}
                <div className='flex justify-center items-center relative'>
                    <div className='md:w-[56vw] w-[90%] h-full justify-start bg-slate-200'>
                        <Image src={"/images/login.png"} alt='login' width={800} height={500} className='w-full drop-shadow-2xl' />
                    </div>
                </div>

                {/* Right side with the inputs */}
                <div className=''>
                    <div className='md:w-[40vw] w-[95vw]  h-auto bg-slate-200 p-8'>
                        <h1 className='text-3xl font-bold mb-3 text-center'>Sign Up</h1>
                        <p className='text-gray-400 flex justify-center mb-6'>Join us today and start your journey with our travel app</p>
                        <form className='space-y-6'>

                            <div className='flex justify-between md:gap-3 md:flex-row flex-col gap-6'>
                            <div className='relative'>
                            <IoPersonOutline className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type='text'
                                    id='name'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='First name'
                                />
                            </div>
                            <div className='relative'>
                            <IoPersonOutline className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type='text'
                                    id='lastname'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Last name'
                                />
                            </div>

                            </div>
                            {/* Email Input with Icon */}
                            <div className='relative'>
                                <AiOutlineMail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Enter your email'
                                />
                            </div>

                            {/* number */}
                            <div className='relative'>
                            <FaPhoneAlt className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type='number'
                                    id='number'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Phone number'
                                />
                            </div>


                             <div className='flex justify-between md:gap-3 md:flex-row flex-col gap-6'>
                            {/* Password Input with Toggle Icon */}
                            <div className='relative'>
                            <RiLockPasswordFill className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type={passwordVisible ? 'text' : 'password'} // Toggle password visibility
                                    id='password'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Password'
                                />
                                <div
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                    onClick={togglePassword}
                                >
                                    {passwordVisible ? <FiEyeOff className='text-gray-500' /> : <FiEye className='text-gray-500' />}
                                </div>
                            </div>

                            {/* Confirm Password Input with Toggle Icon */}
                            <div className='relative'>
                            <RiLockPasswordFill className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type={passwordVisibleTwo ? 'text' : 'password'} // Toggle confirm password visibility
                                    id='confirm-password'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Confirm password'
                                />
                                <div
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                    onClick={togglePasswordTwo}
                                >
                                    {passwordVisibleTwo ? <FiEyeOff className='text-gray-500' /> : <FiEye className='text-gray-500' />}
                                </div>
                            </div>
                            </div>
                            {/* Date of Birth Input */}
                            <div className='relative'>
                                <input
                                    type='date'
                                    id='dob'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Date of Birth'
                                />
                            </div>
 
                            <button
                                type='submit'
                                className='w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300'
                            >
                                Sign up
                            </button>
                            <div className='flex justify-center pt-1'>
                                <p className='text-[14px]'>Already have an account? <span><Link href="/log-in" className='text-blue-500 underline'>Log In</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp
