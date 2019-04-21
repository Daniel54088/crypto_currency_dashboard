import React from 'react';
import  { mount }  from 'enzyme';
import { MemoryRouter } from 'react-router';
import { createStore } from 'redux'
import { Provider } from "react-redux";
import ReducerApp from '../../reducers';
import Routes from '../../route';
import PrivateRoute from '../../component/PrivateRoute'

const store = createStore(ReducerApp);

// test pages 
import App from '../../app'
import Login from '../../pages/Login/Login'
import NotFound from '../../pages/ErrorPage/NotFound'
import Home from '../../pages/Home/Home'

/*
 @@ MemoryRouter is useful in tests and non-browser environments 
 @@ MemoryRouter have initialEntries prop to custom the initial route path
 @@ mount() will full render entire components tree (parents and child)
*/

describe('react router direct to correct path testing', () => {

    test('invalid path should redirect to 404', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/dqwd' ]}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </MemoryRouter>
      );
      // check will render login page
      expect(wrapper.find(Login)).toHaveLength(0);
      // check will NOT render 404 page
      expect(wrapper.find(NotFound)).toHaveLength(1);
    });

    test('valid path without auth should not redirect to 404, go to login page', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
      );
      expect(wrapper.find(Login)).toHaveLength(1);
      expect(wrapper.find(NotFound)).toHaveLength(0);
    });

    test('Accessing private page will be blocked without auth', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <PrivateRoute authed={false} exact path="/" component={Home} />
            </MemoryRouter>            
        );
        expect(wrapper.find(Home)).toHaveLength(0);
      });

      test('Accessing private page will success with auth', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <PrivateRoute authed={true} exact path="/" component={Home} />
            </MemoryRouter>            
        );
        expect(wrapper.find(Home)).toHaveLength(1);
      });

});





  

