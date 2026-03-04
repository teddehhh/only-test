import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/reset.scss';
import './styles/main.scss';
import { StrictMode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
