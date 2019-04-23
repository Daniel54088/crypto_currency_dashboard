import React from "react";
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CryptoNewsItem from '../../pages/Home/CryptoNews/CryptoNewsItem';
import CryptoNews from '../../pages/Home/CryptoNews/CryptoNews';
/* 
    check snapshot
*/
it('render correctly CryptoNewsItem component', () => {
    const CryptoNewsItemComponent = renderer.create(<CryptoNewsItem />).toJSON();
    expect(CryptoNewsItemComponent).toMatchSnapshot();
});


/* 
    check props
*/
it('Check CryptoNewsItem component rendered correctly with empty value', () => {
    const data = {
        title: null,
        subTitle: null,
        desc: null,
        image: null
        }
        const CryptoNewsItemComponent = mount(<CryptoNewsItem {...data} />);
        expect((CryptoNewsItemComponent).prop('title')).toEqual(null);
        expect((CryptoNewsItemComponent).prop('subTitle')).toEqual(null);
        expect((CryptoNewsItemComponent).prop('desc')).toEqual(null);
        expect((CryptoNewsItemComponent).prop('image')).toEqual(null);
});

it('Check CryptoNewsItem component rendered correctly with defined value', () => {
    const data = {
        title: "Default CryptoNews Title",
        subTitle: "Default CryptoNews subTitle",
        desc: "BTC, Crypto, Trading, Tips, Cryptocurrency",
        image: require("../../../assets/news1.jpg")
        };
        const CryptoNewsItemComponent = mount(<CryptoNewsItem {...data} />);
        expect((CryptoNewsItemComponent).prop('title')).toEqual("Default CryptoNews Title");
        expect((CryptoNewsItemComponent).prop('subTitle')).toEqual("Default CryptoNews subTitle");
        expect((CryptoNewsItemComponent).prop('desc')).toEqual("BTC, Crypto, Trading, Tips, Cryptocurrency");

});

/* 
    check dataType
*/

it('Check data type', () => {
    const data = {
        title: "Default CryptoNews Title",
        subTitle: "Default CryptoNews subTitle",
        desc: "BTC, Crypto, Trading, Tips, Cryptocurrency",
        image: require("../../../assets/news1.jpg")
        }
        const CryptoNewsItemComponent = mount(<CryptoNewsItem {...data} />);

        expect(typeof((CryptoNewsItemComponent).prop('title'))).toEqual('string');
        expect(typeof((CryptoNewsItemComponent).prop('subTitle'))).toEqual('string');
        expect(typeof((CryptoNewsItemComponent).prop('desc'))).toEqual('string');
});


/* 
    check event

it('Check Tab feature ', () => {

    const CryptoNewsComponent = mount(<CryptoNews />);
    const firstTab = CryptoNewsComponent.find('NavLink').at(0);
    const secondTab = CryptoNewsComponent.find('NavLink').at(1);
    secondTab.simulate('click');
    console.log(firstTab.debug())
    console.log(secondTab.debug())

    console.log(firstTab.hasClass('active'))
    //expect(secondTab).hasClass('active').to.equal(true);
    expect(firstTab.hasClass('active')).to.equal();
});

*/