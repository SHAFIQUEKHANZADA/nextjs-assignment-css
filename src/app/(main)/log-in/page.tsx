"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'

const LogIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <div className='min-h-screen flex  justify-center items-center bg-slate-200 relative'>
            <div className='flex md:flex-row flex-col w-full justify-center items-center '>

                {/* Left side with the image */}
                <div className='flex justify-center items-center relative'>
                    <div className='md:w-[56vw] w-[90%] h-full justify-start bg-slate-200'>
                        <Image src={"/images/login.png"} alt='login' width={800} height={500} className='w-full drop-shadow-2xl' />
                    </div>
                </div>

                {/* Right side with the inputs */}
                <div className=''>
                    <div className='md:w-[37vw] w-[95vw]  h-auto bg-slate-200 p-8  shadow-2xl'>
                        <h1 className='text-3xl font-bold mb-6 text-center'>Login</h1>
                        <form className='space-y-7'>
                            <div>
                                <label htmlFor="Email" className='mb-2 font-bold text-[18px] text-gray-700'>Email</label>
                            <div className='relative'>
                                <AiOutlineMail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Enter your email'
                                />
                            </div>

                            </div>
                           <div>
                            <label htmlFor="Password" className='mb-2 font-bold text-[18px] text-gray-700'>Password</label>
                            <div className='relative'>
                            <RiLockPasswordFill className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                                <input
                                    type={passwordVisible ? 'text' : 'password'} // Toggle password visibility
                                    id='password'
                                    className='w-full px-4 pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Enter your password'
                                />
                                <div
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                    onClick={togglePassword}
                                >
                                    {passwordVisible ? <FiEyeOff className='text-gray-500' /> : <FiEye className='text-gray-500' />}
                                </div>

                            </div>
                            <div className='flex'>
                                <p><a href="/log-in" className='text-blue-500 underline text-[14px]'>forgot password?</a></p>
                            </div>

                            </div>
                            <button
                                type='submit'
                                className='w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300'
                            >
                                Login
                            </button>
                            <div className='flex justify-center pt-16 pb-4'>
                                <p className='text-[14px]'>Don&apos;t have an account ? <span><Link href="/sign-up" className='text-blue-500 underline'>Sign Up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LogIn