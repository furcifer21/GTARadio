import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBlock from "./VideoBlock";

export default function DescriptionBlock({descriptionData, animationStart, animation}) {
    const [openMobileDesc, setOpenMobileDesc] = useState(false);
    const [animationClass, setAnimationClass] = useState();
    const duration = animation.animationDuration;

    useEffect(() => {
        setAnimationClass(animationStart ? animation.animationIn : animation.animationOut);
    }, [animationStart]);

    useEffect(() => {
        function handleResize() {
            (window.innerWidth > 768 && openMobileDesc) && setOpenMobileDesc(false);
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);

    return (
        <>
            <div className={`${animationClass} description-block relative flex flex-col justify-between md:justify-center md:w-2/4 xl:w-2/6 h-screen mx-auto xl:mx-0 px-6 md:px-0 pt-28 xl:pt-0`}
                 style={{animationDuration: `${duration}s`}}
            >
                <div>
                    <div className="description-block__cap relative flex md:flex-col xl:flex-row items-center justify-center xl:justify-start xl:pl-6 pb-6">
                        <h1>Радио</h1>
                        <div className="description-block__logo relative ml-2">
                            <Image src={descriptionData.logo}
                                   layout="fill"
                                   objectFit="contain"
                                   alt={`logo ${descriptionData.name}`}
                            />
                        </div>
                    </div>
                    <div className="flex md:hidden items-center justify-center">
                        <div className="description-block__mobile-btn relative cursor-pointer" onClick={() => setOpenMobileDesc(true)}>
                            <Image src={descriptionData.descIcon}
                                   layout="fill"
                                   objectFit="contain"
                                   alt={`logo ${descriptionData.name}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className={`description-block__text bg-white px-6 pt-6 pb-10 ${openMobileDesc ? 'open' : ''}`}>
                        <svg className="svg-icon md:hidden absolute top-6 right-6 cursor-pointer" onClick={() => setOpenMobileDesc(false)}>
                            <use xlinkHref="/images/sprite.svg#close-icon"></use>
                        </svg>
                        <div className="description-block__logo md:hidden relative mx-auto mb-6">
                            <Image src={descriptionData.logo}
                                   layout="fill"
                                   objectFit="contain"
                                   alt={`logo ${descriptionData.name}`}
                            />
                        </div>
                        <p className="mb-2">{descriptionData.text}</p>
                    </div>
                    <Link href={descriptionData.link}>
                        <a className="description-block__btn md:absolute inline-flex justify-center items-center w-full md:w-auto mb-28 md:mb-0">
                            Слушать
                            <svg className="svg-icon ml-2">
                                <use xlinkHref="/images/sprite.svg#headphones-icon"></use>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
            <VideoBlock/>
        </>
    )
}