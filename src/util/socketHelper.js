
function whichTypeOfCoin(SOCKET_URL, nowURL){
    switch (nowURL) {
        case '/trade/btc':
            return   SOCKET_URL.SOCKET_BTC_CONTENT;
        case '/trade/eth':
            return   SOCKET_URL.SOCKET_ETH_CONTENT;
        case '/trade/ltc':
            return   SOCKET_URL.SOCKET_LTC_CONTENT;
        case '/trade/xrp':
            return   SOCKET_URL.SOCKET_XRP_CONTENT;
        default:
            return '';
    }

}


export const createSocket = (SOCKET_URL, nowURL) =>{
    const coinType = whichTypeOfCoin(SOCKET_URL,nowURL);

    const socketObj = new WebSocket(SOCKET_URL.SOCKET_END_POINT + coinType);
    
    return socketObj; 
}


export const socketInfo = () =>{
    
}
