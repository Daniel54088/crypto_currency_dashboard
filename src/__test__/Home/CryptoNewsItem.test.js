import React from "react";
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CryptoNewsItem from '../../pages/Home/CryptoNews/CryptoNewsItem';


it('render correctly CryptoNewsItem component', () => {
    const CryptoNewsItemComponent = renderer.create(<CryptoNewsItem />).toJSON();
    expect(CryptoNewsItemComponent).toMatchSnapshot();
});