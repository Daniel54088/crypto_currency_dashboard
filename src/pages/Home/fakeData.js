import React from "react";

const increamentData = [
    {name: 'Page A', pv: 20},
    {name: 'Page B', pv: 120},
    {name: 'Page C', pv: 60},
    {name: 'Page D', pv: 160},
    {name: 'Page D', pv: 100},
    {name: 'Page H', pv: 226},
    {name: 'Page K', pv: 80},
  ];


  export const currencyData =[
    {
        title: '23',
        prize: '$9585',
        currencyName: 'Bitcoin Price',
        increamentData: increamentData,
        url: '/trade/btc'
    },
    {
        title: '08',
        prize: '$356',
        currencyName: 'Etherium Price',
        increamentData: increamentData,
        url: '/trade/eth'
    },
    {
        title: '18',
        prize: '$72',
        currencyName: 'Litecoin Price',
        increamentData: increamentData,
        url: '/trade/ltc'
    },
    {
        title: '11',
        prize: '$988',
        currencyName: 'Ripple Price',
        increamentData: increamentData,
        url: '/trade/xrp'
    }
  ];




  export const recentActivity = [
    {
      id: 1,
      day: 'Today',
      tasks: [
        {
          id: 1,
          name: '',
          title: [<span className="jr-link"  key={1}>0xa6579fk39xke34</span>, ' transfered 1.03 ETH in your wallet ',
            <span className="jr-link" key={10}>0xa9tj68jbig544kt</span>],
          avatar: require('../../assets/exchange.png'),
          time: '4:10 pm',
          imageList: [],
        },
        {
          id: 4,
          name: '',
          title: ['Bought 3.00 BTC in your wallet ',<span className="jr-link"  key={1}>0xa9tf84hfh3j28ds</span>,],
          avatar: require('../../assets/checked.png'),
          time: '3:35 pm',
          imageList: [],
        },
      ]
    },
    {
      id: 2,
      day: 'Yesterday',
      tasks: [
        {
          id: 5,
          name: 'Dom Harris',
          title: ['Assets Analyst ', <span className="jr-link" key={2}>Dom Harris</span>, ' has added 7 new articles you may want to know',],
          avatar: '',
          time: '11:35 pm',
          imageList: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
        },
        {
          id: 6,
          name: 'Tom Moody',
          title: ['Bought 15.00 ETH in your wallet ',<span className="jr-link"  key={1}>0xa9tf84hfh3j28ds</span>,],
          avatar: require('../../assets/checked.png'),
          time: '8:37 pm',
          imageList: [],
        },
        {
          id: 7,
          name: 'Oliver Shorter',
          title: ['Traded 200.00 LTC has failed '],
          avatar: require('../../assets/cancel.png'),
          time: '3:36 pm',
          imageList: [],
        },
        {
          id: 8,
          name: 'Mila Alba',
          title: ['Sold 1000.00 ETH from your wallet ',<span className="jr-link"  key={1}>0xa9tf84hfh3j28ds</span>,],
          avatar: require('../../assets/checked.png'),
          time: '12:53 am',
          imageList: [],
        },
        {
          id: 9,
          name: 'Bob Builder',
          title: ['Sold 130.00 ETH from your wallet ',<span className="jr-link"  key={1}>0xa9tf84hfh3j28ds</span>,],
          avatar: require('../../assets/checked.png'),
          time: '10:37 am',
          imageList: [],
        },
      ]
    }];


    const newsImg1 = require('../../assets/news1.jpg');
    const newsImg2 = require('../../assets/news2.jpg');
    const newsImg3 = require('../../assets/news3.jpg');


    export const allNews = [
        {
          id: 1,
          image: newsImg1 ,
          title: '10 things you must know before trading in cryptocurrency',
          subTitle: 'cassa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 2,
          image: newsImg2,
          title: 'Getting started with cryptocurrency - what is blockchain',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 3,
          image: newsImg3,
          title: 'Is cryptocurrency investment a trap or opportunity?',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 4,
        }
      ];

      export const bitCoinNews = [
        {
          id: 3,
          image: newsImg3,
          title: 'Is cryptocurrency investment a trap or opportunity?',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 1,
          image: newsImg1,
          title: '10 things you must know before trading in cryptocurrency',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 2,
          image: newsImg2,
          title: 'Getting started with cryptocurrency - what is blockchain',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
      
      ];
      export const rippleNews = [
      
        {
          id: 2,
          image: newsImg2,
          title: 'Getting started with cryptocurrency - what is blockchain',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 1,
          image: newsImg1,
          title: 'Is cryptocurrency investment a trap or opportunity?',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 1,
          image: newsImg1,
          title: '10 things you must know before trading in cryptocurrency',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
      ];

      export const lightCoinNews = [
        {
          id: 1,
          image: newsImg1,
          title: '10 things you must know before trading in cryptocurrency',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 2,
          image: newsImg2,
          title: 'Getting started with cryptocurrency - what is blockchain',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        },
        {
          id: 3,
          image: newsImg3,
          title: 'Is cryptocurrency investment a trap or opportunity?',
          subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' +
          'felis pharetra in vestibulum sed.',
          desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency',
        }
      ];
      