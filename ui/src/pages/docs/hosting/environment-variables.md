---
title: "Environment Variables"
description: "Use environment variables to control your app."
headerTitle: "Hosting"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<aside>

###### <span class="icon-16-alert"></span> Attention

If you are unfamiliar with how you can apply and manage your secret keys, please visit our [Environment Variables](/docs/intro/environment-variables.html) page.

</aside>

<article id="1">

## Reference

Here is a list of all the environment variable keys you can use with this service.

<div class="table-container">

| Key | Default Value | Description |
| - | - | - |
| WEDEPLOY_WEB_PATH | `/` | Path to serve static files |
| WEDEPLOY_WEB_ERROR_PATH | `/_error` | Path to serve [error pages](/docs/hosting/custom-error-pages.html) |

</div>

<aside>

###### <span class="icon-16-alert"></span> Attention

The folder specified in `WEDEPLOY_WEB_PATH` will be resolved relative to the folder where the `container.json` is located. In the example below, if `WEDEPLOY_WEB_PATH` is specified as `dist/`, then `dist` folder must be next to `container.json`.

```
myapp
  ├── container.json
  ├── dist
  └── src
```

</aside>

</article>
