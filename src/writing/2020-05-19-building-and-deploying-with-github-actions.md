---
title: Building & Deploying with GitHub Actions
date: 2020-05-19T16:27:10Z
tags:
  - site
  - v2
---


In [The Work Before the Work][], I set up automatic deploys with Netlify. But I have [plans][] to automate much more than deploys.

-----

One of the useful benefits of a static site (a website that is only static files and doesn't require a backing server or database) is that it can be built and deployed just about anywhere, and those locations can be _different_. [Netlify][] provides an amazingly simple publishing experience, using [continuous integration and continuous deployment][] (CI/CD): push or merge to master and my site is automatically built (CI) and deployed (CD). But I wanted to extend beyond that simplicity for a few reasons. First, I want my CI pipeline to include more than just building the site. Eventually, I want to continuously audit for accessibility, performance, and other factors in the usability and quality of what I'm publishing. Second, I've been itching to play with [GitHub Actions][]. Third, Netlify's generous free plan, available for open source projects, has a limit of 300 "build minutes"/month. That's likely fine for right now (building and deploying only takes ~0.5 build minutes right now), but the additional CI work will start consuming a lot more.

I drew up a plan for where I want to go:

<figure>
   <img
      src="/img/building-and-deploying-with-github-actions-1.svg"
      alt=""
   />
   <figcaption>
      Flow diagram of the planned CI/CD flow for the site. <i>Made with the rather excellent <a href="https://excalidraw.com/">Excalidraw</a>.</i>
   </figcaption>
</figure>

First, we're just going to tackle the build and deploy steps:

<figure>
   <img
      src="/img/building-and-deploying-with-github-actions-2.svg"
      alt=""
   />
   <figcaption>
      Simplified flow diagram highlighting the steps of the planned CI/CD flow I'll be implementing in this post.
   </figcaption>
</figure>

That diagram illustrates that upon pushing changes (to a branch with an associated pull request or to master), the site will be built and then either deployed to a preview (if a push to a pull request) or production (if a push to master). If a step fails at any point, the flow stops. Finally, either the successful deploy or failure is communicated via a comment on the pull request or commit.

Before doing anything else, I need to disable automatic deploys. Going forward, I only want to deploy the site (or a preview) when it's gone through all of those green checkmarks in the flow diagram. In Netlify, this is as easy as toggling a "stop builds" switch in my site settings.

Next, I create a GitHub workflow, starting from the [blank starter][]. First, I add a step to install dependencies and then build the site. Then I search the [GitHub Actions Marketplace][] for "netlify" and find [Netlify Actions][], which will make it simple to deploy the site (or a preview). Following the guidance on the README, I configure the action with my options and secrets.

Finally, I [create a pull request][] to test it. The workflow kicks off as soon as I submit, and 30 seconds later I have a deploy preview available from Netlify:

<figure>
   <img
      src="/img/building-and-deploying-with-github-actions-3.jpg"
      alt=""
   />
   <figcaption>
      The bottom deploy was built by Netlify; the top was built by the GitHub workflow. Note how the bottom entry contains useful information like the relevant branch, the SHA of the commit deployed, and the commit message.
   </figcaption>
</figure>

That's good enough for a starting point, but the information in the prior deploy entries is really useful, and I'd like to include it in my deploy message, to make future troubleshooting easier. To be continued...


[The Work Before the Work]: /writing/the-work-before-the-work/
[plans]: /writing/v2-rebuild-and-redesign/
[Netlify]: https://netlify.com/
[continuous integration and continuous deployment]: https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment
[GitHub Actions]: https://github.com/features/actions/
[blank starter]: https://github.com/actions/starter-workflows/blob/master/ci/blank.yml
[GitHub Actions Marketplace]: https://github.com/marketplace
[Netlify Actions]: https://github.com/marketplace/actions/netlify-actions
[create a pull request]: https://github.com/kylegach/kylegach.com/pull/10