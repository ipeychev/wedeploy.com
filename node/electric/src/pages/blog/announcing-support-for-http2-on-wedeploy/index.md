---
title: "Announcing support for HTTP/2 on WeDeploy"
description: "We are happy to announce a big improvement regarding performance - the default protocol when your browser connects to your application hosted on WeDeploy will be HTTP/2. This is a big step ahead carrying multiple benefits."
date: "November 23, 2017"
author: "Iliyan Peychev"
layout: "blog"
---

<article>

{$page.description}

#### Why HTTP/2?

If you are not aware of HTTP/2, this is the latest version of HTTP and it is now [available](https://caniuse.com/#feat=http2) in almost every browser. It came to solve some problems with its predecessor, HTTP 1.1. As you probably know, HTTP 1.1 had a big limitation - practically it only allowed one outstanding request per TCP connection. Since that was unacceptable in today's Web applications, browsers didn't have other choice except to use multiple TCP connections to process multiple requests simultaneously. However, this leads to TCP congestion and to unfair monopolization of network resources.

In contrary to HTTP 1.1, HTTP/2 is a binary protocol, fully multiplexed, uses one connection for parallelism, uses header compression to reduce overhead and allows servers to "push" resources like CSS, images, etc. proactively into client caches. If you need more information please [read here](https://http2.github.io/) or watch [this](https://www.youtube.com/watch?v=qyexqwG6fGI).

#### A real example

Let's see how [wedeploy.com](wedeploy.com), our main site behaves after adding support for HTTP/2 on WeDeploy. To check that, we will use the excellent [WebPagetest](https://www.webpagetest.org/) service. You may see the full results when HTTP/2 is disabled [here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/) and when it is enabled [here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/).

##### Waterfalls

Waterfall when Chrome loads [wedeploy.com](wedeploy.com) using HTTP 1.1 (click [here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details) to see the original results):

<figure>
  <a href="http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details">
    <img src="/images/blog/post-19-waterfall-http1.1.png" alt="Waterfall with HTTP 1.1">
  </a>
</figure>

Waterfall when HTTP/2 is enabled (click [here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details) to see the original results):

<figure>
  <a href="http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details">
    <img src="/images/blog/post-19-waterfall-http2.png" alt="Waterfall with HTTP/2">
  </a>
</figure>

See the difference? See how flat the waterfall is when HTTP/2 is enabled? Chrome still does outstanding job to load wedeploy.com as smooth as possible when HTTP/2 is disabled, but even with all the 6 connections the results are worst in comparison to loading the site using HTTP/2. Talking about the connections, lets see what happens with them in both cases.

##### Connections

Connections when Chrome loads [wedeploy.com](wedeploy.com) using HTTP 1.1 (click [here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details/) to see the original results):

<figure>
  <a href="http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details/">
    <img src="/images/blog/post-19-connections-http1.1.png" alt="Connections with HTTP 1.1">
  </a>
</figure>

Connections when Chrome loads [wedeploy.com](wedeploy.com) using HTTP/2 (click [here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details/) to see the original results):

<figure>
  <a href="http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details/">
    <img src="/images/blog/post-19-connections-http2.png" alt="Connections with HTTP/2">
  </a>
</figure>

Here is where HTTP/2 stands out - there is only one connection to [wedeploy.com](wedeploy.com). In comparison, there are 6 connections when HTTP/2 is disabled. Please also note that for each connection, time for initialization + SSL negotiation is spent, that is nothing, but waste of network resources.

##### Overall performance

What about the overall performance? HTTP/2 clearly brings benefits, check this the results below (lower is better):

Performance results when Chrome loads [wedeploy.com](wedeploy.com) using HTTP 1.1 (click [here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/) to see the original results):

<figure>
  <a href="http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/">
    <img src="/images/blog/post-19-performance-http1.1.png" alt="Overall performance with HTTP 1.1">
  </a>
</figure>

Performance results when Chrome loads [wedeploy.com](wedeploy.com) using HTTP/2 (click [here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/) to see the original results):

<figure>
  <a href="http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/">
    <img src="/images/blog/post-19-performance-http2.png" alt="Overall performance with HTTP/2">
  </a>
</figure>

#### That's cool, glad your site got better, but how do I get these benefits in my application?

Glad you asked! There is no need to do anything, your application with get HTTP/2 support out-of-the-box. You know the deal - forget about infrastructure, that's our job. Your job is to create outstanding applications.

Happy hacking!

</article>
