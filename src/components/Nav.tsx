"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";
import styles from "../../styles/components/Nav.module.css"
import Link from "next/link";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.main}>
            <div className={styles.imgDiv}>
                <Image
                    src="/images/Decore.png"
                    alt="Logo"
                    width={320}
                    height={100}
                    className={styles.mainImg}
                />
            </div>

            <div className={styles.mainDivThree}>
                {/* left - Logo */}
                <div className="z-20">
                    <Image src={"/images/roamly.png"} alt="roamly" width={120} height={0} className="w-[22vw] md:w-[140px]" />
                </div>

                {/* right - Menu */}
                <div className="flex items-center md:gap-[4vw] z-20">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex lg:gap-16 md:gap-4">
                        <Link href={"/"}><li>Home</li></Link>
                        <Link href={"/hotels"}><li>Hotels</li></Link>
                        <Link href={"/flights"}><li>Flights</li></Link>
                        <Link href={"/booking"}><li>Bookings</li></Link>
                    </ul>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-14">
                        <Link href={"/log-in"}>     <button>Login</button></Link>
                        <Link href={"/sign-up"}>      <button className="px-3 py-1 border border-zinc-950 rounded-sm shadow-inner">
                            Sign up
                        </button></Link>
                    </div>

                    {/* Language Selector */}
                    <div>
                        <select className="bg-transparent">
                            <option value="EN">EN</option>
                            <option value="UR">UR</option>
                            <option value="ES">ES</option>
                            <option value="DE">DE</option>
                            <option value="ZH">ZH</option>
                        </select>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden ml-4 dark:text-white text-black focus:outline-none"
                    >
                        {isOpen ? (
                            <FaTimes className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } absolute top-full left-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white md:hidden z-50`}
                >
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <Link href={"/"}><li>Home</li></Link>
                        <Link href={"/hotels"}><li>Hotels</li></Link>
                        <Link href={"/flights"}><li>Flights</li></Link>
                        <Link href={"/booking"}><li>Bookings</li></Link>
                        <Link href={"/log-in"}>  <button className="w-full py-2 flex justify-center items-center gap-1">Login <span><IoLogInOutline className="block md:hidden text-[5vw]" /></span></button></Link>
                        <Link href={"/sign-up"}>     <button className="w-full py-2 flex justify-center items-center gap-1">
                            Sign up <span className="block md:hidden text-[5vw]"><MdPersonAddAlt1 /></span>
                        </button> </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
