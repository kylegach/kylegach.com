---
title: V2 Rebuild & Redesign
date: 2020-05-05T21:54:10Z
tags:
  - dev
  - site
  - v2
---


In an effort to share openly, this post will track and record the work done for the site. [Read more about why I'm rebuilding and the goals I have for this project](/writing/v2-goals).


## Tasks

Continuously updated.


### Content

- [x] Archive old version and content at v1 subdomain
- [x] Temporary home page ([post][p1])
- [x] Migrate old content ([post][p1])
  - [x] Work
  - [x] Résumé
  - [x] Colophon
- [ ] Contact form?
- [ ] Notes?
- [ ] Tweets?
  - https://mxb.dev/blog/syndicating-content-to-twitter-with-netlify-functions/

### [11ty]

  - [x] Initialize ([post][p1])
  - [x] Add task list support to markdown ([post][p1])
  - [x] RSS
    - https://www.11ty.dev/docs/plugins/rss/
  - [ ] Syntax highlighting
    - https://www.11ty.dev/docs/plugins/syntaxhighlight/
    - Matches color mode?

### Tooling

- [x] [Netlify automatic deploys]
- [x] [GitHub Actions]
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

- [x] Basic starting styles ([post][p1])
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

[p1]: /writing/the-work-before-the-work/
