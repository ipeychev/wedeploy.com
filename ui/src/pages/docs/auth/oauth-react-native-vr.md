---
title: "Sign-in using OAuth in React Native and React VR"
description: "You can let your users authenticate with WeDeploy using OAuth in React Native and React VR."
headerTitle: "Auth"
layout: "guide"
weight: 7
---

### {$page.title}

###### {$page.description}

<article id="1">

## Sign-in using OAuth in React Native and React VR

Sign-in with OAuth in React Native and React VR environments requires some additional work to be done by the application developer. In summary:
1. An URL scheme has to be configured for the application. The process is specific for iOS and Android. Twitter has a good [documentation](https://dev.twitter.com/cards/mobile/url-schemes) how to achieve it for iOS.
2. The application should open a Web link using a library on choice. React Native provides [Linking](https://facebook.github.io/react-native/docs/linking.html) by default. The link will be loaded in a browser and the user will be redirected to the provider's page (Google, Github, Facebook, etc.) where he has to sign in and authorize the application. Then, he will be navigated back to the application.
3. When user is navigated back, a callback in the application will be called. The payload will contain a token. If the configured scheme is "myapp://", the provided URL will look like: "myapp://#access_token=<access-token-here>"
4. The token should be extracted and passed to `loadCurrentUser` function of WeDeploy Auth API. The function returns a Promise, which will be resolved with the logged user.

Here is an example:

```text/javascript
import React, {Component} from 'react';
import {Linking} from 'react-native';
import WeDeploy from 'wedeploy';

const AUTH_URL = '<auth-url>';

class SignIn extends Component {
  constructor() {
    super();

    this.auth = WeDeploy.auth(AUTH_URL);

    this.signInGithub();
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL.bind(this));
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL.bind(this));
  }

  handleOpenURL(event) {
    let authTokenIndex = event.url.indexOf('#access_token=');

    if (authTokenIndex > 0) {
      let authToken = event.url.substring(authTokenIndex + 14);

      this.auth
        .loadCurrentUser(authToken)
        .then(user => {
          console.log(user);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  signInGithub() {
    let githubProvider = new this.auth.provider.Github();
    githubProvider.setProviderScope('user:email');
    githubProvider.setRedirectUri('myapp://');

    let authUrl = githubProvider.makeAuthorizationUrl(AUTH_URL);

    Linking.canOpenURL(authUrl)
      .then(supported => {
        if (supported) {
          return Linking.openURL(authUrl);
        } else {
          console.error('Failed to open URI:', authUrl);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
```

</article>

## What's next?

* Now you can start building your apps with authentication using OAuth in React Native and React VR.
