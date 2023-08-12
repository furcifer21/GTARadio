import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Custom404() {
    const { t } = useTranslation();

    return (
        <MainLayout seo={{title: t('404TextCap'), description: ''}}>
            <div className="container text-center">
                <h5 className="mt-4 pt-2 pb-3 text-uppercase">{t('404TextCap')}</h5>
                <Link href="/">
                    <a className="no-decoration">{t('404TextLink')}</a>
                </Link>
            </div>
        </MainLayout>
    )
}

export const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...await serverSideTranslations(locale),
        },
    }
};