import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MainLayout from "../components/MainLayout";

export default function Index() {
    const { t } = useTranslation();

    return (
        <MainLayout seo={{title: 'GTA Main', description: ''}}>
            <div className="container">content</div>
        </MainLayout>
    )
};

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale),
    },
});