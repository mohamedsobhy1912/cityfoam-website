import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LangProvider } from './lib/i18n.jsx';
import { InquiryProvider } from './lib/inquiry.jsx';
import './styles/site.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <InquiryProvider>
        <App />
      </InquiryProvider>
    </LangProvider>
  </StrictMode>
);
