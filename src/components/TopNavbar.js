import React from 'react';
import {Link} from 'react-router-dom'
import {Reactstrap} from 'reactstrap';
class TopNavbar extends React.Component{
	render(){
		return(
			<nav className="navbar bg-dark" fixed="top">
				<div className="navbar-brand text-light" href="/">Our Org</div>
				<ul className="nav" >
					<Link className="link-item" to='/'>
						<li>Main</li> 
					</Link>
					<Link to="/programs">
						<li>Programs </li> 
					</Link>
					<Link to="/projects">
						<li>Projects</li> 
					</Link>
					<Link to="/info/versions">
						<li >Versions</li>
					</Link>
					<Link to="/rules">
						<li>Rules</li>
					</Link>
					<Link to='info/services'>
						<li>Services</li>
					</Link>
					<Link to="/info/about">
						<li>About Us</li>
					</Link>
					<Link to='/info/contact'>
						<li>Contact Us</li>
					</Link>
					
				</ul>
			</nav>
		);
	}
}
export default TopNavbar;