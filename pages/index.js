import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MainLayout from "../components/MainLayout";
import BackgroundImageBlock from "../components/pages/slider-page/BackgroundImageBlock";
import {useState} from "react";

export default function Index() {
    const { t } = useTranslation();
    const [animationStart, setAnimationStart] = useState(true);
    const backgroundData = {
        images: '/images/boat-bg.png',
        colors: {first: '#000000', second: '#000305B2', third: '#EB8AB8B2'}
    };
    // Значения соотвествуют классам анимаций
    const animationType = {
        withIn: 'width-in',
        heightIn: 'height-in',
        heightOut: 'height-out'
    };
    // Доступные анимации
    const animation = {
        animationSize: {
            animationIn: animationType.withIn,
            animationOut: animationType.heightOut,
            animationDuration: 0.4
        }
    }

    return (
        <MainLayout seo={{title: 'GTA Main', description: ''}}>
            <div className="absolute inline p-2 bg-slate-400 text-gray-50 z-10 right-0 cursor-pointer" onClick={() => {
                setAnimationStart(!animationStart)
            }}>
                toggle animation
            </div>
            <BackgroundImageBlock images={backgroundData.images}
                                  colors={backgroundData.colors}
                                  animationStart={animationStart}
                                  animation={animation.animationSize}
            />
        </MainLayout>
    )
};

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale),
    },
});