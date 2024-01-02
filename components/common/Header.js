import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Header() {
    const { t } = useTranslation();
    const router = useRouter();
    const [locale, setLocale] = useState(router.locale);

    function changeLocale(locale) {
        if(router.locale === locale) return;

        router.push(router.pathname, router.asPath, { locale });
        localStorage && localStorage.setItem('gtaRadioLocale', locale);
        setLocale(locale);
    }

    return (
        <header className="fixed w-full">
            <div className="header-buttons flex justify-center xl:justify-start">
                <button type="button"
                        id="home-btn"
                        className={`btn-icon border-0 position-relative d-md-none ${router.pathname === '/' ? 'active' : ''}`}
                >
                    {router.pathname !== '/' &&
                        <Link href="/"><a className="fake-link-block"></a></Link>
                    }
                    <svg className="svg-icon">
                        <use xlinkHref="/images/sprite.svg#home-icon"></use>
                    </svg>
                </button>
                <button type="button"
                        id="burger-btn"
                        className={`btn-icon border-0 position-relative d-xl-none `}

                >
                    <svg className="svg-icon">
                        <use xlinkHref="/images/sprite.svg#burger-icon"></use>
                    </svg>
                </button>
            </div>
        </header>
    )
}