import React from 'react';
import ReactDOM from 'react-dom/client';
import {HeaderComponent,FooterComponent , MainContent} from './MyApp';


function Page() {
    return (
      <center>
        <HeaderComponent />
        <MainContent />
        <FooterComponent />
      </center>
    );
  }

  const root2 = ReactDOM.createRoot(document.getElementById('root2'));
  root2.render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
  