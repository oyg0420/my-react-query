import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
