import React, {useEffect, useState} from "react";

export default function AnimatedBlock({ children, animation, duration, delay, classes, reapetAfter }) {
    const [isFirstVisit, setIsFirstVisit] = useState(true);
    const [startAnimate, setStartAnimate] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    const [durationCount, setDurationCount] = useState(duration);

    useEffect(() => {
        if(!startAnimate && !isFirstVisit) {
            console.log('startAnimate', startAnimate, delay, 's', reapetAfter, 's')
            let timeOut1;

            if(reapetAfter > 0) {
                timeOut1 = setTimeout(() => {
                    setStartAnimate(true);
                }, ((reapetAfter - 1) * 1000));
            } else {
                setStartAnimate(true);
            }

            return () => {
                clearTimeout(timeOut1);
            };
        }
    }, [startAnimate])

    useEffect(() => {
        let timeOut;

        if(delay > 0) {
            timeOut = setTimeout(() => {
                setStartAnimate(true);
            }, (delay * 1000));
        } else {
            setStartAnimate(true);
        }

        return () => {
            clearTimeout(timeOut);
        };
    }, [])

    useEffect(() => {
        let interval;

        if(startAnimate) {
            if(durationCount === duration) {
                setAnimationClass(animation.start);
            }

            if(animation.end && durationCount === duration - (duration - 2)) {
                setAnimationClass(animation.end);
            }

            if (durationCount > 0) {
                interval = setInterval(() => {
                    setDurationCount(prevDurationCount => prevDurationCount - 1);
                }, 1000);
            } else if (durationCount === 0) {
                setStartAnimate(false);
                setAnimationClass('');
                setDurationCount(duration);
                setIsFirstVisit(false);
                clearInterval(interval);
            }
        }

        return () => {
            clearInterval(interval);
        };
    }, [durationCount, startAnimate]);

    return (
        <div className={`${classes} ${animationClass} ${!startAnimate ? 'opacity-0' : ''}`}>
            {children}
        </div>
    )
}