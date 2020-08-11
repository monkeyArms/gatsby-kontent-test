import React from 'react';
import Layout from '../components/ui/Layout';
import {Link} from 'gatsby';


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Page404 = () =>
{
	return (
		<Layout pageTitle="404: Page Not Found">
			<h1>404: Page Not Found</h1>
			<p>
				<Link to="/">Home</Link>
			</p>
		</Layout>
	);
};


export default Page404;
