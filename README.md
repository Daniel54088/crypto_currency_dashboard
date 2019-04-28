<img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/logo_blue.png" />
<img src="https://travis-ci.org/Daniel54088/crypto_currency_dashboard.svg?branch=master" />
<h3>This is the ready to go dashboard template of cryptocurrency exchange. If API is connected, it can be the potential production project.</h3>

<img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/screen_shot.png" width="250"/><img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/screen_shot2.png" width="250"/><img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/screen_shot3.png" width="250"/>

----

<h2>Features</h2>

  - Member login with **Redux**
  - Using **React router v4** implement **SPA**(single page application)
  - Getting real-time crypyocurrency ptice by **WebSocket**
  - **Webpack 4** bundles the code
  - Testing React Components by **Jest**
  - Using **Eslint** to keep the quality of code stably
  - **RWD** 


<h2>Installation</h2>

  Install the package and start the local server with:
  
  ```javascript
  yarn
  
  yarn start
  ```
  It will open the app on the broswer automatically.
  
  
 <h2>Login & Auth</h2>
  
 **Both account & password are "dan"**. I separated routes with private and public.
 
 The correct input will update the Redux store auth to access into the private routes.
 
 <img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/screen_shot3.png" width="450"/>
 
  
 <h2>Real Time Crypto Currencies Price</h2> 
 
 The open socket API is from https://github.com/binance-exchange/binance-official-api-docs/blob/master/web-socket-streams.md
 
 Though the WebSocket, broswer fetchs the data immediately and render the new results on view.
 
 <img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/screen_shot2.png" width="450"/>
 
 
 <h2>Test & CI</h2> 
  
  The testing is using **Jest** and **Enzyme** to accomplish. The following points are my testing targets:
  
  <h3>React router</h3>
  
  Purpose : Check the routes redirect to the correct page in different conditions.
  
  EX: Valid path without auth should not redirect to 404, go to login page or 
      Accessing private page will be blocked without auth
  
 <h3>React components</h3>
  
  Purpose : Check every components are renderd correctly. 
  
  There are 5 points that I think should be tested.
  
  1. Test props:<br/>
     Feeding the default & custom values as the props to make sure the components rendered the correct view.<br/><br/>
  2. Test dataTypes: <br/>
     Ensure the datatype is correct.<br/> <br/>
  3. Test events: <br/>
     Make sure the events like modal or button click are functional. <br/><br/>
  4. Test conditions: <br/>
     Input the different values to make the result is what we want. <br/><br/>
  5. Test states: <br/>
    Test current states and the states are correct after setState function called.<br/><br/>
    
  <img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/test.png" width="450"/>  
    
  The test code is not finished yet.  
    
  <h3>Travis CI</h3>   

  Test and Deploy with Confidence. Run the test code and build the app automatically everytime I push the code.
  
  <img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/trevis.png" width="450"/>
 
