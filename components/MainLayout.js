import React from "react";
import Head from "next/head";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function MainLayout({children, seo}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16.png" />
                <link rel="icon" type="image/png" sizes="64x64" href="/images/favicons/favicon-64.png" />
                <link rel="icon" type="image/png" sizes="128x128" href="/images/favicons/favicon-128.png" />
                <title>{seo.title || 'GTARadio'}</title>
                <meta name="description" content={seo.description || 'GTARadio'} />
            </Head>
            <div className="flex flex-col min-h-screen relative">
                <Header />
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}