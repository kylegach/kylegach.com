---
title: V2 Goals
permalink: /writing/v2-goals/
date: 2020-05-06T20:55:10Z
tags:
  - site
  - v2
layout: layouts/base
---


Why rebuild and redesign? On an entirely new stack? In the open?

-----

I had a lot of fun building the [first version of this site][v1]. In [my first post], I wrote about some of the goals I set out to achieve. Those still stand true for this version—learn some tools, get better about accessibility (a11y), and share what I learn—but there was one goal I kept to myself: I built the site to get a job. More specifically, I built the site _in [React]_ to get a job writing React. I'm thrilled to say that it worked, remarkably well. As a UX engineer focused on design systems, I now write React code nearly every day for my career, and it's been a good career, indeed.

So why am I tearing it all down and starting over? There are several forces in play.

I gleefully followed along as many [designers][frankchimero] [and][geoffgraham] [developers][destroytoday] redesigned their sites in the open. And a number of others released [thoughtful][ethanmarcotte], [gorgeous][joshcomeau] [redesigns][wesbos] of their own. It looked like fun. It made me remember my own neglected home on the web, which I hadn't touched in nearly four years. It made me want to tinker. To write. So I fired up my text editor, made some tweaks, and... couldn't publish. The combination of the [relatively complex tech stack][colophon] I had taken on and years of not touching that stack was too much. I couldn't get my site to build, and I didn't want to fix it only to find myself in the same situation down the road. I needed to simplify.

I'm sure you've noticed, the _whole web_ needs to simplify. My site, little more than a blog and portfolio, didn't need React; it didn't even really need JavaScript. I want my home on the web to reflect my values<sup>(citation needed)</sup>, and a 721kb bundle of JS to serve text and some animated SVGs was not abiding by those values. Specifically, I have a growing appreciation for the _access_ part of accessibility. The web is for everyone, and we should be tearing down any and all barriers that unnecessarily prevent or impede anyone from accessing what we build. That belief has only been strengthened by stories of people not being able to [access the resources][covid19a11y] they [need the most][unemploymenta11y] right now.

Thankfully, a lot's changed in the last four years. [Service workers]! [Web Components]! [Jamstack]! [Indie Web]! [CSS Grid]! There's a [bunch of stuff I plan to learn and integrate][v2]. And, most notably for this effort, there's [11ty]. I plan to write more about why I chose 11ty, but the primary motivation is simple: in the last month or so, they've started publishing a [leaderboard] focused on performance and a11y. And look at those scores! It was immediately apparent that something about the tool either made those things easy, encouraged caring about them, or both. It was also clear that people who care about those things liked the tool, a lot. It would be fun to appear on that leaderboard one day, but mostly I just want to align myself and my site with the values demonstrated there.

So, goals for my site this time around:

1. **Focus on accessibility and performance**

   Every feature I add, every word I write will be done with an eye toward maintaining an open, fast, inclusive web.

1. **Learn and tinker**

   I did great with the "learn" part last time; this time, I want to tinker, too. It's a much [better outlet][worrystone] than mindlessly scrolling through Twitter and Instagram for the swings of boredom and nervous energy I've been feeling lately.

1. **Set a lasting foundation**

   My tinkering will be in the direction of continual evolution. I don't want to have to start from scratch again.

1. **Write more**

   I write every day for my job. Code, yes, but also the outline of thoughts, that leads to an email to my peers, that leads to a proposal, that leads to the code. And pull request reviews. So many reviews. A newsletter, more emails, various chat messages. Suffice it to say, it can only help my career to get better at writing. If I can muster the vulnerability to write about non-technical things, it might help in other ways. I also plan to continue sharing what I'm learning, to pay it forward for the innumerable articles, blog posts, podcasts, and conversations from which I've benefitted.

These words from when I kicked off this site still ring true today:

> It’s empowering to have a place of your own, viewable to all, where every aspect is exactly as you want it. Or, at least, as close as you can get it within your knowledge and skill set... I’m eager to find more ways to express and practice building my ideal web with design, code, and prose, and I’m delighted to finally have a place to do so.


[v1]: v1.kylegach.com/
[my first post]: /writing/of-the-web/
[React]: https://reactjs.org/
[frankchimero]: https://frankchimero.com/blog/
[geoffgraham]: https://geoffgraham.me/
[destroytoday]: https://destroytoday.com/blog/
[ethanmarcotte]: https://ethanmarcotte.com/
[joshcomeau]: https://joshwcomeau.com/
[wesbos]: https://wesbos.com/new-wesbos-website/
[colophon]: v1.kylegach.com/colophon
[covid19a11y]: https://themarkup.org/2020/04/21/blind-users-struggle-with-state-coronavirus-websites/
[unemploymenta11y]: https://itif.org/publications/2020/04/15/most-state-unemployment-websites-fail-mobile-and-accessibility-tests/
[Service workers]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers/
[Web Components]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/
[Jamstack]: https://jamstack.org/
[Indie Web]: https://indieweb.org/
[CSS Grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout/
[v2]: /writing/v2-rebuild-and-redesign/
[11ty]: https://www.11ty.dev/
[leaderboard]: https://www.11ty.dev/leaderboard/
[worrystone]: https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/
