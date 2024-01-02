import React, {useEffect, useState} from "react";
import ImageCarousel from "../../common/ImagesCarousel";

export default function BackgroundImageBlock({ images, colors, animationStart, animation }) {
    // toDo логика анимации на десерт
    const [animationClass, setAnimationClass] = useState();
    const duration = animation.animationDuration;

    useEffect(() => {
        setAnimationClass(animationStart ? animation.animationIn : animation.animationOut);
    }, [animationStart]);

    return (
        <div className="backgound-block absolute w-full h-screen flex justify-between">
            <div className="absolute top-0 left-0 w-full h-full">
                <ImageCarousel title={'background'}
                               images={images}
                               cover
                />
            </div>
            <div className="background-item relative hidden xl:block xl:w-2/6 h-full">
                <div className={`w-full h-full ${animationClass}`}
                     style={{backgroundColor: colors.first, animationDuration: `${duration}s`,}}
                ></div>
            </div>
            <div className="background-item relative w-full md:w-2/4 xl:w-2/6 h-full">
                <div className={`w-full h-full opacity-90 ${animationClass}`}
                     style={{backgroundColor: colors.second, animationDuration: `${duration}s`, animationDelay: `${duration}s`, background: `repeating-linear-gradient(45deg, #fff, #fff 5px, ${colors.second} 5px, ${colors.second} 140px)`, filter: 'blur(2px)'}}
                ></div>
            </div>
            <div className="background-item relative hidden md:block w-2/4 xl:w-2/6 h-full">
                <div className={`w-full h-full opacity-90 ${animationClass}`}
                     style={{backgroundColor: colors.third, animationDuration: `${duration}s`, animationDelay: `${duration*2}s`}}
                ></div>
            </div>
        </div>
    )
}