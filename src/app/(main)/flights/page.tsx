import Image from 'next/image'
import { FaRegClock, FaSuitcase } from 'react-icons/fa';
import { FaArrowRightLong, FaMapLocationDot } from 'react-icons/fa6';
import { GrCurrency } from 'react-icons/gr';
import { IoIosArrowDown, IoMdInformation } from 'react-icons/io';
import { IoPerson, IoSearch } from 'react-icons/io5';
import { MdAirplanemodeActive, MdOutlineFlightTakeoff } from 'react-icons/md';
import { TbArrowsExchange } from 'react-icons/tb';
import { TfiLocationArrow } from 'react-icons/tfi';
import styles from '../../../../styles/components/flight.module.css'

const Flights = () => {
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.mainOne}>
                    {/* Background Image */}
                    <div className={styles.mainImgDiv}>
                        <Image
                            src="/images/map.jpg"
                            alt="map"
                            fill
                            className={styles.mainImg}
                        />
                        {/* Dark Overlay */}
                        <div className={styles.darkOverly}></div>

                        {/* Centered Text */}
                        <div className={styles.centeredDiv}>
                            Flight <br /> Booking
                        </div>

                        <div className={styles.airPlan}>
                            <div className={`${styles.airPlanInner} animate-move-across`}>
                                <Image
                                    src={"/images/airplan.png"}
                                    alt="Airplane logo"
                                    width={110}
                                    height={90}
                                    className={styles.air}
                                />
                            </div>
                        </div>

                    </div>

                </div>

                <div className={styles.mainTwo}>
                    <div className={styles.mainOneInner}>
                        <div className={styles.mainPartOne}>
                            <div className={styles.flightMood}>
                                {/* Header with down arrow */}
                                <div className={styles.flightMoodHead}>
                                    <span className={styles.flightMoodSpan}>Filters</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={styles.flightMoodSvg}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Divider line */}
                                <hr className={styles.flightMoodHr} />

                                {/* Content below the line */}
                                <div className={styles.flightMoodContent}>
                                    <span className={styles.flightMoodSpanTwo}>No of transit</span>

                                    {/* First select option */}
                                    <div className={styles.flightMoodFirstSelect}>
                                        <label htmlFor="transit" className={styles.flightMoodFirstSelectLabel}>Choose Transit</label>
                                        <select
                                            id="transit"
                                            name="transit"
                                            className={styles.sel}
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    {/* Second select option */}
                                    <div className={styles.flightMoodFirstSelect}>
                                        <label htmlFor="mode" className={styles.flightMoodFirstSelectLabel}>Choose Mode</label>
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
                            <div className={styles.flightMood}>
                                {/* Header with down arrow */}
                                <div className={styles.flightMoodHead}>
                                    <span className={styles.flightMoodSpan}>Filters</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={styles.flightMoodSvg}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Divider line */}
                                <hr className={styles.flightMoodHr} />

                                {/* Content below the line */}
                                <div className={styles.flightMoodContent}>
                                    <span className={styles.flightMoodSpanTwo}>No of transit</span>

                                    {/* First select option */}
                                    <div className={styles.flightMoodFirstSelect}>
                                        <label htmlFor="transit" className={styles.flightMoodFirstSelectLabel}>Choose Transit</label>
                                        <select
                                            id="transit"
                                            name="transit"
                                            className={styles.sel}
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    {/* Second select option */}
                                    <div className={styles.flightMoodFirstSelect}>
                                        <label htmlFor="mode" className={styles.flightMoodFirstSelectLabel}>Choose Mode</label>
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

                    <div className={styles.mainTwoInner}>

                        <div className={styles.partTwoOne}>
                            <div className={styles.partTwoOneIcons}><FaArrowRightLong /> On way</div>
                            <div className={styles.partTwoOneIcons}><IoPerson /> 1</div>
                            <div className={styles.partTwoOneIcons}><FaMapLocationDot />
                                Location  <IoIosArrowDown /></div>

                        </div>

                        <div className={styles.partTwoSec}>
                            <div className={styles.partTwoSecInner}>
                                <div className={styles.partTwoSecInnerOne}>
                                    <div className={styles.sOne}>
                                        <TfiLocationArrow className={styles.sOneInner} />
                                        <input
                                            type="text"
                                            placeholder="From"
                                            className={styles.firstInput}
                                        />
                                    </div>

                                    <div className={styles.sCenter}>
                                        <TbArrowsExchange className={styles.sCenterIcon} />
                                    </div>

                                    <div className={styles.sOne}>
                                        <TfiLocationArrow className={styles.sOneInner} />
                                        <input
                                            type="text"
                                            placeholder="To"
                                            className={styles.firstInput}
                                        />
                                    </div>
                                </div>

                                {/* Calendar Date Selectors */}
                                <div className={styles.partTwoSecInnerTwo}>
                                    <div className={styles.partTwoSecInnerTwoInner}>
                                        <div className={styles.lgtofrom}>
                                            <label htmlFor="name" className={styles.lgtofromLabel}>From</label>
                                            <input
                                                type="date"
                                                id="departure1"
                                                className={styles.lgtofromMain}
                                            />
                                        </div>
                                        <div className={styles.lgtofrom}>
                                            <label htmlFor="name" className={styles.lgtofromLabel}>To</label>
                                            <input
                                                type="date"
                                                id="departure2"
                                                className={styles.lgtofromMain}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button className={styles.partTwoSecInnerThree}>
                                    <IoSearch />
                                </button>
                            </div>
                        </div>


                        <div className={styles.partTwoThree}>
                            <div className={styles.card}>
                                <div className={styles.cardFirst}>
                                    <span className={styles.sps}><MdAirplanemodeActive className='rotate-[45deg]' /> Take off</span>
                                    <span className={styles.sps}><MdAirplanemodeActive className='rotate-[135deg]' /> Landing</span>
                                    <span className={styles.sps}><FaRegClock /> Total Time</span>
                                    <span className={styles.sps}> <sub>SAR</sub> 2,270.44</span>
                                </div>

                                <hr className={styles.hrR} />

                                <div className={styles.cardMain}>
                                    <div className={styles.cardMainInner}>
                                        <MdOutlineFlightTakeoff className={styles.cardMainInnerIcon} />

                                        <p className={styles.aP}>Airline</p>
                                        <p className={styles.aP}>XX-001</p>

                                    </div>
                                    <div className={styles.fl}>
                                        <div className={styles.blu}>

                                            <span className={styles.bluSpan}><MdAirplanemodeActive className='rotate-[45deg]' /> Take off</span>
                                            <h1 className={styles.tex}>Karachi</h1>
                                            <p className='text-[12px]'>Pakistan International Airlines</p>
                                        </div>

                                        <div>
                                            <p className={styles.aP}>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className={styles.fl}>


                                        <div className={styles.blu}>

                                            <span className={styles.bluSpan}><MdAirplanemodeActive className='rotate-[135deg]' /> Landing</span>
                                            <h1 className={styles.tex}>Dubai</h1>
                                            <p>Emirates</p>
                                        </div>

                                        <div>
                                            <p className={styles.aP}>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className={styles.lastDiv}>
                                        <div className={styles.cardMainInner}>
                                            <span className={styles.lastSpan}><FaRegClock /> Total Time</span>
                                            <p className={styles.aP}>1 STOP</p>
                                            <p className={styles.aP}>6 Hrs 20 Min</p>

                                        </div>

                                        <div className={styles.morelastDiv}>
                                            <span className={styles.finalSpan}> <sub>SAR</sub> 2,270.44</span>
                                            <div className={styles.mostFinalDiv}>
                                                <span className={styles.lastInnerSpan}><IoMdInformation /></span>
                                                <span className={styles.lastInnerSpanTwo}><GrCurrency /></span>
                                                <span className={styles.lastInnerSpanTwo}><FaSuitcase /></span>

                                            </div>

                                            <div>
                                                <button className={styles.lastBtn}>BOOK NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardMain}>
                                    <div className={styles.cardMainInner}>
                                        <MdOutlineFlightTakeoff className={styles.cardMainInnerIcon} />

                                        <p className={styles.aP}>Airline</p>
                                        <p className={styles.aP}>XX-001</p>

                                    </div>
                                    <div className={styles.fl}>
                                        <div className={styles.blu}>

                                            <span className={styles.bluSpan}><MdAirplanemodeActive className='rotate-[45deg]' /> Take off</span>
                                            <h1 className={styles.tex}>Islamabad</h1>
                                            <p className='text-[12px]'>Pakistan International Airlines</p>
                                        </div>

                                        <div>
                                            <p className={styles.aP}>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className={styles.fl}>


                                        <div className={styles.blu}>

                                            <span className={styles.bluSpan}><MdAirplanemodeActive className='rotate-[135deg]' /> Landing</span>
                                            <h1 className={styles.tex}>London</h1>
                                            <p>British Airways</p>
                                        </div>

                                        <div>
                                            <p className={styles.aP}>Tue,29 Jan 2024 06.55</p>
                                            <p className='text-zinc-400'>Economy</p>
                                        </div>
                                    </div>

                                    <div className={styles.lastDiv}>
                                        <div className={styles.cardMainInner}>
                                            <span className={styles.lastSpan}><FaRegClock /> Total Time</span>
                                            <p className={styles.aP}>1 STOP</p>
                                            <p className={styles.aP}>6 Hrs 20 Min</p>

                                        </div>

                                        <div className={styles.morelastDiv}>
                                            <span className={styles.finalSpan}> <sub>SAR</sub> 2,270.44</span>
                                            <div className={styles.mostFinalDiv}>
                                                <span className={styles.lastInnerSpan}><IoMdInformation /></span>
                                                <span className={styles.lastInnerSpanTwo}><GrCurrency /></span>
                                                <span className={styles.lastInnerSpanTwo}><FaSuitcase /></span>

                                            </div>

                                            <div>
                                                <button className={styles.lastBtn}>BOOK NOW</button>
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
