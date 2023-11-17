import { render } from 'solid-js/web'; 
import App from './App';
import { registerWebComponents } from '../register';
import './index.css';

registerWebComponents();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    render(() => <App providers={[]} />, root);
  } else {
    console.error('Root element not found');
  }
});
