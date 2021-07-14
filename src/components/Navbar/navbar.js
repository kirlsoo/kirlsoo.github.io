import React, {Component} from 'react';
import '../../css/navbar.css';
import '@fontsource/roboto';
import '../../images/KL_logo.png';


class NavBar extends Component {
	render(){
		return(
			<>
			<div className="Nav">
				<div className="wrapper">
					<div className="left" to="/">
						<a href="#header">
						<img className="Logo-image" alt="KristenLuciano.com logo"></img>
						</a>
					</div>
					<div className="right">
						<ul className="NavMenu">
							<li  activeStyle>
								<a className="NavLink" href="#about">About Me</a>
							</li>
							<li  activeStyle>
								<a className="NavLink" href="#about">Contact Me</a>
							</li>
							<li  activeStyle>
								<a className="NavLink" href="#social">Socials</a>
							</li>
						</ul>
					</div>

				</div>
			</div>
			</>
		);
	}
}

export default NavBar;

//Material UI Appbar
/*


						<Button>
							<img className="Logo-image" alt="KristenLuciano.com logo"></img>
							KristenLuciano
						</Button>
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