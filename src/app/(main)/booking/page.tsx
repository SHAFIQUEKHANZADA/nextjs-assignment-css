"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../../../../styles/components/books.module.css"

const Booking = () => {
    const [selected, setSelected] = useState("option1");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value); // Set selected radio on click
    };

    const [showInput, setShowInput] = useState(false);

    const handleAddPromoCode = () => {
        setShowInput(true);
    };
    return (
        <div className={styles.main}>
            <div className={styles.innerMain}>
                {/* Background Image */}
                <div className={styles.innerMainOne}>
                    <Image
                        src="/images/book.jpg"
                        alt="book"
                        layout="responsive"
                        width={100}
                        height={60}
                        className={styles.innerImgOne}
                    />
                    <Image
                        src="/images/mob.jpg"
                        alt="book"
                        layout="responsive"
                        width={100}
                        height={60}
                        className={styles.innerImgTwo}
                    />
                 
                    <div className={styles.overLay}></div>

                    <div className={styles.centeredText}>Book smarter, fly further</div>
                </div>

                <div className={styles.innerMainTwo}>
                    {/* Radio Options */}
                    <div className={styles.radioDiv}>
                        <label className={styles.radioLabels}>
                            <input
                                type="radio"
                                name="radio"
                                value="option1"
                                checked={selected === "option1"}
                                onChange={handleChange}
                                className={styles.rad}
                            />
                            Return
                        </label>
                        <label className={styles.radioLabels}>
                            <input
                                type="radio"
                                name="radio"
                                value="option2"
                                checked={selected === "option2"}
                                onChange={handleChange}
                                className={styles.rad}
                            />
                            One way
                        </label>
                        <label className={styles.radioLabels}>
                            <input
                                type="radio"
                                name="radio"
                                value="option3"
                                checked={selected === "option3"}
                                onChange={handleChange}
                                className={styles.rad}
                            />
                            Multi-city
                        </label>
                    </div>

                      {/* inputs */}
                    <div className={styles.inputsMain}>

                        <div className={styles.inputTyOne}>
                            <input
                                type="text"
                                placeholder="From"
                                className={styles.inOne}
                            />
                        </div>

                        <div className={styles.inputTyOne}>
                            <input
                                type="text"
                                placeholder="To"
                                className={styles.inOne}
                            />
                        </div>

                        {/* Calendar Date Selectors */}
                        <div className={styles.inputTyTwo}>
                            <label htmlFor="departure1" className="text-sm mb-1">Departure</label>
                            <input
                                type="date"
                                id="departure1"
                                className={styles.inOne}
                            />
                        </div>

                        <div className={styles.inputTyTwo}>
                            <label htmlFor="departure2" className="text-sm mb-1">Return</label>
                            <input
                                type="date"
                                id="departure2"
                                className={styles.inOne}
                            />
                        </div>

                        {/* Passengers/Class Selector */}
                        <div className={styles.inputTyTwo}>
                            <label htmlFor="passengerClass" className="text-sm mb-1">Passengers / Class</label>
                            <select
                                id="passengerClass"
                                className={styles.inTwo}
                            >
                                <option value="1-passenger-economy">1 Passenger Economy</option>
                                <option value="2-passenger-business">2 Passengers Business</option>
                                <option value="3-passenger-first">3 Passengers First</option>
                            </select>
                        </div>
                    </div>


                    <div className={styles.btns}>
                        <div>
                            {!showInput ? (
                                <button
                                    onClick={handleAddPromoCode}
                                    className={styles.proBtn}
                                >
                                    + Add Promo Code
                                </button>
                            ) : (
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    className={styles.proIn}
                                />
                            )}
                        </div>
                        <button className={styles.searchBtn}>Search flights</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking