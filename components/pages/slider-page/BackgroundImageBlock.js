import React, {useEffect, useState} from "react";
import Image from "next/image";

export default function BackgroundImageBlock({ images, colors, animationStart, animation }) {
    const [animationClass, setAnimationClass] = useState();
    const duration = animation.animationDuration;

    useEffect(() => {
        setAnimationClass(animationStart ? animation.animationIn : animation.animationOut);
    }, [animationStart]);

    return (
        <div className="backgound-block relative h-screen flex justify-between">
            <div className="absolute w-full h-full">
                {/*при смене animationStart скрывать/показывать изображение с помощью opacity
                перед/после отработки анимации блоков*/}
                <Image src={images}
                       layout="fill"
                       objectFit="cover"
                       alt={`background`}
                />
            </div>
            <div className="background-item relative hidden xl:block xl:w-2/6 h-full">
                <div className={`w-full h-full ${animationClass}`}
                     style={{backgroundColor: colors.first, animationDuration: `${duration}s`,}}
                ></div>
            </div>
            <div className="background-item relative w-full md:w-2/4 xl:w-2/6 h-full">
                <div className={`w-full h-full opacity-70 ${animationClass}`}
                     style={{backgroundColor: colors.second, animationDuration: `${duration}s`, animationDelay: `${duration}s`}}
                ></div>
            </div>
            <div className="background-item relative hidden md:block w-2/4 xl:w-2/6 h-full">
                <div className={`w-full h-full opacity-70 ${animationClass}`}
                     style={{backgroundColor: colors.third, animationDuration: `${duration}s`, animationDelay: `${duration*2}s`}}
                ></div>
            </div>
        </div>
    )
}