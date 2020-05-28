---
title: Helpful Deploy Messages
date: 2020-05-27T17:50:10Z
tags:
  - site
  - v2
templateEngineOverride: md
---


How to make deploy messages much more useful when [building & deploying with GitHub Actions][previous].

-----

To recap the previous post, this site is now _built_ with [GitHub Actions][] and (still) _deployed_ by [Netlify][]. When I was building in Netlify, each deploy had a helpful label that included (1) the branch being built, (2) the sha (a unique id for a commit) of the latest commit, and (3) the message of that commit. If I were to ever somehow deploy a bad build of the site, having well-labeled deploys makes it super easy to roll back to a working build (yet another benefit of a static site). Unlabeled deploys? Not so much. And I lost those helpful labels with my move to building on GitHub. The [Netlify CLI][] (which I am using indirectly, via the [Netlify Actions][] action) accepts a message option, and it _seemed_ like I had access to each of the three pieces of information I needed, so I should be able to recreate the experience I want. Let's find out!

## TL;DR

It works! Here's the relevant workflow code ([full source][ci-cd-yml]). Place these as steps in your job:

_**Note** — The code below worked well for my needs at the time of publishing this post. If you keep reading, you'll realize, as I did, that because GitHub Actions is still in beta, the tool and the various resources created by the community can become outdated quickly. Please cross-reference what you see here with [GitHub's documentation][GitHub Actions]._

```yml
- name: Checkout
  uses: actions/checkout@v2
  with:
    # Necessary to grab the HEAD commit from the source branch when
    # acting on a PR. Otherwise, `git log` will only contain the merge commit
    ref: ${{ github.event.pull_request.head.sha }}

- name: Create Deploy Message
  run: |
    # Grab the branch path from the appropriate (PR vs. push) property on context
    FULL_PATH_REF="${{ github.event.pull_request.head.ref || github.ref }}"
    # Strip "refs/heads/" from the start
    REF=${FULL_PATH_REF#refs\/heads\/}
    # Get the short form of the SHA
    SHA=$(git rev-parse --short ${{ github.event.pull_request.head.sha || github.sha }})
    # Yank the commit message from the log, using the SHA
    COMMIT_MSG=$(git log -n 1 --format=%s $SHA)
    # Create the deploy message
    DEPLOY_MESSAGE="$REF@$SHA: $COMMIT_MSG (${{ github.workflow }} workflow)"
    # Set it in env
    echo "::set-env name=DEPLOY_MESSAGE::$DEPLOY_MESSAGE"

# Build the site (omitted for brevity)...

# Deploy either preview or production
- name: Deploy
  uses: nwtgck/actions-netlify@v1.1.0
  with:
    # Pass the message
    deploy-message: ${{ env.DEPLOY_MESSAGE }}
    # more options...
```


## The Goal

I want to construct a message with a structure like this:

```
<branch-name>@<sha>: <commit-message> (<workflow-name> workflow)
```


## Part 0: GitHub Workflow Overview

Workflows are divided into "jobs" (currently, my workflow only has one job, build-and-deploy), and those jobs are further divided into "steps". Each step has [a few properties][steps], and the one most relevant for this post is `run`, which operates as a shell. I'm using the default workflow shell, [bash][].

Workflows also [evaluate expressions][], like referencing a variable, using this syntax: `${{ expression }}`, which I'll use a lot here.


## Part 1: Branch Name

In `git` terms, a branch is nothing more than a pointer to a specific commit, and that commit is known as the `ref`. Thankfully, GitHub provides the [`github` context][] for use within workflows, which includes the `ref`. This workflow runs when either of these "events" occur (1) pushing to the master branch or (2) submitting or updating a pull requst (PR) against the master branch. Operating on two different event types presents the first challenge. I want to avoid running different code for different events, but each event type stores information in the `github` context differently. By using [short-circuit evaluation][], I can reference the appropriate context property:

```sh
# Grab the branch path from the appropriate (PR vs. push) property on context
FULL_PATH_REF="${{ github.event.pull_request.head.ref || github.ref }}"
```

`github.event.pull_request.head.ref` stores the branch name like `"branch-name"`, but `github.ref` stores it with the pull path: `"refs/heads/branch-name"`. As there's no harm in attempting to replace something that can't be found, I can run this code, using [parameter expansion][], on both cases to produce the non-pathed branch name:

```sh
# Strip "refs/heads/" from the start
REF=${FULL_PATH_REF#refs\/heads\/}
```


## Part 2: SHA

Looking over the [shape of the `github` context][`github` context], this one seemed easy: there's a `github.sha` property directly available in both events. Two reasons this isn't so simple.

First, I'm interested in the latest commit that was built. `github.sha` is associated with that commit only for the push event. For PR events, `github.sha` points to the merge commit in the temporary branch GitHub creates (see [workflow docs][]). Instead, similar to Part 1, I need to look at the `github.event.pull_request.head.sha` property, which does point to the commit of interest.

Second, both of those properties store the full sha (for example, `3b34510197cde6e3a53525d64415832f7ba34ab8`), but I want the shortened, 8 character form: `3b345101`. After some searching, I found the `rev-parse` `git` command to do the trick.

Putting those concerns together, and executing with a bit of [command substitution][]:

```sh
# Get the short form of the SHA
SHA=$(git rev-parse --short ${{ github.event.pull_request.head.sha || github.sha }})
```


## Part 3: Commit Message

`git log` will output a reverse-chronological list of commits on the current branch. And, as I found after some searching, `git log -n 1` will output the nth most-recent commit(s)—in this case, 1. Finally, the `--format=%s` argument will restrict output to only the subject (the first line of the message) for the commit. Putting it all together:

```sh
# Yank the commit message from the log, using the SHA
COMMIT_MSG=$(git log -n 1 --format=%s $SHA)
```

This works great for push events. But reminder how, in Part 2, I learned that PR events' `github.sha` pointed to a merge commit in the temporary merge branch? That's because the [Checkout Action][] checks out that merge branch when acting on a PR event. I can pass a `ref` to the action to check out the code at that commit instead, and I already have the `ref` that points to the relevant branch from Part 2: `github.event.pull_request.head.sha`. So, modifying the workflow with this in mind, I can get the commit message of interest:

```yml
- name: Checkout
  uses: actions/checkout@v2
  with:
    # Necessary to grab the HEAD commit from the source branch when
    # acting on a PR. Otherwise, `git log` will only contain the merge commit
    ref: ${{ github.event.pull_request.head.sha }}

- name: Create Deploy Message
  run: |
    # Grab the branch path from the appropriate (PR vs. push) property on context
    FULL_PATH_REF="${{ github.event.pull_request.head.ref || github.ref }}"
    # Strip "refs/heads/" from the start
    REF=${FULL_PATH_REF#refs\/heads\/}
    # Get the short form of the SHA
    SHA=$(git rev-parse --short ${{ github.event.pull_request.head.sha || github.sha }})
    # Yank the commit message from the log, using the SHA
    COMMIT_MSG=$(git log -n 1 --format=%s $SHA)


# Build the site (omitted for brevity)...

# Deploy (omitted for brevity)...
```


## Part 4: Deploy Message

All of the pieces of the message are now ready to construct the whole. I've been assigning each value to a variable, e.g. `REF`, which I can reference here like `$REF`.

```sh
# Create the deploy message
DEPLOY_MESSAGE="$REF@$SHA: $COMMIT_MSG (${{ github.workflow }} workflow)"
```

Now that I have the message, I need to make it available to the deploy step. For that, I can graduate the `DEPLOY_MESSAGE` variable to an _environment_ variable, using [set-env][]:

```sh
# Set it in env
echo "::set-env name=DEPLOY_MESSAGE::$DEPLOY_MESSAGE"
```

In the deploy step, I can reference that environment variable with `${{ env.DEPLOY_MESSAGE }}`.


## Part 5: All Together

Here's the workflow with each part integrated:

```yml
- name: Checkout
  uses: actions/checkout@v2
  with:
    # Necessary to grab the HEAD commit from the source branch when
    # acting on a PR. Otherwise, `git log` will only contain the merge commit
    ref: ${{ github.event.pull_request.head.sha }}

- name: Create Deploy Message
  run: |
    # Grab the branch path from the appropriate (PR vs. push) property on context
    FULL_PATH_REF="${{ github.event.pull_request.head.ref || github.ref }}"
    # Strip "refs/heads/" from the start
    REF=${FULL_PATH_REF#refs\/heads\/}
    # Get the short form of the SHA
    SHA=$(git rev-parse --short ${{ github.event.pull_request.head.sha || github.sha }})
    # Yank the commit message from the log, using the SHA
    COMMIT_MSG=$(git log -n 1 --format=%s $SHA)
    # Create the deploy message
    DEPLOY_MESSAGE="$REF@$SHA: $COMMIT_MSG (${{ github.workflow }} workflow)"
    # Set it in env
    echo "::set-env name=DEPLOY_MESSAGE::$DEPLOY_MESSAGE"

# Build the site (omitted for brevity)...

# Deploy either preview or production
- name: Deploy
  uses: nwtgck/actions-netlify@v1.1.0
  with:
    # Pass the message
    deploy-message: ${{ env.DEPLOY_MESSAGE }}
    # more options...
```

The [full source][ci-cd-yml] of the workflow file is also available, if you find that helpful.


## Conclusion

To maximize clarity, I kept the narrative of this post straightforward, but the reality of developing the code shared here was not straightforward at all. The beta nature of GitHub Actions means that many aspects, like the `github` context and the Checkout Action, are still actively changing. That can make it difficult and confusing to try to learn from community resources like blog posts, which can often describe or prescribe outdated details. Even the official support forum suffers from this issue, and I went through _many_ trial-and-error cycles discovering what still works and what does not. Ultimately, I was best served relying on the official documentation as much as possible, and always double-checking any community-provided content against it. 


[previous]: /writing/building-and-deploying-with-github-actions/
[GitHub Actions]: https://help.github.com/en/actions/
[Netlify]: https://netlify.com/
[Netlify CLI]: https://cli.netlify.com/
[Netlify Actions]: https://github.com/marketplace/actions/netlify-actions/
[ci-cd-yml]: https://github.com/kylegach/kylegach.com/blob/master/.github/workflows/ci-cd.yml
[steps]: https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps
[bash]: https://www.gnu.org/software/bash/manual/html_node/
[evaluate expressions]: https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#about-contexts-and-expressions
[`github` context]: https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context
[short-circuit evaluation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Short-Circuit_Evaluation
[parameter expansion]: https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html
[workflow docs]: https://help.github.com/en/actions/reference/events-that-trigger-workflows#pull-request-event-pull_request
[command substitution]: https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html
[Checkout Action]: https://github.com/marketplace/actions/checkout/
[set-env]: https://help.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-environment-variable
