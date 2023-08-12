import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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
        <header>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <span>header {t('exampleWord')}</span>
                    <div className="d-flex">
                        <div className={`dropdown-item pointer py-1 px-4 ${locale === 'ru' ? 'text-danger' : ''}`} onClick={() => changeLocale('ru')}>Русский</div>
                        <div className={`dropdown-item pointer py-1 px-4 ${locale === 'en' ? 'text-danger' : ''}`} onClick={() => changeLocale('en')}>English</div>
                    </div>
                </div>
            </div>
        </header>
    )
}