import React, {useEffect, useState} from "react";
import {Router} from "next/router";
import Image from "next/image";
import Loader from "./Loader";

export default function PageLoader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Router.events.on('routeChangeStart', loaderOn);
        Router.events.on('routeChangeComplete', loaderOff);
        Router.events.on('routeChangeError', loaderOff);

        return () => {
            Router.events.off('routeChangeStart', () => loaderOn);
            Router.events.off('routeChangeComplete', loaderOff);
            Router.events.off('routeChangeError', loaderOff);
        };
    }, [Router.events]);

    function loaderOn() {
        setLoading(true);
        window.scrollTo(0, 0);
    }

    function loaderOff() {
        setLoading(false);
    }

    return (
        <>
            {loading &&
                <div className="page-loader-mask fixed w-full h-full z-20">
                    <Loader size={80}/>
                </div>
            }
        </>
    )
};