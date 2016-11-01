import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('root');

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ App }></Route>
	</Router>, 
app);
