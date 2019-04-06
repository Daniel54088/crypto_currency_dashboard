export const URL = {
    API_Domain: '/async_data',  //dev
    //apiDomain: 'https://www.stage_environment.com' //stage
    //apiDomain: 'https://www.production_environment.com' //production
    API_VERSION: "?api-version=1.0",
    API_BTC_CONTENT: "/btc.json",
    API_ETH_CONTENT: "/eth.json",
    API_LTC_CONTENT: "/ltc.json",
    API_XRP_CONTENT: "/xrp.json",
}

export const SOCKET_URL = {
    SOCKET_END_POINT:'wss://stream.binance.com:9443/ws',
    SOCKET_BTC_CONTENT: '/btcusdt@ticker',
    SOCKET_ETH_CONTENT: '/ethusdt@ticker',
    SOCKET_LTC_CONTENT: '/ltcusdt@ticker',
    SOCKET_XRP_CONTENT: '/xrpusdt@ticker'
}