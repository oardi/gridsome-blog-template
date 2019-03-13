# gridsome basics

## enabled scss
install dependencies
`npm install -D sass-loader node-sass`

Change style lang to scss
```js
<style lang="scss">
	@import "~bootstrap/scss/bootstrap";
</style>
```

## Create a Blog

### Install the following Plugins

`npm install @gridsome/source-filesystem @gridsome/transformer-remark`

### Change gridsome.config.js
```js
module.exports = {
	siteName: 'My Static Site',

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
				path: 'blog/**/*.md',
				typeName: 'Post',
				remark: {}
			}
		}
	],

	pathPrefix: '/gridsome'
}
```

### create "blog" folder on root
* create blog folder
* creat a .md File

```
---
title: Blog Post One
---

# Blog Post One

Content lorem ipsum **haha**

*italic*


\```js
	const foo = 'bar';
\```
```
