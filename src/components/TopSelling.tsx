import Image from "next/image"
import { FaLocationArrow } from "react-icons/fa"
import styles from "../../styles/components/TopSelling.module.css"

const TopSelling = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.firstMainDiv}>
                <p className={styles.firstPara}>Top Selling</p>
                <h1 className={styles.firstH1}>Top Destinations</h1>
            </div>

            <div className={styles.secondMainPara}>
                {/* card 1 */}
                <div className={`group ${styles.cards}`}>
                    <div className={styles.cardDivOne}>
                        <Image src={"/images/italy.jpg"} alt="italy" width={260} height={150} className={styles.cardImg} />
                    </div>
                    <div className={styles.cardDivTwo}>
                        <p className={styles.cardParaOne}>Rome, Italy</p>
                        <p className={styles.cardParaOne}>$542k</p>
                    </div>
                    <div className={styles.cardDivThree}>
                        <FaLocationArrow className="group-hover:text-blue-500 transition-colors duration-300" />
                        <p className={styles.cardParaOne}> 10 Days Trip</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className={`group ${styles.cards}`}>
                    <div className={styles.cardDivOne}>
                        <Image src={"/images/london.webp"} alt="london" width={260} height={150} className={styles.cardImg} />
                    </div>
                    <div className={styles.cardDivTwo}>
                        <p className={styles.cardParaOne}>London, UK</p>
                        <p className={styles.cardParaOne}>$4.2k</p>
                    </div>
                    <div className={styles.cardDivThree}>
                        <FaLocationArrow className="group-hover:text-blue-500 transition-colors duration-300" />
                        <p className={styles.cardParaOne}> 12 Days Trip</p>
                    </div>
                </div>


                {/* card 3 */}
                <div className={`group ${styles.cards}`}>
                    <div className={styles.cardDivOne}>
                        <Image src={"/images/europe.jpg"} alt="europe" width={260} height={150} className={styles.cardImg} />
                    </div>
                    <div className={styles.cardDivTwo}>
                        <p className={styles.cardParaOne}>Full Europe</p>
                        <p className={styles.cardParaOne}>$15k</p>
                    </div>
                    <div className={styles.cardDivThree}>
                        <FaLocationArrow className="group-hover:text-blue-500 transition-colors duration-300" />
                        <p className={styles.cardParaOne}> 28 Days Trip</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSelling