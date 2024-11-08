"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "../../styles/components/Testimonials.module.css"

const testimonials = [
    {
        id: 1,
        name: "Shafique Ur Rehman",
        ocupation: "Nextjs Developer",
        text: "Across the endless field, where twilight falls gently, the horizon blurs the line between what was and what will be. Each moment lingers, suspended like a forgotten note, in the symphony of a world unhurried by the passing hours.",
        image: "/images/shafiq.jpeg",
    },
    {
        id: 2,
        name: "Zayan Ahmed",
        ocupation: "Frontend Developer",
        text: "Beneath the silent moonlit river, the whispers of forgotten tales flow, drifting gently as if untouched by time. Shadows linger on the edge of dreams, where the past meets tomorrow in quiet contemplation.",
        image: "/images/zayan.jpeg",
    },
    {
        id: 3,
        name: "Asharib Ali",
        ocupation: "Cloud Native Applied GenAI Engineer",
        text: "Through the winding forest path, where sunlight dapples softly, every step hums with the secrets of those who once wandered. Each tree bears witness to the silent echoes of stories untold, waiting to be discovered.",
        image: "/images/asharib.jpeg",
    },
    {
        id: 4,
        name: "Daniyal Nagori",
        ocupation: "CEO of Cryptofleet, PIAIC, and GIAIC",
        text: "Upon the misty hillside, where dawn stretches its golden fingers, the land speaks of distant memories. The winds carry whispers of journeys long past, as the earth breathes in the quiet rhythm of time.",
        image: "/images/daniyal.jpeg",
    },
];

const Headings = [
    {
        heading: "What People Say About Us."
    },
    {
        heading: "Hear What Our Clients Have to Say."
    },
    {
        heading: "Voices of Our Satisfied Travelers."
    },
];


const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const [current, setCurrent] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % Headings.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrent(index);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className={styles.mainDiv}>
            <div>
                <p className={styles.firstPara}>Testimonials</p>
                <div className={styles.tOneDiv}>
                    <div className={styles.tOneDivInner}>
                        <div
                            className={styles.tOneDivInnerInner}
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {Headings.map((heading, index) => (
                                <div
                                    key={index}
                                    className="min-w-full"
                                >
                                    {/* Heading */}
                                    <h1 className={styles.tOneDivInnerInnerHeading}>
                                        {heading.heading}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.tOneDivInnerSec}>
                        {Headings.map((_, indexx) => (
                            <span
                                key={indexx}
                                className={`h-[10px] w-[10px] rounded-full mx-1 cursor-pointer ${current === indexx ? "bg-gray-800" : "bg-gray-300"
                                    }`}
                                onClick={() => handleDotClick(indexx)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.tTwoDiv}>
                    {/* Cards Container */}
                    <div className={styles.cardContainer}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute inset-0 bg-white shadow-lg sm:p-6 sm:pr-10 p-4 pr-5 rounded-lg transition-transform duration-400 
                          ${index === currentIndex ? "translate-x-0 translate-y-0 z-10" : "translate-x-6 translate-y-6 z-0"}`}
                                style={{
                                    transform: `translate(${index === currentIndex ? 0 : isSmallScreen ? 27 : 40
                                        }px, ${index === currentIndex ? 0 : isSmallScreen ? 44 : 60}px)`,
                                }}
                            >
                                <div className={styles.cardImgDiv}>
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={68}
                                        height={68}
                                        className={styles.cardImg}
                                    />
                                </div>

                                {/* Testimonial Content */}
                                <div className={styles.tContent}>
                                    {/* Testimonial Text */}
                                    <p className={styles.tText}>{testimonial.text}</p>

                                    <div className={styles.tContentDiv}>
                                        <h2 className={styles.tContentDivH1}>{testimonial.name}</h2>
                                        <p className={styles.tContentDivPara}>{testimonial.ocupation}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className={styles.tContentDivLast}>
                        {/* Arrow Up */}
                        <button
                            className={styles.iconBtnUp}
                            onClick={handlePrevious}
                        >
                            <FaChevronUp className="text-md" />
                        </button>

                        {/* Arrow Down */}
                        <button
                            className={styles.iconBtnDown}
                            onClick={handleNext}
                        >
                            <FaChevronDown className="text-md" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials