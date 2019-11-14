import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MyNav = props => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Router>		
			<Navbar color="light" light expand="md">
				<NavbarBrand>
					<Link to="/banking"><img src={require('../../assets/img/logo.png')} alt="logo"/></Link>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink>
								<Link to="/news">HOME</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/directory">PROFILE</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/trading">WORK EXPERIENCE</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/forum">RESOURCES</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/event">PHOTO</Link>
							</NavLink>
						</NavItem>
                        <NavItem>
							<NavLink>
								<Link to="/event">CONTACT</Link>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<Switch>
				<Route exact path="/" component={props.Homepage} />
				<Route path="/news" component={props.Homepage} />
				<Route path="/directory" component={props.Homepage} />
				<Route path="/trading" component={props.Homepage} />
				<Route path="/event" component={props.Homepage} />
				<Route path="/forum" component={props.Homepage} />
				<Route path="/review" component={props.Homepage} />
				<Route path="/login" component={props.Homepage} />
				<Route path="/register" component={props.Homepage} />
				<Route path="/banking" component={props.Homepage} />				
			</Switch>
		</Router>
	);
};
export default MyNav;