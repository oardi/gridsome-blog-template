module.exports = {
	siteName: 'My Static Site',
	siteDescription: 'Some description about my website',

	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link'
		}
	},

	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/posts/**/*.md',
				typeName: 'Post',
				route: '/:slug',
				refs: {
					tags: 'Tag',
					category: 'Category',
					author: 'Author'
				},
				remark: {}
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/tags/*.md',
				typeName: 'Tag',
				route: '/tag/:id'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/categories/*.md',
				typeName: 'Category',
				route: '/category/:id'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/authors/*.md',
				typeName: 'Author',
				route: '/author/:id'
			}
		}
	],

	pathPrefix: '/gridsome-blog'
}
