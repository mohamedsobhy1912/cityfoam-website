import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LangProvider } from './lib/i18n.jsx';
import { SmoothScroll } from './lib/SmoothScroll.jsx';
import { InquiryProvider } from './lib/inquiry.jsx';
import './styles/base.css';
import './styles/sections.css';
import './styles/scenes.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <SmoothScroll>
        <InquiryProvider>
          <App />
        </InquiryProvider>
      </SmoothScroll>
    </LangProvider>
  </StrictMode>
);
