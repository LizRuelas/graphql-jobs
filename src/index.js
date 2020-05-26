import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { client } from './config/apollo'; 


ReactDOM.render(
  <React.StrictMode>
    	<ApolloProvider client={client}> 
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


