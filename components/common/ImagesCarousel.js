import {useEffect, useState} from "react";
import Image from "next/image";

export default function ImageCarousel({ title, images, cover, slideDuration = 5000 }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, slideDuration);

        return () => clearInterval(interval);
    }, [currentImageIndex, images, slideDuration]);

    return (
        <div className="carousel">
            {images.map((image, index) => (
                <div className={`slide ${index === currentImageIndex % images.length ? 'active' : ''}`}>
                    <Image key={index}
                           src={image}
                           layout="fill"
                           objectFit={cover ? 'cover' : 'contain'}
                           alt={`image ${title} ${index}`}
                    />
                </div>
            ))}
        </div>
    );
};