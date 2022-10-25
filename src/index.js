import ReactDOM from 'react-dom/client';
import { App } from './App';

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);