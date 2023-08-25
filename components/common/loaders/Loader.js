import React from "react";
import Image from "next/image";

export default function Loader({size, maskColorInherit, loaderWhite}) {
    // if we need white loader - add loaderWhite prop
    // if we need other BGColor of mask - add background-color to parent of loader, and add maskColorInherit prop to loader
    return (
        <div className={`loader-mask flex items-center justify-center h-full ${maskColorInherit ? 'color-inherit' : ''}`}>
            <Image src={`/images/loader-${loaderWhite ? 'white' : 'red'}.svg`}
                   width={size || 40}
                   height={size || 40}
                   alt="loader"
            />
        </div>
    )
};