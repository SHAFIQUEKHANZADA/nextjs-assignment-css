import Image from 'next/image'
import { IoSearch } from 'react-icons/io5';

const Hotels = () => {
    return (
        <div className="bg-[#F2F3FA] relative  sm:pb-[20%] pb-[40%]">
            <div>
                <div className="relative w-full mx-auto">
                    {/* Background Image */}
                    <div className="relative w-full h-[80vh] md:h-[100]">
                        <Image
                            src="/images/mainhotel.jpg"
                            alt="main hotel"
                            fill
                            className="object-cover opacity-50  "
                        />
                        {/* <Image
                            src="/images/minihotel.jpg"
                            alt="mini hotel"
                            fill
                            className="object-cover opacity-50 block md:hidden"
                        /> */}
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black opacity-30"></div>

                        {/* Centered Text */}
                        <div className="absolute inset-0 flex sm:justify-center sm:items-center justify-start pt-16 sm:pt-0 text-white text-3xl md:text-5xl">
                            Choose the Hotel that Fits Your Style
                        </div>
                    </div>


                    {/* Search Bar */}
                    <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 sm:w-full w-[90%] bg-[#333333] h-auto shadow-2xl p-6 flex flex-col sm:gap-0 gap-5">
                        <h1 className="text-white">Where do you want to go?</h1>

                        <div className="flex sm:flex-row flex-col justify-center gap-0 sm:items-end">
                            <div className="flex-1 flex flex-col">
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="border border-gray-300 px-3 py-[12px] w-full"
                                />
                            </div>

                            {/* Calendar Date Selectors */}
                            <div className="flex-1 flex flex-col mt-4">
                                <label htmlFor="departure1" className="text-sm mb-1 text-white">DEPARTURE</label>
                                <input
                                    type="date"
                                    id="departure1"
                                    className="border border-gray-300 px-3 py-[11px] w-full"
                                />
                            </div>

                            <div className="flex-1 flex flex-col mt-4">
                                <label htmlFor="departure2" className="text-sm mb-1 text-white">RETURN</label>
                                <input
                                    type="date"
                                    id="departure2"
                                    className="border border-gray-300 px-3 py-[11px] w-full"
                                />
                            </div>

                            {/* Passengers/Class Selector */}
                            <div className="flex">
                                <div className="flex-1 flex flex-col mt-4">
                                    <label htmlFor="passengerClass" className="text-sm mb-1 text-white">GUESTS & ROOMS</label>
                                    <input
                                        type="text"
                                        placeholder="Find"
                                        className="border border-gray-300 px-3 py-3 w-full"
                                    />
                                </div>

                                <button className="bg-[#FEA400] py-[11px] px-4 mt-10 text-white rounded-tr-md rounded-br-md">
                                    <IoSearch/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='sm:mx-20 mx-2 sm:mt-28 mt-36 flex flex-col gap-10 '>
                    <div>
                        <h1 className='text-[24px]'>Find Best Hotels in Popular Cities</h1>
                    </div>

                    <div className='w-[100%] mx-auto grid grid-cols-3 gap-0'>
                        {/* 1st div spanning 2 columns */}
                        <div className='relative w-full h-[25vw] bg-slate-500 col-span-2  overflow-hidden group'>

                            <Image
                                src={"/images/chicago.jpg"}
                                alt='chicago'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>Chicago, USA</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 2nd div next to the 1st */}
                        <div className='relative   bg-slate-500 overflow-hidden group'>
                            <Image
                                src={"/images/hotel.jpg"}
                                alt='chicago'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>Madrid, Span</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $300 per day</p>
                            </div>
                        </div>

                        {/* 3rd div spanning 2 rows */}
                        <div className='relative  bg-slate-500 row-span-2 overflow-hidden group'>
                            {/* Image covering the full div */}
                            <Image
                                src={"/images/dubai.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>Dubai, UAE</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>

                        </div>


                        {/* 4th div filling the space below the 2nd */}
                        <div className='relative w-full h-[25vw] bg-slate-500 overflow-hidden group'>
                            <Image
                                src={"/images/hot.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>City, Country</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 5th div */}
                        <div className='relative w-full h-[25vw] bg-slate-500 overflow-hidden group'>
                            <Image
                                src={"/images/canada.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>City, Country</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 6th div */}
                        <div className='w-full h-[25vw] bg-slate-500 col-span-2 relative overflow-hidden group'>
                            <Image
                                src={"/images/greec.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>City, Country</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>

                        </div>

                        {/* 7th div */}
                        <div className='relative overflow-hidden w-full h-[25vw] bg-slate-500 group'>
                            <Image
                                src={"/images/swit.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>City, Country</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 8th div */}
                        <div className='w-full h-[25vw] bg-slate-500 relative overflow-hidden group'>
                            <Image
                                src={"/images/india.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>City, Country</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 9th div */}
                        <div className='w-full h-[25vw] bg-slate-500 relative overflow-hidden group'>
                            <Image
                                src={"/images/chin.jpeg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-orange-500 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                                <p className='text-white sm:text-lg text-[10px]'>City, Country</p>
                                <h2 className='text-white font-bold sm:text-lg text-[10px]'>Hotel Name</h2>
                                <p className='text-white sm:text-lg text-[10px]'>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 10th div positioned next to a row-span-2 div */}
                        {/* <div className='w-[200px] h-[200px] bg-slate-500'>10</div> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Hotels
