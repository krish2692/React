import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {HeaderComponent,FooterComponent , MainContent} from './App';

function Page() {
    return (
      <div>
        <HeaderComponent />
        <MainContent />
        <FooterComponent />
      </div>
    );
  }

  const root2 = ReactDOM.createRoot(document.getElementById('root'));
  root2.render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
reportWebVitals();
