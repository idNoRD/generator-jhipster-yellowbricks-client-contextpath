# generator-jhipster-yellowbricks-client-contextpath

## JHipster source

- Generator: https://github.com/jhipster/generator-jhipster/blob/main/generators/client

Assume the context-path is "/jh"

## For `src/main/webapp/index.html`

- Template: https://github.com/jhipster/generator-jhipster/blob/main/generators/client/templates/src/main/webapp/index.html.ejs

```diff
- <base href="/" />
+ <base href="/jh/" />
```

## For `src/main/webapp/swagger-ui/index.html`

- Template: https://github.com/jhipster/generator-jhipster/blob/main/generators/client/templates/src/main/webapp/swagger-ui/index.html.ejs

```diff
- <base href="/swagger-ui/" />
+ <base href="/jh/swagger-ui/" />
```

> JHipster blueprint, yellowbricks-client-contextpath blueprint for JHipster

[![NPM version][npm-image]][npm-url]
[![Generator][github-generator-image]][github-generator-url]
[![Samples][github-samples-image]][github-samples-url]

# Introduction

This is a [JHipster](https://www.jhipster.tech/) blueprint, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](https://www.jhipster.tech/) blueprint, we expect you have JHipster basic knowledge:

- [JHipster](https://www.jhipster.tech/)

# Installation

To install or update this blueprint:

```bash
npm install -g generator-jhipster-yellowbricks-client-contextpath
```

# Usage

To use this blueprint, run the below command

````bash
jhipster-yellowbricks-client-contextpath

You can look for updated yellowbricks-client-contextpath blueprint specific options by running

```bash
jhipster-yellowbricks-client-contextpath app --help
````

And looking for `(blueprint option: yellowbricks-client-contextpath)` like

## Pre-release

To use an unreleased version, install it using git.

```bash
npm install -g jhipster/generator-jhipster-yellowbricks-client-contextpath#main
jhipster --blueprints yellowbricks-client-contextpath --skip-jhipster-dependencies
```

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-yellowbricks-client-contextpath.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-yellowbricks-client-contextpath
[github-generator-image]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-contextpath/actions/workflows/generator.yml/badge.svg
[github-generator-url]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-contextpath/actions/workflows/generator.yml
[github-samples-image]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-contextpath/actions/workflows/samples.yml/badge.svg
[github-samples-url]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-contextpath/actions/workflows/samples.yml
