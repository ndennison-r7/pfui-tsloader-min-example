import * as React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../Button'

const content: string = 'root'

const node = document.getElementById(content);

ReactDOM.render(<Button />, node);