// File for importing global things
import "../resources/sass/app.scss";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {isBot} from "../components/helper";
import {useEffect} from "react";
import PageLoader from "../components/common/loaders/PageLoader";
import axios from "axios";
import https from "https";
import { Provider } from 'react-redux';
import {useStore} from "../resources/redux/store";

axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

const App = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);

    if (process.browser) {
        const router = useRouter();
        const defaultLocale = 'en-US';
        const userLocale = localStorage.getItem('gtaRadioLocale') ;

        // для ботов показываем ту страницу котроую он запросил, без редиректа
        if(!isBot(window.navigator.userAgent)) {
            if(userLocale) {
                userLocale !== router.locale && router.push(router.pathname, router.asPath, { locale: userLocale });
            } else {
                defaultLocale !== router.locale && router.push(router.pathname, router.asPath, { locale: defaultLocale });
                localStorage.setItem('userLocaleNivona', defaultLocale);
            }
        }
    }

    return(
        <Provider store={store}>
            <PageLoader/>
            <Component {...pageProps} />
        </Provider>
    )
};

export default appWithTranslation(App);