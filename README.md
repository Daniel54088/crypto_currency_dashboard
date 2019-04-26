<img src="https://github.com/Daniel54088/crypto_currency_dashboard/blob/master/src/assets/logo_blue.png" />
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
 
 
