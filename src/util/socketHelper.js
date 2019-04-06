

export const createSocket = (SOCKET_URL, nowURL) =>{
    const coinType = whichTypeOfCoin(SOCKET_URL,nowURL);

    const socketObj = new WebSocket(SOCKET_URL.SOCKET_END_POINT + coinType);
    
    return socketObj; 


}

function whichTypeOfCoin(SOCKET_URL, nowURL){
    switch (nowURL) {
        case '/trade/btc':
            return   SOCKET_URL.SOCKET_BTC_CONTENT;
            break;
        case '/trade/eth':
            return   SOCKET_URL.SOCKET_ETH_CONTENT;
            break;
        case '/trade/ltc':
            return   SOCKET_URL.SOCKET_LTC_CONTENT;
            break;
        case '/trade/xrp':
            return   SOCKET_URL.SOCKET_XRP_CONTENT;
            break;            
    
        default:
            break;
    }

}