import Image from "next/image"
import styles from "../../styles/components/Category.module.css"


const Category = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.innerOneDiv}>
                <div className={styles.inDivOne}>
                    <Image src={"/images/stars.png"} alt="stars" width={100} height={100} />
                </div>
            </div>

            <div className={styles.innerTwoDiv}>
                <p className={styles.innerPara}>CATEGORY</p>
                <h1 className={styles.innerH1}>We Offer Best Services</h1>
            </div>

            {/* card */}
            <div className={styles.mainCard}>

                {/* Card 1 */}
                <div className={`${styles.cards} group`}>

                    <Image src={"/images/satellite-dish.png"} alt="Satellite Dish" width={50} height={50} />
                    <h1 className={styles.cardH1}>Calculated Weather</h1>
                    <p className={styles.cardPara}>
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>


                    <div className="absolute bottom-[-22px] left-[-22px] w-[80px] h-[70px] bg-[#DD6A52] rounded-tl-[18px] rounded-tr-[10px] rounded-br-[6px] rounded-bl-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>


                {/* Card 2 */}
                <div className={`${styles.cards} group`}>
                    <Image src={"/images/flight.png"} alt="Flight" width={50} height={50} />
                    <h1 className={styles.cardH1}>Best Flights</h1>
                    <p className={styles.cardPara}>Engrossed listening. Park gate sell they west hard for the.</p>

                    <div className="absolute bottom-[-22px] left-[-22px] w-[80px] h-[70px] bg-[#ada5c9] rounded-tl-[18px] rounded-tr-[10px] rounded-br-[6px] rounded-bl-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>

                {/* Card 3 */}
                <div className={`${styles.cards} group`}>
                    <Image src={"/images/sound.png"} alt="Local Events" width={50} height={50} />
                    <h1 className={styles.cardH1}>Local Events</h1>
                    <p className={styles.cardPara}>Barton vanity itself do in it. Preferred to men it engrossed listening.</p>

                    <div className="absolute bottom-[-22px] right-[-22px] w-[80px] h-[70px] bg-[#ffa052] rounded-tr-[18px] rounded-tl-[10px] rounded-bl-[6px] rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>

                {/* Card 4 */}
                <div className={`${styles.cards} group`}>
                    <Image src={"/images/cogwheel.png"} alt="Customization" width={50} height={50} />
                    <h1 className={styles.cardH1}>Customization</h1>
                    <p className={styles.cardPara}>We deliver outsourced aviation services for military customers.</p>

                    <div className="absolute bottom-[-22px] right-[-22px] w-[80px] h-[70px] bg-[#029BC5] rounded-tr-[18px] rounded-tl-[10px] rounded-bl-[6px] rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>
            </div>


        </div>
    )
}

export default Category
