# components

React components for the [dsmjs.com](https://dsmjs.com) site

[![Build Status](https://img.shields.io/travis/dsmjs/components.svg?style=flat&branch=master)](https://travis-ci.org/dsmjs/components)
[![Codecov](https://img.shields.io/codecov/c/github/dsmjs/components.svg)](https://codecov.io/github/dsmjs/components)

## Usage

[![npm](https://img.shields.io/npm/v/@dsmjs/components.svg?maxAge=2592000)](https://www.npmjs.com/package/@dsmjs/components)
[![license](https://img.shields.io/github/license/dsmjs/components.svg)](LICENSE)

### Installation

```sh
$ npm install @dsmjs/components --save-prod
```

## Contribution

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/dsmjs/components.svg)](https://greenkeeper.io/)
[![PRs Welcome][PRs-badge]][PRs-link]

### Dependencies

Use [nvm](https://github.com/creationix/nvm) to enable the expected version of node

```sh
$ nvm install
```

Install npm packages

```sh
$ npm install
```

### View the components in isolation locally

```sh
$ npm start
```

Navigate to the [running instance](http://localhost:6006) of
[storybook](https://storybook.js.org/)

### Verification

Ensure that your changes pass the automated verification scripts

```sh
$ npm test
```

:eyes: __Note__: The verification script is executed automatically as a
[`pre-commit` hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_committing_workflow_hooks).
We leverage [husky](https://github.com/typicode/husky) to configure git hooks
like this automatically for you.

## Sponsorship

We've been sponsored with a plan from [Percy](https://percy.io/) so that we can
use their great visual testing tool with this project. Be sure to take a look at
how the integration with [PRs](https://github.com/dsmjs/components/pulls) to this
project works. We're using the [Storybook for React integration](https://docs.percy.io/docs/storybook-for-react),
which makes adding and managing the benefits of Percy incredibly easy.

[commit-convention-link]: https://conventionalcommits.org
[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[PRs-link]: http://makeapullrequest.com
[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
