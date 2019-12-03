import React, { Component } from 'react'
import '../css/index.css'
import Company from './company'
import { Route, NavLink} from 'react-router-dom'

export default class Top extends Component {
	render() {
		return (
			<div className="aboutclass">
				<ul className="about-list about-lists">
					<li><NavLink to="/about/company">关于公司</NavLink></li>
					<li>关于产品</li>
					<li>关于合作</li>
				</ul>
				<div>
					<Route path="/about/company" component={ Company }></Route>
				</div>
			</div>
		)
	}
}
