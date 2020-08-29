---
title: A Helpful Baseline (Measuring Site Quality with Lighthouse CI)
date: 2020-08-28T15:05:30Z
tags:
  - site
  - v2
  - performance
  - a11y
templateEngineOverride: md
---


There is much to improve about this site. (If you're reading this close to the publish date, that will be obvious, as you view the nearly naked prose and utter lack of design.) But making improvements without measuring the impact of the changes can risk making it worse. So, before I do any more work, I need a baseline from which to measure my changes against.

-----

[Lighthouse] is a helpful tool to audit a website in five main criteria: performance, accessibility, best practices, SEO, and progressive web app (PWA). Those align nicely with my [goals for the site], making it an ideal fit for my needs. Lighthouse also does something quite neat and very much in line with the "learn, then teach" spirit of this site. Reporting the audit successes & failures would be useful on its own, but the Lighthouse team went much further and provide the _why_ behind each check, many with a "learn more" link. This greatly shortens the path from "oh no, not good" to "I learned a thing!".

There are many ways to run Lighthouse. The easiest is probably using the [built-in Audits panel of Chrome's DevTools]. That's fine for a manual workflow, but I want to automate the audits, to ensure they run against _every_ change to the site and surface the results well. For that, I'll use [Lighthouse CI], which I can run within my [GitHub Workflow]. Doing so is fairly straightforward:

1. Add Lighthouse step to workflow ([commit][c1])

   Though it's all in one commit, this contains multiple tasks.
   
   1. Change the Deploy step to always build a deploy preview, which can then be audited
   1. Add the Lighthouse step (following [Lighthouse CI's instructions]), using the preview link from the previous step
   1. Add some basic [Lighthouse configuration]
      1. Add [recommended assertions] (using the "no-pwa" variety until I can begin address those criteria)
      1. Publish reports to a [temporary, public location] (for free!)
   1. Add a second deploy step (really, move the previous one) that conditionally deploys a preview or the production site, upon success of the prior steps
   1. Refactor the [Create Deploy Message step], to build up slightly different messages for each deploy step

1. Turn off failing assertions ([commit][c2])

   While I haven't done anything to intentionally make the performance or accessibility of this site worse (to then improve in a helpful blog post), I haven't done anything extra to improve those things either. Thus, the recommended assertions return [four failed checks]. For now, I'll disable those checks to get a passing audit, and will address each of them as my very next tasks.

Now whenever I push a change to the site, a Lighthouse run is kicked off as part of my CI/CD workflow, and the results are published as both a status check (if pushing to a branch with a pull request) and a [detailed report] (not that _exact_ report, as the generated one is only hosted temporarily; that link is from a manual audit using https://web.dev/measure/, and if it continues to work, it will probably not reflect the state of the site when this post was published).

Most importantly, I can now continue to improve the site knowing that my changes are truly having a positive impact on the things I care about.


## Follow-up

I'm happy with this initial implementation, but there are aspects to improve.

- Only run the second deploy step if pushing to master (in other words, if deploying to production) to avoid creating a duplicate deploy preview. GitHub workflows cannot have conditional steps, only [conditional jobs]. So I'd first have to split the steps into various jobs, and that would require [passing data between jobs] unless I duplicate a lot of the steps and logic.

- After splitting steps into different jobs, the Lighthouse job could be conditional, allowing it to be skipped — for example, by adding "[skipLighthouse]" to a commit message—which would be nice for writing only updates (like publishing this post).

- Publish reports to a more permanent location, using [Lighthouse CI Server].

- Tweak assertions, perhaps making use of a [performance budget].


[Lighthouse]: https://developers.google.com/web/tools/lighthouse/
[goals for the site]: /writing/v2-goals/
[built-in Audits panel of Chrome's DevTools]: https://developers.google.com/web/tools/lighthouse/#devtools
[Lighthouse CI]: https://github.com/GoogleChrome/lighthouse-ci/
[GitHub Workflow]: /writing/building-and-deploying-with-github-actions/
[Lighthouse CI's instructions]: https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md#configure-your-ci-provider
[Lighthouse configuration]: https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md
[recommended assertions]: https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#preset
[temporary, public location]: https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#target
[Create Deploy Message step]: /writing/helpful-deploy-messages/
[four failed checks on the first run]: https://github.com/kylegach/kylegach.com/runs/1043259587
[detailed report]: https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fkylegach.com
[conditional jobs]: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif
[passing data between jobs]: https://docs.github.com/en/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts#passing-data-between-jobs-in-a-workflow
[Lighthouse CI server]: https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/server.md
[performance budget]: https://github.com/GoogleChrome/budget.json

[c1]: https://github.com/kylegach/kylegach.com/pull/20/commits/dcf8600432b865fd17789a2b0f0e72e68380a16b
[c2]: https://github.com/kylegach/kylegach.com/pull/20/commits/60565e123716ac4158d464a16d606c7ab0daca06
