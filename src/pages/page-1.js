import React from 'react';
import Layout from '../components/ui/Layout';
import {graphql, useStaticQuery} from 'gatsby';


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Page1 = () =>
{
	const data     = useStaticQuery( graphql`
	 {
		allKontentItemLandingPageExampleContentType {
		  nodes {
			elements {
			  body {
				value
			  }
			  product_list {
				value {
				  ... on kontent_item_product_example_content_type {
					elements {
					  description {
						value
						images {
						  url
						}
					  }
					  name {
						value
					  }
					  image {
						value {
						  url
						}
					  }
					}
				  }
				}
			  }
			  title {
				value
			  }
			}
		  }
		}
	}
  	` );
	const elements = data.allKontentItemLandingPageExampleContentType.nodes[0].elements;
	const title    = elements.title.value;
	const body     = elements.body.value;
	const products = elements.product_list.value;

	return (
		<>
			<Layout pageTitle="page 1">
				<h1 dangerouslySetInnerHTML={{ __html: title }} />
				<div dangerouslySetInnerHTML={{ __html: body }} />
				<h2>Products</h2>
				<ul className="product-list">
					{products.map( ( product, key ) =>
						<li key={key}>
							<div>
								<img src={product.elements.image.value[0].url} alt="" />
							</div>
							<div>
								<h3>{product.elements.name.value}</h3>
								<div dangerouslySetInnerHTML={{ __html: product.elements.description.value }} />
							</div>
						</li>
					)}
				</ul>
			</Layout>
		</>
	);
};


export default Page1;
