import Image from 'next/image'
import React from 'react'
import { IoIosPlay } from 'react-icons/io'
import styles from "../../styles/components/Hero.module.css"
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.mainContainer}>
    {/* left */}
    <div className={styles.leftDiv}>
        <h3 className={styles.h3Div}>BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1 className={styles.h1Div}>
            Travel,
            <span className={styles.spanDiv}> enjoy
                <div className={styles.insideDiv}>
                    <Image src={"/images/line.png"} alt="line" width={500} height={500} className="z-0"/>
                </div>

            </span> and live a new and full life
        </h1>

        <p className={styles.paraDiv}>Built Wicket Longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

        <div className={styles.btnDivOne}>
           <Link href={"/flights"}> <button className={styles.btnOne}>Find out more</button></Link>

            <div className={`${styles.divInnerTwo} group`}>
                <button className={styles.btnTwo}><IoIosPlay /></button>
                <span className={styles.spanInner}>Play Demo</span>
            </div>
        </div>
    </div>

    {/* right */}
    <div className={styles.rightDiv}>
        {/* Main Image */}
        <Image src={"/images/trvel.png"} alt="travel" width={580} height={0} className={styles.rightImgMain} />

        {/* Left Image */}
        <Image src={"/images/plan.png"} alt="plan-left" width={160} height={0} className={`${styles.leftImg}`} />

        {/* Right Image */}
        <Image src={"/images/plan.png"} alt="plan-right" width={150} height={0} className={styles.rightImg} />
    </div>

</div>
  )
}

export default Hero