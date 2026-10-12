import React from 'react';
import { NavLink } from 'react-router-dom';

type MenuItem = {
	label: string;
	path: string;
};

const menuItems: MenuItem[] = [
	{ label: 'Home', path: '/' },
	{ label: 'Panel A', path: '/panel-a' },
	{ label: 'Panel B', path: '/panel-b' },
	{ label: 'Panel C', path: '/panel-c' }
];

const Menu: React.FC = () => {
	return (
		<nav aria-label="Main menu">
			<ul>
				{menuItems.map((item) => (
					<li key={item.path}>
						<NavLink to={item.path}>{item.label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;
