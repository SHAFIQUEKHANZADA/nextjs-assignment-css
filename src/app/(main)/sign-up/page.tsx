"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IoPersonOutline } from 'react-icons/io5'
import { RiLockPasswordFill } from 'react-icons/ri'
import styles from '../../../../styles/components/signup.module.css'

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
        <div className={styles.main}>
            <div className={styles.innerMain}>

                {/* Left side */}
                <div className={styles.imgDivMain}>
                    <div className={styles.innerLeftDiv}>
                        <Image src={"/images/login.png"} alt='login' width={800} height={500} className='w-full drop-shadow-2xl' />
                    </div>
                </div>

                {/* Right side */}
                <div>
                    <div className={styles.mainRight}>
                        <h1 className={styles.mainRightH1}>Sign Up</h1>
                        <p className={styles.mainRightPara}>Join us today and start your journey with our travel app</p>
                        <form className='space-y-6'>

                            <div className={styles.mainLast}>
                                <div className={styles.outerDiv}>
                                    <IoPersonOutline className={styles.outerDivIcon} />
                                    <input
                                        type='text'
                                        id='name'
                                        className={styles.mainInput}
                                        placeholder='First name'
                                    />
                                </div>
                                <div className={styles.outerDiv}>
                                    <IoPersonOutline className={styles.outerDivIcon} />
                                    <input
                                        type='text'
                                        id='lastname'
                                        className={styles.mainInput}
                                        placeholder='Last name'
                                    />
                                </div>

                            </div>
                            {/* Email Input with Icon */}
                            <div className={styles.outerDiv}>
                                <AiOutlineMail className={styles.outerDivIcon} />
                                <input
                                    type='email'
                                    id='email'
                                    className={styles.mainInput}
                                    placeholder='Enter your email'
                                />
                            </div>

                            {/* number */}
                            <div className={styles.outerDiv}>
                                <FaPhoneAlt className={styles.outerDivIcon} />
                                <input
                                    type='number'
                                    id='number'
                                    className={styles.mainInput}
                                    placeholder='Phone number'
                                />
                            </div>


                            <div className={styles.mainLast}>
                                {/* Password Input with Toggle Icon */}
                                <div className={styles.outerDiv}>
                                    <RiLockPasswordFill className={styles.outerDivIcon} />
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        id='password'
                                        className={styles.mainInput}
                                        placeholder='Password'
                                    />
                                    <div
                                        className={styles.eye}
                                        onClick={togglePassword}
                                    >
                                        {passwordVisible ? <FiEyeOff className='text-gray-500' /> : <FiEye className='text-gray-500' />}
                                    </div>
                                </div>

                                {/* Confirm Password Input with Toggle Icon */}
                                <div className={styles.outerDiv}>
                                    <RiLockPasswordFill className={styles.outerDivIcon} />
                                    <input
                                        type={passwordVisibleTwo ? 'text' : 'password'}
                                        id='confirm-password'
                                        className={styles.mainInput}
                                        placeholder='Confirm password'
                                    />
                                    <div
                                        className={styles.eye}
                                        onClick={togglePasswordTwo}
                                    >
                                        {passwordVisibleTwo ? <FiEyeOff className='text-gray-500' /> : <FiEye className='text-gray-500' />}
                                    </div>
                                </div>
                            </div>
                            {/* Date of Birth Input */}
                            <div className={styles.outerDiv}>
                                <input
                                    type='date'
                                    id='dob'
                                    className={styles.mainInput}
                                    placeholder='Date of Birth'
                                />
                            </div>

                            <button
                                type='submit'
                                className={styles.btn}
                            >
                                Sign up
                            </button>
                            <div className={styles.lastDiv}>
                                <p className={styles.lastP}>Already have an account? <span><Link href="/log-in" className={styles.lastpSpan}>Log In</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp
