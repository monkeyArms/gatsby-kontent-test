import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';
import '../../styles/app.scss';


/**
 *
 * @param {[]} children
 * @param {string} pageTitle
 * @param {?string} pageDescription
 * @returns {JSX.Element}
 * @constructor
 */
const Layout = ( { children, pageTitle, pageDescription } ) =>
{
	const date = new Date().getFullYear();

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{pageTitle}</title>
				{pageDescription &&
				<meta name="description" content={pageDescription} />
				}
			</Helmet>

			<div className="page">
				<header id="site-header">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/page-1">Page 1</Link>
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
		</>
	)
};


export default Layout;



