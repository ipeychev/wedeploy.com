---
title: "Add Container.json"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I added the container.json"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 40
weight: 4
---

#### Add Container.json

Every service folder must have a `container.json` file that configures the container. Let's add one to the repo we just cloned. 

1. Open the `tutorial-hosting` folder in a code editor
2. Create a new file named `container.json` inside the `hosting` folder.
3. In that file, paste this code:

```application/json
{
	"id": "hosting",
	"type": "wedeploy/hosting"
}
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Another thing you can do in your `container.json` file is add environment variables. There are many ways to use these; one example is to serve files in a different folder.

```application/json
{
	"id": "hosting",
	"type": "wedeploy/hosting:latest",
	"env": {
		"WEDEPLOY_WEB_PATH": "/dist/"
	}
}
```

See the full list of <a href="http://wedeploy.com/docs/hosting/environment-variables.html" target="_blank">Environment Variables for Hosting</a>.

</aside>
