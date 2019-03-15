
const cancelImg = require("../../assets/cancel.png");
const successImg = require("../../assets/checked.png");
const exchangeImg = require("../../assets/exchange.png");

export const notifications = [

    {
        image: successImg,
        title: 'Deposit $100 USD Successed',
        time: '4:10 PM',
        icon: 'zmdi-thumb-up text-blue',
    }, {
        image: cancelImg,
        title: 'Exchanged 200 ETH failed',
        time: '5:18 PM',
        icon: 'zmdi-comment-text text-grey',
    }, {
        image: successImg,
        title: 'Withdrawal $300 USD Successed',
        time: '5:36 PM',
        icon: 'zmdi-card-giftcard text-info',
    }, {
        image: exchangeImg,
        title: 'Exchanged 1.5558 BTC to 50.54 ETH',
        time: '5:54 PM',
        icon: 'zmdi-cake text-warning',
    }, {
        image: successImg,
        title: 'Received 1.030233 ETH from 0xa659a701548fy84f',
        time: '5:25 PM',
        icon: 'zmdi-account-box-o text-grey',
    }
];