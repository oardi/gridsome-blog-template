---
title: AngularJs Basics
date: 2019-03-15
category: tutorial
excerpt: some short description about blaaaa
author: ardian-shala
timeToRead: 3000
tags:
  - angularjs
---


```js
class AppCtrl {
	static $inject = ['store'];
	constructor(store) {
		this.store = store;
	}
}

export default {
	bindings: {},
  	templateUrl: 'app.component.html',
  	controller: AppCtrl
}
```
