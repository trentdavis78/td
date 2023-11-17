import { render } from 'solid-js/web'; 
import App from './App';
import { registerWebComponents } from '../register';
 

registerWebComponents();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    render(() => <App providers={[]} />, root);
  } else {
    console.error('Root element not found');
  }
});
