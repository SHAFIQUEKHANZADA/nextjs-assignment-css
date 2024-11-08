import Image from 'next/image'
import { IoSearch } from 'react-icons/io5';
import styles from "../../../../styles/components/hotel.module.css"

const Hotels = () => {
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.mainInnerOne}>
                    {/* Background Image */}
                    <div className={styles.bgImg}>
                        <Image
                            src="/images/mainhotel.jpg"
                            alt="main hotel"
                            fill
                            className={styles.img}
                        />
                        {/* Dark Overlay */}
                        <div className={styles.darkOverly}></div>

                        {/* Centered Text */}
                        <div className={styles.centerTexed}>
                            Choose the Hotel that Fits Your Style
                        </div>
                    </div>


                    {/* Search Bar */}
                    <div className={styles.search}>
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
                                    <IoSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.mainInnerTwo}>
                    <div>
                        <h1 className={styles.secH1}>Find Best Hotels in Popular Cities</h1>
                    </div>

                    <div className={styles.mainCards}>
                        {/* 1st div spanning 2 columns */}
                        <div className={`${styles.card1} group`}>

                            <Image
                                src={"/images/chicago.jpg"}
                                alt='chicago'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>Chicago, USA</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 2nd div next to the 1st */}
                        <div className={`${styles.card2} group`}>
                            <Image
                                src={"/images/hotel.jpg"}
                                alt='chicago'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>Madrid, Span</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $300 per day</p>
                            </div>
                        </div>

                        {/* 3rd div spanning 2 rows */}
                        <div className={`${styles.card3} group`}>
                            {/* Image covering the full div */}
                            <Image
                                src={"/images/dubai.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>Dubai, UAE</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>

                        </div>

                        {/* 4th div filling the space below the 2nd */}
                        <div className={`${styles.card4to5} group`}>
                            <Image
                                src={"/images/hot.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>City, Country</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 5th div */}
                        <div className={`${styles.card4to5} group`}>
                            <Image
                                src={"/images/canada.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>City, Country</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 6th div */}
                        <div className={`${styles.card6} group`}>
                            <Image
                                src={"/images/greec.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>City, Country</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>

                        </div>

                        {/* 7th div */}
                        <div className={`${styles.card4to5} group`}>
                            <Image
                                src={"/images/swit.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>City, Country</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 8th div */}
                        <div className={`${styles.card4to5} group`}>
                            <Image
                                src={"/images/india.jpg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>City, Country</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>
                        </div>

                        {/* 9th div */}
                        <div className={`${styles.card4to5} group`}>
                            <Image
                                src={"/images/chin.jpeg"}
                                alt='dubai'
                                fill // Replaces layout='fill'
                                style={{ objectFit: 'cover' }}// Ensures the image covers the container
                                className='absolute inset-0'
                            />

                            {/* Overlay */}
                            <div className={`${styles.hovEffect} group`}>
                                <p className={styles.hovEffectp}>City, Country</p>
                                <h2 className={styles.hovEffectH1}>Hotel Name</h2>
                                <p className={styles.hovEffectp}>Price: $100 per day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotels
