import { createRoot } from 'react-dom/client';
import './styles/reset.scss';
import './styles/main.scss';
import { StrictMode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '@fontsource/bebas-neue/latin-400.css';
import '@fontsource/pt-sans/700.css';
import '@fontsource/pt-sans/400.css';
import { App } from './app';

gsap.registerPlugin(useGSAP);

const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
