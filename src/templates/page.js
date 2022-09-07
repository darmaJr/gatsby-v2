//templates/page.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout.js';

const PageTemplate = ({ data }) => (
	<Layout>
	<title
	title={data.wpPage.title}
	/>
	<div dangerouslySetInnerHTML={{__html:data.wpPage.content}} />
	</Layout>
);

export default PageTemplate;

export const query = graphql`
query ($id: Int!){
wpPage(databaseId: { eq: $id }) {
title
content
}
}
`;