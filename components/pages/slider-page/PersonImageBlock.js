import React, {useEffect, useState} from "react";
import ImageCarousel from "../../common/ImagesCarousel";

export default function PersonImageBlock({ images, animationStart, animation }) {
    // toDo логика анимации на десерт
    const [animationClass, setAnimationClass] = useState();

    useEffect(() => {
        setAnimationClass(animationStart ? animation.animationIn : animation.animationOut);
    }, [animationStart]);

    return (
        <div className={`person-block fixed ${animationClass}`}>
            <div className="absolute top-0 left-0 w-full h-full">
                <ImageCarousel title={'person'} images={images}/>
            </div>
        </div>
    )
}