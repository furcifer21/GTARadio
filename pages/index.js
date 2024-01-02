import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MainLayout from "../components/MainLayout";
import BackgroundImageBlock from "../components/pages/slider-page/BackgroundImageBlock";
import {useState} from "react";
import PersonImageBlock from "../components/pages/slider-page/PersonImageBlock";
import DescriptionBlock from "../components/pages/slider-page/description-block/DescriptionBlock";

const personData = [
    '/images/person/Tommy.png',
    '/images/person/PinkMan.png',
    '/images/person/Diaz.png',
    '/images/person/Mersedez.png',
    '/images/person/Rozenberg.png',
]

const backgroundData = {
    images: [
        '/images/boat-bg.png',
        '/images/city.jpg',
        '/images/copter.jpg',
    ],
    colors: {first: '#000000', second: '#000305B2', third: '#EB8AB8B2'}
};

const descriptionData = {
    name: 'vice city',
    logo: '/images/games-logo/gta-vc-logo.svg',
    descIcon: '/images/aboutGameBtn.svg',
    text: 'Саундтрек к игре Grand Theft Auto: Vice City популярен не только у поклонников игры, но и\n' +
        '                    у любителей культуры 1980-х. В игре музыка транслируется на различных радиостанциях,\n' +
        '                    звучащих в автомобилях, на мотоциклах, лодках, самолётах и вертолётах. Через несколько\n' +
        '                    месяцев после выхода Vice City саундтрек был отдельно издан на семи компакт-дисках, причём\n' +
        '                    европейское издание отличается от американского наличием некоторых эксклюзивных композиций.',
    link: '/link'
}

export default function Index() {
    const { t } = useTranslation();
    const [animationStart, setAnimationStart] = useState(true);
    // Значения соотвествуют классам анимаций
    const animationType = {
        widthIn: 'width-in',
        widthOut: 'width-out',
        heightIn: 'height-in',
        heightOut: 'height-out',
        slideRight: 'slide-right',
        slideLeft: 'slide-left'
    };
    // Доступные анимации
    const animation = {
        animationSize: {
            animationIn: animationType.widthIn,
            animationOut: animationType.heightOut,
            animationDuration: 0.4
        },
        animationSlide: {
            animationIn: animationType.slideRight,
            animationOut: animationType.slideLeft,
            animationDuration: 0.8
        }
    }

    return (
        <MainLayout seo={{title: 'GTA Main', description: ''}}>
            <div className="absolute inline p-2 bg-slate-400 text-gray-50 z-10 right-0 cursor-pointer"
                 onClick={() => setAnimationStart(!animationStart)}
            >
                toggle animation
            </div>
            <BackgroundImageBlock images={backgroundData.images}
                                  colors={backgroundData.colors}
                                  animationStart={animationStart}
                                  animation={animation.animationSize}
            />
            <PersonImageBlock images={personData}
                              animationStart={animationStart}
                              animation={animation.animationSize}
            />

            <DescriptionBlock descriptionData={descriptionData}
                              animationStart={animationStart}
                              animation={animation.animationSlide}/>
        </MainLayout>
    )
};

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale),
    },
});