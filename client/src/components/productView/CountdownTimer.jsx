import React, { useState, useEffect } from "react";
import styles from './ProductView.module.scss'

// ! replace
const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                "дн.": Math.floor(difference / (1000 * 60 * 60 * 24)),
                "год.": Math.floor((difference / (1000 * 60 * 60)) % 24),
                "хв.": Math.floor((difference / 1000 / 60) % 60),
                "сек.": Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={index}>
        {timeLeft[interval]} {interval}{" "}
      </span>
        );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span className={styles.endTime}>00:00:00</span>}
        </div>
    );
};

export default CountdownTimer;
