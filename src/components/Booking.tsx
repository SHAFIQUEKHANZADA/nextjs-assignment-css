import Image from "next/image"
import { FaLeaf, FaLocationArrow, FaRegMap } from "react-icons/fa"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoCarOutline } from "react-icons/io5"
import { MdGroupAdd } from "react-icons/md"
import { RiSecurePaymentFill } from "react-icons/ri"
import { TbFrame } from "react-icons/tb"
import styles from "../../styles/components/Booking.module.css"


const Booking = () => {
    return (
        <div className={styles.mainDiv}>

            <div className={styles.firstMain}>
                <p className={styles.firstDivPara}>Easy and Fast</p>
                <h1 className={styles.firstDivH1}>Book Your Next Trip In 3 Easy Steps</h1>

                <div className={styles.innerFirstDiv}>
                    {/* 1 */}
                    <div className={styles.cardsMain}>
                        <span className={styles.spanOne}><TbFrame /></span>
                        <div>
                            <h1 className={styles.crH1}>Choose Destination</h1>
                            <p className={styles.crPara}>Explore our curated list of top travel locations and select your favorite.</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className={styles.cardsMain}>
                        <span className={styles.spanTwo}><RiSecurePaymentFill /></span>
                        <div>
                            <h1 className={styles.crH1}>Make Payment</h1>
                            <p className={styles.crPara}>Securely complete your booking online and enjoy a hassle-free payment process.</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className={styles.cardsMain}>
                        <span className={styles.spanThree}><IoCarOutline /></span>
                        <div>
                            <h1 className={styles.crH1}>Reach Airport on Selected Date</h1>
                            <p className={styles.crPara}>Arrive at the airport on your selected date to begin your journey.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.secDiv}>
                {/* First Div */}
                <div className={styles.secInnerFirst}>
                    <div className={styles.imgDiv}>
                        <Image src={"/images/gry.jpg"} alt="grece" width={300} height={100} className={styles.myFirstImg} />
                    </div>

                    <h1 className={styles.innerSecH1}>Trip To Greece</h1>
                    <p className={styles.innserSecPara}>10-23 Oct | by Shafique Ur Rehman</p>

                    <div className={styles.innerDivSec}>
                        <p className={styles.iconPara}> <FaLeaf className={styles.icons} /></p>
                        <p className={styles.iconPara}> <FaRegMap className={styles.icons} /></p>
                        <p className={styles.iconPara}> <FaLocationArrow className={styles.icons} /></p>
                    </div>

                    <div className={styles.innerThirdDiv}>
                        <div className={styles.thirdDivInnerDiv}>
                            <span className={styles.thirdDivInnerDivSpan}><MdGroupAdd /></span> 24 people going
                        </div>
                        <p className={styles.thirdDivInnerDivPara}><IoIosHeartEmpty /></p>
                    </div>
                </div>

                {/* Second Div */}
                <div className={styles.lastDivInner}>
                    <div>
                        <Image src={"/images/dome.jpg"} alt="dome" width={38} height={38} className={styles.mySecImg} />
                    </div>
                    <div>
                        <p className={styles.lastDivPara}>Ongoing</p>
                        <h1 className={styles.lastDivH1}>Trip to rome</h1>

                        <p className={styles.lastDivParaSec}>
                            <span className={styles.lastDivParaSecSpan}>40% </span>Completed
                        </p>

                        <div className={styles.lastDivLastInner}>
                            <div className={styles.lineDiv}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking