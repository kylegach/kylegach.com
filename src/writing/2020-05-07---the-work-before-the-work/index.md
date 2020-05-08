---
title: The Work Before the Work
permalink: /writing/the-work-before-the-work/
date: 2020-05-07T22:58:10Z
tags:
  - site
  - v2
layout: layouts/page
---


I plan to record just about every bit of work that goes into this site. But first, I had to do a bit of work to make that possible.

-----

1. Create the [repo] on GitHub, cloned it to my machine, and initialized the project (`yarn init`) ([commit][c1])

1. Add [11ty] with minimal content and configuration ([commit][c2])
   - So simple to [get started][11tygs]!

1. Migrate (some) old content ([commit][c3])
   - The migration itself was as simple as copy/pasting and updating some [frontmatter] because all of my content, old and new, is written in [Markdown].
      - I could use an intermediate template to translate from the old frontmatter properties to the new ones expected by 11ty, but with only three migrated posts, that seems like overkill.
   - Now that I have more than just a home page, I need to create a basic template to display content.
   - I also need to ensure that media like images display correctly. Keeping all images in a single directory will make any future migrations go more smoothly and enables a more straightforward path to setting up a CMS later.
   - Finally, I need to [add a collection][collections] to display a list of all posts on the [Writing] page.

1. Add content to the home page, re: redesign ([commit][c3])

1. Set up [continuous deployment on Netlify][cd]
   - Now I can push to my master branch and the site will automatically build and, if successful, deploy.

1. Archive full previous version of the site at v1.kylegach.com
   - I want to keep the old version around for posterity.
   - I chose to not migrate some content; this provides a location to which I can redirect those requests.

1. Add minimal styles (system font, max-width for content) ([deploy][d1], [commit][c4])
   - There's a _lot_ I want to have in place before I touch styles, but a limitless line length is difficult to read and must be addressed.

1. Add task list support for Markdown, so that I could, well, use task lists in markdown ([commit][c5])
   - Also enable some handy [markdown options][mdoptions] to improve typography a bit with automatic [smart quotes]

1. Publish _[V2 Rebuild & Redesign][rebuild]_, the first post on the new site ✨ ([deploy][d2], [commit][c6])

1. List V2-related posts on the home page ([deploy][d3], [commit][c7])
   - Until I have better content, it seems wise to simply list all posts tagged 'v2'.
   - Which means I have to add tags to posts and add another collection to collect the 'v2' ones.

1. Publish _[V2 Goals]_ (and update _V2 Rebuild & Redesign_) ([deploy][d4], [commit][c8])
   - Revise the first post only to record work and pull out then expand the rest of what was there into a new one.

1. Add redirects for old content that was not migrated ([commit][c9])
   - [Cool URIs don't change.][cool uris]
   - I tried to do this through [Netlify's redirects feature][netlify redirect], because it's better to redirect on the server than on the client, but ran into a snag due to how I archived the old site (also on Netlify). I'll revisit this.

1. Add site header with banner and update home page ([deploy][d5], [commit][c10])
   - If people land on the site from a page that isn't home, I'd like them to understand the redesign going on.
   - Also, previously, only the home page displayed the site name. Oops.


So, now I have a workflow that allows me to publish posts and deploy changes with ease, and a simple foundation on which to build. Going forward, I'll try not to dump these big lists of work, but I needed to get these essential tasks done as quickly as possible to preserve content and enable future updates.


[repo]: https://github.com/kylegach/kylegach.com/
[11ty]: https://11ty.dev
[11tygs]: https://www.11ty.dev/docs/getting-started/
[frontmatter]: https://www.npmjs.com/package/yaml-front-matter#example
[Markdown]: https://www.markdownguide.org/
[collections]: https://www.11ty.dev/docs/collections/
[Writing]: /writing/
[cd]: https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git
[mdoptions]: https://github.com/markdown-it/markdown-it#init-with-presets-and-options
[smart quotes]: https://smartquotesforsmartpeople.com/
[rebuild]: /writing/v2-rebuild-and-redesign/
[V2 Goals]: /writing/v2-goals/
[cool uris]: https://www.w3.org/Provider/Style/URI
[netlify redirect]: https://docs.netlify.com/routing/redirects/

[c1]: https://github.com/kylegach/kylegach.com/commit/bf482ed370eca036e12a0dc4fff9c5128e4ffe27
[c2]: https://github.com/kylegach/kylegach.com/commit/a7e3d1f8a3f12aec0b77cb50b18045b048806a5e
[c3]: https://github.com/kylegach/kylegach.com/commit/09999f9ad4bbabcc375253dc20aee646279a2dbb
[c4]: https://github.com/kylegach/kylegach.com/commit/cae108d120aa565a465b5348a6d2bbdfb346dbea
[c5]: https://github.com/kylegach/kylegach.com/commit/9b6dce61d576f947b0750c8b99d72fdd9656aca5
[c6]: https://github.com/kylegach/kylegach.com/commit/b29dec97c49b2f03f72925da2277b09315a427db
[c7]: https://github.com/kylegach/kylegach.com/commit/2b519a7680a2fa89e50cdc2c1742a1562e99c414
[c8]: https://github.com/kylegach/kylegach.com/commit/8721747f72be20c5796961afd73a9cfcd5857453
[c9]: https://github.com/kylegach/kylegach.com/commit/35d510dc18a377de002382fe06f088a43ed8f023
[c10]: https://github.com/kylegach/kylegach.com/commit/22179bf1837a9d509b1ec018ebae689fd03c860c

[d1]: https://5eb2266c3e3a06d7eb369ef7--kylegach.netlify.app/
[d2]: https://5eb247712a4ee400060b3105--kylegach.netlify.app/writing/v2-rebuild-and-redesign/
[d3]: https://5eb247f9e394e5000692ea8c--kylegach.netlify.app/
[d4]: https://5eb3790ec451b70006a8a995--kylegach.netlify.app/writing/v2-goals/
[d5]: https://5eb38e92f126a30006ffd276--kylegach.netlify.app/
