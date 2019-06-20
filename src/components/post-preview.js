import React from 'react'
import { css } from '@emotion/core'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import ReadLink from './read-link'

const PostPreview = ({ post }) => (
	<article
		css={css `
			display: flex;
			border-bottom: 1px solid #ddd;
			margin-top: 0;
			padding-bottom: 1rem;

			:first-of-type {
				margin-top: 1rem;
			}
		`}
	>
		<Link to={post.slug} css={css`margin: 1rem 1rem 0 0; width: 100px;`}>
			<Image
				fluid={post.image.sharp.fluid}
				css={css`
					* {
						margin-top: 0;
					}
				`}
				alt={post.title}
			/>
		</Link>
		<div>
			<h5>{post.title}</h5>
			<p>{post.excerpt}</p>
			<ReadLink to={post.slug}>Read this post &rarr;</ReadLink>
		</div>
	</article>
)

export default PostPreview