---
title: V2 Rebuild & Redesign
permalink: /writing/v2-rebuild-and-redesign/
date: 2020-05-05T21:54:10Z
tags:
  - dev
  - site
  - v2
layout: layouts/base
---


# {{ title }}

In an effort to share openly, this post will track and record the work done for the site. [Read more about why I'm rebuilding and the goals I have for this project](/writing/v2-goals).


## Tasks

Continuously updated.


### Content

- [x] Archive old version and content at v1 subdomain
- [x] Temporary home page ([commit][c2])
- [x] Migrate old content ([commit][c2])
  - [ ] Work
  - [ ] Résumé
  - [ ] Colophon
- [ ] Contact form?
- [ ] Notes?
- [ ] Tweets?
  - https://mxb.dev/blog/syndicating-content-to-twitter-with-netlify-functions/

### [11ty]

  - [x] Initialize ([commit][c1])
  - [x] Add task list support to markdown ([commit][c4])
  - [ ] RSS
    - https://www.11ty.dev/docs/plugins/rss/
  - [ ] Syntax highlighting
    - https://www.11ty.dev/docs/plugins/syntaxhighlight/
    - Matches color mode?

### Tooling

- [x] [Netlify automatic deploys]
- [ ] [CircleCI], [Travis], [GitHub Actions]?
- [ ] [Commitizen] (or something else?)
- [ ] [Lighthouse] report
- [ ] [changesets]?
- [ ] [ESLint]
- [ ] [prettier]
- [ ] [lint-staged] w/ [husky]
- [ ] [TypeScript]?
- [ ] [@pika/pack]? [Snowpack]?
- [ ] [Storybook]
    - https://storybook.js.org/docs/guides/guide-html/
- [ ] [Chromatic]?
- [ ] [Jest]
- [ ] [Testing Library]

### Features

- [ ] Offline support
- [ ] "Embed" code samples/playgrounds
- [ ] Dark mode
    - [ ] System (default), light, dark
    - [ ] Able to toggle back to system
    - [ ] Icon for 'system' reflects current mode?
- [ ] [TinaCMS]? [NetlifyCMS]? Others?
- [ ] Indie Web
  - [ ] Web mentions

### Design

- [x] Basic starting styles ([commit][c3])
- [ ] [Tailwind]?


[of-the-web]: /writing/of-the-web/

[11ty]: https://www.11ty.dev/
[Netlify automatic deploys]: https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git
[CircleCI]: https://circleci.com/
[Travis]: https://travis-ci.org/
[GitHub Actions]: https://github.com/features/actions
[Commitizen]: http://commitizen.github.io/cz-cli/
[Lighthouse]: https://github.com/GoogleChrome/lighthouse-ci
[changesets]: https://github.com/atlassian/changesets
[ESLint]: https://eslint.org/
[prettier]: https://prettier.io/
[lint-staged]: https://github.com/okonet/lint-staged
[husky]: https://github.com/typicode/husky
[TypeScript]: https://www.typescriptlang.org/
[@pika/pack]: https://github.com/pikapkg/pack
[Snowpack]: https://www.snowpack.dev/
[Storybook]: https://storybook.js.org/
[Chromatic]: https://www.chromatic.com/
[Jest]: https://jestjs.io/
[Testing Library]: https://testing-library.com/
[TinaCMS]: https://tinacms.org/
[NetlifyCMS]: https://www.netlifycms.org/
[Tailwind]: https://tailwindcss.com/

[c1]: https://github.com/kylegach/kylegach.com/commit/a7e3d1f8a3f12aec0b77cb50b18045b048806a5e
[c2]: https://github.com/kylegach/kylegach.com/commit/09999f9ad4bbabcc375253dc20aee646279a2dbb
[c3]: https://github.com/kylegach/kylegach.com/commit/cae108d120aa565a465b5348a6d2bbdfb346dbea
[c4]: https://github.com/kylegach/kylegach.com/commit/9b6dce61d576f947b0750c8b99d72fdd9656aca5
