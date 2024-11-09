"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'
import styles from "../../../../styles/components/login.module.css"

const LogIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <div className={styles.main}>
            <div className={styles.innerMain}>

                {/* Left side   */}
                <div className={styles.mainLeftDiv}>
                    <div className={styles.innerLeftDiv}>
                        <Image src={"/images/login.png"} alt='login' width={800} height={500} className='w-full drop-shadow-2xl' />
                    </div>
                </div>

                {/* Right side  */}
                <div>
                    <div className={styles.mainRight}>
                        <h1 className={styles.mainRightH1}>Login</h1>
                        <form className='space-y-7'>
                            <div>
                                <label htmlFor="Email" className={styles.firstLabel}>Email</label>
                            <div className={styles.outerDiv}>
                                <AiOutlineMail className={styles.outerDivIcon} />
                                <input
                                    type='email'
                                    id='email'
                                    className={styles.mainInput}
                                    placeholder='Enter your email'
                                />
                            </div>

                            </div>
                           <div>
                            <label htmlFor="Password" className={styles.firstLabel}>Password</label>
                            <div className={styles.outerDiv}>
                            <RiLockPasswordFill className={styles.outerDivIcon} />
                                <input
                                    type={passwordVisible ? 'text' : 'password'}  
                                    id='password'
                                    className={styles.mainInput}
                                    placeholder='Enter your password'
                                />
                                <div
                                    className={styles.eye}
                                    onClick={togglePassword}
                                >
                                    {passwordVisible ? <FiEyeOff className='text-gray-500' /> : <FiEye className='text-gray-500' />}
                                </div>

                            </div>
                            <div className='flex'>
                                <p><a href="/log-in" className={styles.forgot}>forgot password?</a></p>
                            </div>

                            </div>
                            <button
                                type='submit'
                                className={styles.btn}
                            >
                                Login
                            </button>
                            <div className={styles.lastDiv}>
                                <p className={styles.lastP}>Don&apos;t have an account ? <span><Link href="/sign-up" className={styles.lastpSpan}>Sign Up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LogIn