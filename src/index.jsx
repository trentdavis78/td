import { render } from 'solid-js/web'; 
// import events from './components/data.json'
 
import App from './App';
import { registerWebComponents } from '../register';
// add some global styles here
import './index.css';
registerWebComponents();

render(() => <App providers={[]} />, document.getElementById('root'));