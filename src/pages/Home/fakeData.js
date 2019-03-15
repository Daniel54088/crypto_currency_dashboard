import React from "react";

const increamentData = [
    {name: 'Page A', pv: 200},
    {name: 'Page B', pv: 1200},
    {name: 'Page C', pv: 600},
    {name: 'Page D', pv: 1600},
    {name: 'Page D', pv: 1000},
    {name: 'Page H', pv: 2260},
    {name: 'Page K', pv: 800},
  ];


  export const currencyData =[
    {
        title: '23',
        prize: '$9585',
        currencyName: 'Bitcoin Price',
        increamentData: increamentData,
    },
    {
        title: '08',
        prize: '$356',
        currencyName: 'Etherium Price',
        increamentData: increamentData,
    },
    {
        title: '18',
        prize: '$72',
        currencyName: 'Ripple Price',
        increamentData: increamentData,
    },
    {
        title: '11',
        prize: '$988',
        currencyName: 'Litecoin Price',
        increamentData: increamentData,
    }
  ];




  export const recentActivity = [
    {
      id: 1,
      day: 'Today',
      tasks: [
        {
          id: 1,
          name: 'Mila Alba',
          title: [<span className="jr-link"  key={1}>Mila Alba</span>, ' left a 5 star review on ',
            <span className="jr-link" key={10}>Albama’s House</span>],
          avatar:'https://via.placeholder.com/150x150',
          imageList: [],
        },
        {
          id: 4,
          name: 'Norman Dolphi',
          title: ['Norman Dolphi is looking for a house in New Jersy, USA'],
          avatar: '',
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
          name: 'Kily Johns',
          title: ['Agent ', <span className="jr-link" key={2}>Kily Johns</span>, ' has added 7 new photos to the property ',
            <span className="jr-link" key={3}>Albama’s House</span>],
          avatar: '',
          imageList: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
        },
        {
          id: 6,
          name: 'Tom Moody',
          title: ['Welcome to a new agent ', <span className="jr-link" key={4}>Tom Moody in the Company</span>],
          avatar: 'https://via.placeholder.com/150x150',
          imageList: [],
        },
        {
          id: 7,
          name: 'Oliver Shorter',
          title: [<span className="jr-link"  key={5}>Oliver Shorter</span>, ' is looking for an office space in ',
            <span className="jr-link" key={10}>Colorado, USA</span>],
          avatar: 'https://via.placeholder.com/150x150',
          imageList: [],
        },
        {
          id: 8,
          name: 'Mila Alba',
          title: [<span className="jr-link" key={6}>Mila Alba</span>, ' left a 5 star review on ',
            <span className="jr-link" key={9}>Albama’s House</span>],
          avatar: 'https://via.placeholder.com/150x150',
          imageList: [],
        },
        {
          id: 9,
          name: 'Bob Builder',
          title: ['Callback request from ',<span className="jr-link"  key={7}>Bob Builder</span>, ' for the property ',
            <span className="jr-link" key={8}>Dimitri House</span>],
          avatar: 'https://via.placeholder.com/150x150',
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
      