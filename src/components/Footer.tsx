import Image from "next/image"
import { FaApple, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import styles from "../../styles/components/Footer.module.css"

 
const Footer = () => {
  return (
   <div>
     <div className={styles.mainInnerFirst}>
        <div className={styles.main2}>
            <h1 className={styles.main2H1}>Roamly.</h1>
            <p className={styles.main2Para}>Book your trip in minute, get full control for much longer.</p>
        </div>

        <div className={styles.main3}>
            {/* 1 */}
          <div>
          <h1 className={styles.listH1}>Company</h1>
            <ul className={styles.listUls}>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
            {/* 2 */}
          <div>
          <h1 className={styles.listH1}>Contact</h1>
            <ul className={styles.listUls}>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
            {/* 3 */}
          <div>
          <h1 className={styles.listH1}>More</h1>
            <ul className={styles.listUls}>
              <li>Airlinefess</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>

        <div className={styles.main4}>
            <div className={styles.main4innerOne}>
                <span className={styles.main4span1}><FaFacebookF /></span>
                <span className={styles.main4span2}><FaInstagram /></span>
                <span className={styles.main4span3}><FaTwitter /></span>
            </div>

            <h1 className={styles.main4H1}>Discover our app</h1>

            <div className={styles.main4innerTwo}>

                <div className={styles.main4innerTwoD1}>
                  <div className={styles.main4innerTwoD1DOne}>
                  <Image src={"/images/play.png"} alt="playstore" width={20} height={20}/>
                  </div>
                  <div>
                    <h1 className={styles.firstH1}>GET IT ON</h1>
                    <p className={styles.firstPara}>GOOGLE PLAY</p>
                  </div>
                </div>

                <div className={styles.main4innerTwoD1}>
                <div className={styles.main4innerTwoD1DOne}>
                <FaApple className={styles.mainIcon} />
                </div>
                <div>
                    <p className={styles.secPara}>Available on the</p>
                    <h1 className={styles.secH1}>App Store</h1>
                  </div>
                </div>
            </div>
        </div>
    </div>

    <div className={styles.lastDiv}>
         <p className={styles.lastDivPara}>All rights reserved@roamly</p>
    </div>
   </div>
  )
}

export default Footer