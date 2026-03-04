import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/reset.scss';
import './styles/main.scss';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(<App />);
