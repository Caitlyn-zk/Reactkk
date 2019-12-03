import React from 'react';
import './lessa.less';
import { BrowserRouter, Router, Route, Link, NavLink } from 'react-router-dom';
// import {IndexRouter} from 'react-router' //在第四个版本中取消了
import { Button } from 'antd';
import Top from './components/top'
import Index from './components/index'
import About from './components/about'
import './css/index.css'

function App() {
  return (
		<div className="App">
			<Top></Top>
			<div className="appcontent">
				<div className="left">
					<ul>
						<li><NavLink exact to="/" activeClassName="contentaa">首页</NavLink></li>
						<li><NavLink to="/about" activeClassName="contentaa">关于我们</NavLink></li>
					</ul>
				</div>
				<div className="right">
					<Route exact path="/" component={Index}></Route>
					<Route path="/about"  component={About}></Route>
				</div>
			</div>
    </div>
  );
}

export default App;
