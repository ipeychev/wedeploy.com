---
title: "Using the API Client"
description: "Make requests to WeDeploy using a standardized interface."
headerTitle: "Intro"
layout: "guide"
weight: 8
---

### {$page.title}

###### {$page.description}

<article id="1">

## JavaScript API Installation

In order to send/receive requests to/from WeDeploy, we need to include the JavaScript API Client. This library provides a secure and reliable communication channel with WeDeploy. We can do that by adding a script element in a HTML file or to load the library using NPM:

### Adding WeDeploy JavaScript API from the CDN
```html
<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>
```

### Installing WeDeploy using NPM
```shell
$ npm install --save wedeploy
```

After installing WeDeploy using NPM, it might be loaded like this:

```js
const WeDeploy = require('wedeploy');

// in React Native environment it might be loaded using 'import' statement
import WeDeploy from 'wedeploy';
```

### Supported environments

WeDeploy has been tested on the following environments:
1. Web browser - Chrome, Firefox, Safari, Edge, IE10+
2. [Node.js](https://nodejs.org/en/)
3. [React Native](https://facebook.github.io/react-native/)

#### API nuances
In all supported environments the API calls are the same. However, depending on the environment, some features might be not available. For example, signing in with OAuth2 providers is available in browser environment only.

</article>

<article id="2">

## Swift API Installation

If you want to send/receive requests to/from WeDeploy from an iOS App, we also have a solution for that, the Swift API Client. In order to start using it you have to do:

#### Cocoapods

Add this to your Podfile

```swift
pod 'WeDeploy'
```

#### Carthage

Add this to your Cartfile

```swift
github 'wedeploy/api-swift'
```

#### API nuances

By default, all swift api requests returns a promise, for example:

```swift
WeDeploy
	.data("http://datademo.wedeploy.io");
	.get(resourcePath: "movies")
	.then { movie in 
		print(movie)
	}
```

But you will be able to return a callback or even an observable! You will have this two methods available:

```swift
// The method toCallback converts a promise into a callback
WeDeploy
	.data("http://datademo.wedeploy.io");
	.get(resourcePath: "movies")
	toCallback { movies, error in
		// here you can check the error or the response
	}

// The method toObservable converts a promise into an observable
WeDeploy
	.data("http://datademo.wedeploy.io");
	.get(resourcePath: "movies")
	.toObservable()
	.subscribe(
		onNext: { movies in
			// here you receive the movies
		},
		onError: { error in
			// oops something went wrong
		}
	)
```

</article>
