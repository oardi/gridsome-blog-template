# Gridsome

## Enable SCSS

### Install Dependencies

`npm install -d sass-loader node-sass`

### Change "lang" attribute to SCSS

```js
<style lang="scss">
	@import "~bootstrap/scss/bootstrap";
</style>
```



## Create a Blog


### Install Dependencies

`npm install @gridsome/source-filesystem @gridsome/transformer-remark`


### Edit Gridsome Config

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
	]
}
```


### Create the structure
Create a folder called "blog" and a subfolder "posts".
Now you can create Posts files with ".md" extension.

Some basic markdown:
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


## Add Tags

To add Tags modify the Plugins configuration.
Add the Path for the Tags in **path**.

```js
{
	use: '@gridsome/source-filesystem',
	options: {
		path: 'blog/tags/*.md',
		typeName: 'Tag',
		route: '/tag/:id'
	}
}
```


### Gridsome Config Post anpassen
Inside Post-Config add a reference: tags: 'Tag'

```js
refs: {
	tags: 'Tag'
},
```

### Attach Tags to Post file
To show tags inside a Post .md file add a collection to **tags**.

```
tags:
  - vue
```



## Category 

### Edit config

Post
```js
refs: {
	category: 'Category',
},
```

Plugins
```js
{
	use: '@gridsome/source-filesystem',
	options: {
		path: 'blog/categories/*.md',
		typeName: 'Category',
		route: '/category/:id'
	}
},
```


## Add Author to Post

### Gridsome Config Post anpassen

Post
```js
refs: {
	author: 'Author'
},
```

Plugins
```js
{
	use: '@gridsome/source-filesystem',
	options: {
		path: 'blog/authors/*.md',
		typeName: 'Author',
		route: '/author/:id'
	}
}
```


## Sitemap

### Install dependencies
`npm install @gridsome/plugin-sitemap`

### siteUrl setzen 
siteUrl: 'YOURURL',


## Meta Data

### Post Meta Data
```js
metaInfo() {
	return {
		title: this.post.title,
		meta: [
			{
				name: 'description',
				content: this.post.excerpt
			}
		]
	};
}
```
