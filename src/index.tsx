import { createRoot } from 'react-dom/client';
import { App } from './app'
// Render your React component instead
const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(<App/>);