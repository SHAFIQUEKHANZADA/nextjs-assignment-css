import Image from 'next/image'
import { FaRegClock, FaSuitcase } from 'react-icons/fa';
import { FaArrowRightLong, FaMapLocationDot } from 'react-icons/fa6';
import { GrCurrency } from 'react-icons/gr';
import { IoIosArrowDown, IoMdInformation } from 'react-icons/io';
import { IoPerson, IoSearch } from 'react-icons/io5';
import { MdAirplanemodeActive, MdOutlineFlightTakeoff } from 'react-icons/md';
import { TbArrowsExchange } from 'react-icons/tb';
import { TfiLocationArrow } from 'react-icons/tfi';

const Flights = () => {
    return (
        <div className=" relative sm:pb-[10%] pb-[30%] overflow-x-hidden w-full">
            <div>
                <div className="relative w-full mx-auto mt-8 ">
                    {/* Background Image */}
                    <div className="relative w-[90%] h-[80vh] md:h-[100]  mx-auto">
                        <Image
                            src="/images/map.jpg"
                            alt="map"
                            fill
                            className="object-cover opacity-50 sm:rounded-[50px] rounded-[20px]"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black opacity-10 sm:rounded-[50px] rounded-[20px]"></div>

                        {/* Centered Text */}
                        <div className="absolute inset-0 flex sm:items-center left-[40px] pt-28 sm:pt-0 text-gray-500 text-[10vw] font-bold md:text-6xl">
                            Flight <br /> Booking
                        </div>

                        <div className="flex absolute top-[-25px]">
                            <div className="h-[70px] w-[180px]  flex items-center justify-center   animate-move-across">
                                <Image
                                    src={"/images/airplan.png"}
                                    alt="Airplane logo"
                                    width={110}
                                    height={90}
                                    className="object-contain h-[140px] w-[150px] md:h-[180px] md:w-[280px]"
                                />
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex md:flex-row flex-col w-[90%] sm:mt-24 mt-16 mx-auto'>

                    <div className='md:w-[30%]'>
                        <div className='flex flex-col gap-2'>
                            <div className="border border-gray-300   p-4 w-full max-w-sm shadow-md">
                                {/* Header with down arrow */}
                                <div className="flex items-center justify-between pb-2">
                                    <span className="font-semibold text-gray-700">Filters</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Divider line */}
                                <hr className="border-t border-gray-300 mb-2" />

                                {/* Content below the line */}
                                <div className="pt-2">
                                    <span className="text-gray-600">No of transit</span>

                                    {/* First select option */}
                                    <div className="mt-3">
                                        <label htmlFor="transit" className="block text-sm font-medium text-gray-600">Choose Transit</label>
                                        <select
                                            id="transit"
                                            name="transit"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    {/* Second select option */}
                                    <div className="mt-3">
                                        <label htmlFor="mode" className="block text-sm font-medium text-gray-600">Choose Mode</label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Air</option>
                                            <option>Sea</option>
                                            <option>Land</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-gray-300   p-4 w-full max-w-sm shadow-md">
                                {/* Header with down arrow */}
                                <div className="flex items-center justify-between pb-2">
                                    <span className="font-semibold text-gray-700">Filters</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Divider line */}
                                <hr className="border-t border-gray-300 mb-2" />

                                {/* Content below the line */}
                                <div className="pt-2">
                                    <span className="text-gray-600">No of transit</span>

                                    {/* First select option */}
                                    <div className="mt-3">
                                        <label htmlFor="transit" className="block text-sm font-medium text-gray-600">Choose Transit</label>
                                        <select
                                            id="transit"
                                            name="transit"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    {/* Second select option */}
                                    <div className="mt-3">
                                        <label htmlFor="mode" className="block text-sm font-medium text-gray-600">Choose Mode</label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Air</option>
                                            <option>Sea</option>
                                            <option>Land</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-auto h-auto  p-6 flex flex-col sm:gap-0 gap-5">

                        <div className='flex gap-3 sm:justify-start justify-center'>
                            <div className='flex gap-1 bg-gray-200 p-2 rounded-[40px] px-3 text-[12px] items-center'><FaArrowRightLong /> On way</div>
                            <div className='flex gap-1 bg-gray-200 p-2 rounded-[40px] px-3 text-[12px] items-center'><IoPerson /> 1</div>
                            <div className='flex gap-1 bg-gray-200 p-2 rounded-[40px] px-3 text-[12px] items-center'><FaMapLocationDot />
                                Location  <IoIosArrowDown /></div>

                        </div>

                        <div className="flex justify-center">
                            <div className="flex flex-col md:flex-row w-full justify-center items-center mt-5 gap-3">
                                <div className="flex gap-2 justify-center w-full max-w-5xl">
                                    <div className="relative flex-grow">
                                        <TfiLocationArrow className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="search"
                                            placeholder="From"
                                            className="w-full rounded-[40px]  bg-white pl-12 pr-4 py-[6px] text-sm border border-black/30"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <TbArrowsExchange className="text-xl" />
                                    </div>

                                    <div className="relative flex-grow">
                                        <TfiLocationArrow className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            placeholder="To"
                                            className="w-full border border-black/30 rounded-[40px] bg-white pl-12 pr-4 py-[6px] text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Calendar Date Selectors */}
                                <div className="flex w-full justify-center">
                                    <div className="flex sm:flex-row flex-col gap-4 flex-grow">
                                        <div className="flex-grow">
                                            <label htmlFor="name" className='sm:hidden block'>From</label>
                                            <input
                                                type="date"
                                                id="departure1"
                                                className="border border-gray-300 rounded-[40px] px-3 py-[5px] w-full"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <label htmlFor="name" className='sm:hidden block'>To</label>
                                            <input
                                                type="date"
                                                id="departure2"
                                                className="border border-gray-300 rounded-[40px] px-3 py-[5px] w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-gray-500  md:py-3 md:px-3 py-3 px-16  text-white md:rounded-[50%] rounded-[20px]">
                                    <IoSearch />
                                </button>
                            </div>
                        </div>


                        <div className='sm:mt-16 mt-0'>


                            <div className='flex flex-col gap-[0.8vw] w-full'>
                                <div className='sm:flex hidden  justify-between pl-[14vw] pr-8 text-blue-600 font-bold  text-[18px]'>
                                    <span className='flex  justify-center items-center'><MdAirplanemodeActive className='rotate-[45deg]' /> Take off</span>
                                    <span className='flex  justify-center items-center'><MdAirplanemodeActive className='rotate-[135deg]' /> Landing</span>
                                    <span className='flex  justify-center items-center'><FaRegClock /> Total Time</span>
                                    <span className='flex  justify-center items-center'> <sub>SAR</sub> 2,270.44</span>
                                </div>

                                <hr className='sm:block hidden' />

                                <div className='flex sm:flex-row flex-col sm:mt-0 mt-20 px-4 py-6 bg-slate-50 sm:px-8 sm:py-6 shadow-xl rounded-3xl'>
                                    <div className='flex-1 flex flex-col items-center'>
                                        <MdOutlineFlightTakeoff className='md:text-[3.6vw] text-[10vw]' />

                                        <p className='text-blue-300'>Airline</p>
                                        <p className='text-blue-300'>XX-001</p>

                                    </div>

                                    <div className='flex-1'>




                                        <div className=' text-blue-600'>

                                            <span className='flex underline items-center sm:hidden my-2 text-orange-500'><MdAirplanemodeActive className='rotate-[45deg]' /> Take off</span>
                                            <h1 className='text-[16px] font-semibold'>Karachi</h1>
                                            <p className='text-[12px]'>Pakistan International Airlines</p>
                                        </div>

                                        <div>
                                            <p className='text-blue-300'>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className='flex-1'>


                                        <div className=' text-blue-600'>

                                            <span className='flex underline sm:hidden my-2 items-center text-orange-500'><MdAirplanemodeActive className='rotate-[135deg]' /> Landing</span>
                                            <h1 className='text-[16px] font-semibold'>Dubai</h1>
                                            <p>Emirates</p>
                                        </div>

                                        <div>
                                            <p className='text-blue-300'>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className='flex items-cnter sm:items-start sm:gap-8'>
                                        <div className='flex-1 flex flex-col items-center'>
                                            <span className='flex underline sm:hidden my-2 items-center text-orange-500'><FaRegClock /> Total Time</span>
                                            <p className='text-blue-300'>1 STOP</p>
                                            <p className='text-blue-300'>6 Hrs 20 Min</p>

                                        </div>

                                        <div className='flex flex-1 flex-col gap-2 sm:items-end items-center'>
                                            <span className='flex underline items-center sm:hidden  text-blue-500'> <sub>SAR</sub> 2,270.44</span>
                                            <div className='flex sm:gap-3 gap-1 text-gray-400'>
                                                <span className='border text-[30px] font-extrabold border-gray-400 rounded-[50%]'><IoMdInformation /></span>
                                                <span className='border text-[20px] px-1 justify-center flex items-center font-extrabold border-gray-400 rounded-[50%]'><GrCurrency /></span>
                                                <span className='border text-[20px] px-1 justify-center flex items-center font-extrabold border-gray-400 rounded-[50%]'><FaSuitcase /></span>

                                            </div>

                                            <div>
                                                <button className='bg-orange-500 text-white sm:text-[14px] text-[12px] px-4 py-2'>BOOK NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col sm:mt-0 mt-20 px-4 py-6 bg-slate-50 sm:px-8 sm:py-6 shadow-xl rounded-3xl'>
                                    <div className='flex-1 flex flex-col items-center'>
                                        <MdOutlineFlightTakeoff className='md:text-[3.6vw] text-[10vw]' />

                                        <p className='text-blue-300'>Airline</p>
                                        <p className='text-blue-300'>XX-001</p>

                                    </div>

                                    <div className='flex-1'>




                                        <div className=' text-blue-600'>

                                            <span className='flex underline items-center sm:hidden my-2 text-orange-500'><MdAirplanemodeActive className='rotate-[45deg]' /> Take off</span>
                                            <h1 className='text-[16px] font-semibold'>Karachi</h1>
                                            <p className='text-[12px]'>Pakistan International Airlines</p>
                                        </div>

                                        <div>
                                            <p className='text-blue-300'>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className='flex-1'>


                                        <div className=' text-blue-600'>

                                            <span className='flex underline sm:hidden my-2 items-center text-orange-500'><MdAirplanemodeActive className='rotate-[135deg]' /> Landing</span>
                                            <h1 className='text-[16px] font-semibold'>Dubai</h1>
                                            <p>Emirates</p>
                                        </div>

                                        <div>
                                            <p className='text-blue-300'>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className='flex items-cnter sm:items-start sm:gap-8'>
                                        <div className='flex-1 flex flex-col items-center'>
                                            <span className='flex underline sm:hidden my-2 items-center text-orange-500'><FaRegClock /> Total Time</span>
                                            <p className='text-blue-300'>1 STOP</p>
                                            <p className='text-blue-300'>6 Hrs 20 Min</p>

                                        </div>

                                        <div className='flex flex-1 flex-col gap-2 sm:items-end items-center'>
                                            <span className='flex underline items-center sm:hidden  text-blue-500'> <sub>SAR</sub> 2,270.44</span>
                                            <div className='flex sm:gap-3 gap-1 text-gray-400'>
                                                <span className='border text-[30px] font-extrabold border-gray-400 rounded-[50%]'><IoMdInformation /></span>
                                                <span className='border text-[20px] px-1 justify-center flex items-center font-extrabold border-gray-400 rounded-[50%]'><GrCurrency /></span>
                                                <span className='border text-[20px] px-1 justify-center flex items-center font-extrabold border-gray-400 rounded-[50%]'><FaSuitcase /></span>

                                            </div>

                                            <div>
                                                <button className='bg-orange-500 text-white sm:text-[14px] text-[12px] px-4 py-2'>BOOK NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flights
