import Image from "next/image"
import { AiOutlineMail } from "react-icons/ai"
import styles from "../../styles/components/Contact.module.css"

const Contact = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.mainFirstDiv}>
                <h1 className={styles.h1w}>Subscribe to get information, latest news and other interesting offers about Roamly</h1>

                <div className={styles.mainFirstDivInner}>
                    <div className={styles.inputDiv}>
                        <AiOutlineMail className={styles.emailIcon} />
                        <input
                            type="email"
                            placeholder="Your email"
                            className={styles.mail}
                        />
                    </div>
                    <button className={styles.btn}>Subscribe</button>


                    <div className={styles.lastDiv}>
                        <Image
                            src={"/images/arrow.png"}
                            alt="send"
                            width={50}
                            height={50}
                            className={styles.lastImg}
                        />
                    </div>

                </div>
            </div>

            <div className={styles.mainSecDiv}>
                <div className={styles.mainLines}>
                    <p className={styles.pOne}>+ + <span className="text-[#FF7A5D]">+ </span></p>
                    <p className={styles.pOne}>+ + +</p>
                    <p className={styles.pOne}> <span className="text-[#9D8BEF]">+ </span>+ +</p>
                    <p className={styles.pOne}>+ + + +</p>
                    <p className={styles.pTwo}>+ + + + +</p>
                </div>
            </div>
        </div>
    )
}

export default Contact