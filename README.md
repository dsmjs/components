# components

React components for the [dsmjs.com](https://dsmjs.com) site

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov](https://img.shields.io/codecov/c/github/dsmjs/components.svg)](https://codecov.io/github/dsmjs/components)

<!--status-badges end -->

## Usage

<!--consumer-badges start -->

[![npm](https://img.shields.io/npm/v/@dsmjs/components.svg?maxAge=2592000)](https://www.npmjs.com/package/@dsmjs/components)
[![license](https://img.shields.io/github/license/dsmjs/components.svg)](LICENSE)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://components.dsmjs.com/)

<!--consumer-badges end -->

### Installation

```sh
$ npm install @dsmjs/components --save-prod
```

## Contribution

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Dependabot](https://badgen.net/dependabot/dsmjs/components/?icon=dependabot)](https://dependabot.com/)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/dsmjs/components)
[![PRs Welcome][PRs-badge]][PRs-link]

<!--contribution-badges end -->

Find common contributing details in our
[organization-level contribution guide](https://github.com/dsmjs/.github/CONTRIBUTING.md)
and project specific details below.

### Dependencies

Use [nvm](https://github.com/creationix/nvm) to enable the expected version of
node

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

### Development

Find details about the project structure and more specific details about our
approach to building components [here](src/README.md).

### Verification

Ensure that your changes pass the automated verification scripts

```sh
$ npm test
```

:eyes: __Note__: The verification script is executed automatically as a
[`pre-commit` hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#\_committing_workflow_hooks).
We leverage [husky](https://github.com/typicode/husky) to configure git hooks
like this automatically for you.

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[github-actions-ci-link]: https://github.com/dsmjs/components/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/dsmjs/components/workflows/Node.js%20CI/badge.svg
