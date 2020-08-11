import React from "react"
import Layout from '../components/ui/Layout';
import {graphql, useStaticQuery} from 'gatsby';


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () =>
{
	const data = useStaticQuery( graphql`
    {
      allKontentItemArticleExampleContentType {
        nodes {
          id
          elements {
            body {
              value
              type
              name
              images {
                description
              }
              links {
                link_id
              }
            }
            title {
              name
              type
              value
            }
          }
          children {
            id
          }
        }
      }
    }
  	` );
	const body = data.allKontentItemArticleExampleContentType.nodes[0].elements.body.value

	return (
		<>
			<Layout
				pageTitle="gatsby-kontent-test"
				pageDescription="Quick gatsby.js + kontent test project"
			>
				<h1>Home</h1>
				<div dangerouslySetInnerHTML={{ __html: body }} />
			</Layout>
		</>
	);
};


export default Home;
