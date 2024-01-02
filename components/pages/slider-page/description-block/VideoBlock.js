import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function VideoBlock({videoData}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="video-block-btn hidden md:flex md:fixed top-0 right-0 flex-col items-center justify-center md:w-2/4 xl:w-2/6">
                <div className="video-block-btn__icon flex items-center justify-center cursor-pointer" onClick={() => setOpenModal(true)}>
                    <svg className="svg-icon ml-2">
                        <use xlinkHref="/images/sprite.svg#play-icon"></use>
                    </svg>
                </div>
                <span className="pt-2">PLAY INTRO</span>
            </div>
            <div className={`video-block-modal fixed top-0 left-0 w-full h-full ${openModal ? 'open' : ''}`}>
                <svg className="svg-icon absolute top-6 right-6 cursor-pointer" onClick={() => setOpenModal(false)}>
                    <use xlinkHref="/images/sprite.svg#close-icon"></use>
                </svg>
                <div className="youtube-video w-full h-full pt-10">
                    <iframe
                        src={`https://www.youtube.com/embed/Ag6H1e1rXJ0?si=zE_Fnn63pcDdAa8Q`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </>
    )
}