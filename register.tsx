import { customElement } from 'solid-element';
import WharfkitComponent from "./src/App";


export function registerWebComponents() {
  customElement('wharfkit-webc', getInitialProps(), WharfkitComponent);
}

function getInitialProps() {
  return {
    providers: ['wax', 'anchor'],
    actions: []
  };
}