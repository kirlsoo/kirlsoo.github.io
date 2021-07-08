import React, {Component} from 'react';
import {MenuItems} from "./menuItems";
import '../../css/navbar.css';
import { Button } from '@material-ui/core';
import {FaBars} from 'react-icons/fa'
import '@fontsource/roboto';
import '../../images/KL_logo.png';


class NavBar extends Component {
	render(){
		return(
			<>
			<nav className="Nav">
				<p className="Logo" to="/">
					<Button>
						<img className="Logo-image" alt="KristenLuciano.com logo"></img>
						KristenLuciano
					</Button>
				</p>
				<p className="Bars" />
				<ul className="NavMenu">
					<li className="NavLink"  to="/about" activeStyle>
					About Me
					</li>
					<li className="NavLink"  to="/about" activeStyle>
					Contact Me
					</li>
					<li className="NavLink"  to="/about" activeStyle>
					Socials
					</li>
				</ul>
			</nav>
			</>
		);
	}
}

export default NavBar;

//Material UI Appbar
/*
		<AppBar className="navbar" position="static">
		  <Toolbar>
		  	<ul className="navbar-options">
		  		<li><Button color="inherit">Home</Button></li>
		  		<li><Button color="inherit">About Me</Button></li>
		  		<li><Button color="inherit">Contact</Button></li>
		  	</ul>
		  </Toolbar>
		</AppBar>



		Note: How many versions of navbar do i need? hahha
		<nav className="NavBarItems">
				<h1 className="navbar-logo">React</h1>
				<div className="menu-icon" onClick={this.handleClick}>
						<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' :'nav-menu'}>
					{MenuItems.map((item,index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>
								{item.title}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		*/