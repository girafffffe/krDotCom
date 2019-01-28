import React from 'react';
import {render} from 'react-dom';
import './index.css';
import './App.css';
import Lockup from './Components/Lockup';
// import Notes from './Components/Notes';
import * as serviceWorker from './serviceWorker';

render(<Lockup />, document.getElementById('main'));
// render(<Notes />, document.getElementById('notes'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
