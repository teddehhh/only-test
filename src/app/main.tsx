import { createRoot } from 'react-dom/client';
import './styles/reset.scss';
import './styles/main.scss';
import { StrictMode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '@fontsource/space-mono/400.css';
import '@fontsource/press-start-2p/400.css';
import { App } from './app';

gsap.registerPlugin(useGSAP);

const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
