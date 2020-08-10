import React from 'react';
import {Link} from 'gatsby';
import '../../styles/styles.scss';


/**
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const Layout = ( { children } ) =>
{
	const date = new Date().getFullYear();

	return (
		<div>
			<header id="site-header">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/page-1/">Page 1</Link>
					</li>
				</ul>
			</header>
			<main>
				{children}
			</main>
			<footer id="site-footer">
				&copy; {date}
			</footer>
		</div>
	)
};


export default Layout;



