# Gridsome
Static Site Generator


# SCSS aktivieren
Abhängigkeiten installieren

`npm install -D sass-loader node-sass`

Lang SCSS im Layout anpassen:
```js
<style lang="scss">
	@import "~bootstrap/scss/bootstrap";
</style>
```



# Blog erstellen


## Benötigte Plugins installieren
Dafür muss folgender Befehl ausgeführt werden:

`npm install @gridsome/source-filesystem @gridsome/transformer-remark`


## Gridsome Config anpassen

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


## Blog Ordner erstellen
Im Root-Verzeichnis einen Ordner "blog" erstellen.
Innerhalb des Verzeichnis einen Unterordner "posts" erstellen.
Innerhalb diesen Ordners können nun Blog-Posts als .md Dateien abgelegt werden.


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


# Gridsome Config Tags hinzufügen

Damit Tags hinzugefügt werden können, muss innerhalb der Plugins die Konfiguration erweitert werden.
Unter dem **path** kann nun das Verzeichnis für Tags erstellt werden.

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


## Gridsome Config Post anpassen
Innerhalb der Post-Config wird eine Referenz erweitert. Hierfür wird der Collection der Typename zugefügt: tags: 'Tag'

```js
refs: {
	tags: 'Tag'
},
```

## Tag einem Post zuweisen
Im Header einer Post .md Datei kann nun die Collection **tags** mit einer Liste von Tag-Ids versehen werden.

```
tags:
  - vue
```



# Category einem Post zuweisen

## Gridsome Config Post anpassen
Innerhalb der Post-Config wird eine Referenz erweitert. Hierfür wird der Typename zugefügt: category: 'Category'

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


# Author einem Post zuweisen

## Gridsome Config Post anpassen
Innerhalb der Post-Config wird eine Referenz erweitert. Hierfür wird der Typename zugefügt: author: 'Author'

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


<!-- https://gridsome.org/docs/taxonomies/#creating-a-taxonomy-page --> 
<!-- https://github.com/gridsome/gridsome/issues/188 -->


# TODO

Components um Teile zu extrahieren



# Sitemap

## Plugin installieren
`npm install @gridsome/plugin-sitemap`

## siteUrl setzen 
siteUrl: 'gridsome.muchadev.com',

## builden
...
