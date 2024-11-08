import Image from "next/image";
import styles from "../../styles/components/Company.module.css"

const Company = () => {
  return (
    <div className={styles.mainDiv}>
      <div className="flex lg:gap-14 lg:py-14 md:gap-10 gap-1 animate-scroll-left md:animate-none items-center">
        {/* Company Logo Containers */}
        <div className={styles.company}>
          <Image
            src={"/images/axon.png"}
            alt="Axon logo"
            width={110}
            height={90}
            className="object-contain   md:h-[180px] md:w-[280px]"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/jetstart.png"}
            alt="Jetstart logo"
            width={120}
            height={90}
            className="object-contain   md:h-[180px] md:w-[280px]"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/expedia.png"}
            alt="Expedia logo"
            width={120}
            height={90}
            className="object-contain lg:h-[200px] lg:w-[300px] md:h-[200px] md:w-[300px]"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/qantas.png"}
            alt="Qantas logo"
            width={120}
            height={90}
            className="object-contain lg:h-[200px] lg:w-[300px] md:h-[200px] md:w-[300px]"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/alitalia.png"}
            alt="Alitalia logo"
            width={110}
            height={90}
            className="object-contain   md:h-[180px] md:w-[280px]"
          />
        </div>

        {/* Repeat the logos to create the infinite scroll effect */}
        <div className={styles.company}>
          <Image
            src={"/images/axon.png"}
            alt="Axon logo"
            width={110}
            height={90}
            className="object-contain"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/jetstart.png"}
            alt="Jetstart logo"
            width={120}
            height={90}
            className="object-contain"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/expedia.png"}
            alt="Expedia logo"
            width={120}
            height={90}
            className="object-contain"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/qantas.png"}
            alt="Qantas logo"
            width={120}
            height={90}
            className="object-contain"
          />
        </div>

        <div className={styles.company}>
          <Image
            src={"/images/alitalia.png"}
            alt="Alitalia logo"
            width={110}
            height={90}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
