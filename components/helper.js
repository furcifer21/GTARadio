export function isBot(userAgentString) {
    let isBot = false;
    const bots = [
        'APIs-Google', 'Mediapartners-Google', 'AdsBot-Google-Mobile', 'AdsBot-Google-Mobile', 'AdsBot-Google',
        'Googlebot', 'Mediapartners-Google', 'YandexBot', 'YandexAccessibilityBot', 'YandexMobileBot',
        'YandexDirectDyn', 'YandexScreenshotBot', 'YandexImages', 'YandexVideo', 'YandexVideoParser',
        'YandexMedia', 'YandexBlogs', 'YandexFavicons', 'YandexWebmaster', 'YandexPagechecker',
        'YandexImageResizer', 'YandexAdNet', 'YandexDirect', 'YaDirectFetcher', 'YandexCalendar',
        'YandexSitelinks', 'YandexMetrika', 'YandexNews', 'YandexNewslinks', 'YandexCatalog', 'YandexAntivirus',
        'YandexMarket', 'YandexVertis', 'YandexForDomain', 'YandexSpravBot', 'YandexSearchShop',
        'YandexMedianaBot', 'YandexOntoDB', 'YandexOntoDBAPI', 'Googlebot', 'Googlebot-Image',
        'Mediapartners-Google', 'AdsBot-Google', 'Mail.RU_Bot', 'bingbot', 'Accoona', 'ia_archiver',
        'Ask Jeeves', 'OmniExplorer_Bot', 'W3C_Validator', 'WebAlta', 'YahooFeedSeeker', 'Yahoo!', 'Ezooms',
        'Tourlentabot', 'MJ12bot', 'AhrefsBot', 'SearchBot', 'SiteStatus', 'Nigma.ru', 'Baiduspider',
        'Statsbot', 'SISTRIX', 'AcoonBot', 'findlinks', 'proximic', 'OpenindexSpider','statdom.ru', 'Exabot',
        'Spider', 'SeznamBot', 'oBot', 'C-T bot', 'Updownerbot', 'Snoopy', 'heritrix', 'Yeti', 'DomainVader',
        'DCPbot', 'PaperLiBot',
    ];

    bots.map(bot => {
        if(bot.includes(userAgentString)) isBot = true;
    });

    return isBot;
}