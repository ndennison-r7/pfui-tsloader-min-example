import * as React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/index'

const content: string = 'root'

console.info('render bar app dev')

const node = document.getElementById(content);

ReactDOM.render(<App/>, node);