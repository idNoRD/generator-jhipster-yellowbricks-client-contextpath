# generator-jhipster-yellowbricks-client-contextpath

One of [![Yellow Bricks Badge](https://img.shields.io/badge/YELLOWBRICKS--yellow?style=for-the-badge&labelColor=black)](https://github.com/idNoRD/generator-jhipster-yellowbricks) - a [JHipster](https://www.jhipster.tech/) blueprint that sets the `<base href>` in client HTML files to a configurable context path.

[![NPM version][npm-image]][npm-url]
[![Generator][github-generator-image]][github-generator-url]
![GitHub Maintained](https://img.shields.io/maintenance/yes/2026)

## JHipster source

- Generator: [`generators/client`](https://github.com/jhipster/generator-jhipster/tree/main/generators/client)
- Templates:
  - [`index.html.ejs`](https://github.com/jhipster/generator-jhipster/blob/main/generators/client/templates/src/main/webapp/index.html.ejs)
  - [`swagger-ui/index.html.ejs`](https://github.com/jhipster/generator-jhipster/blob/main/generators/client/templates/src/main/webapp/swagger-ui/index.html.ejs)

## What it does

Patches two HTML files during generation:

**`src/main/webapp/index.html`**

```diff
-<base href="/" />
+<base href="/jh/" />
```

**`src/main/webapp/swagger-ui/index.html`**

```diff
-<base href="/swagger-ui/" />
+<base href="/jh/swagger-ui/" />
```

The value is configurable — any context path can be used.

## Prerequisites

- Node.js `^22.18.0 || >=24.11.0`
- JHipster 9

## Installation

```bash
npm install -g generator-jhipster-yellowbricks-client-contextpath
```

## Usage

Create a `.yo-rc.json` in your project directory with the desired context path:

```json
{
  "generator-jhipster-yellowbricks-client-contextpath": {
    "contextPath": "/jh/"
  }
}
```

Then run JHipster with this blueprint:

```bash
# Standard generator
jhipster --blueprints yellowbricks-client-contextpath

# With JDL
jhipster import-jdl your-app.jdl --blueprints yellowbricks-client-contextpath
```

Replace `/jh/` with your actual context path. The trailing slash is required.

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-yellowbricks-client-contextpath.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-yellowbricks-client-contextpath
[github-generator-image]: https://github.com/idNoRD/generator-jhipster-yellowbricks-client-contextpath/actions/workflows/generator.yml/badge.svg
[github-generator-url]: https://github.com/idNoRD/generator-jhipster-yellowbricks-client-contextpath/actions/workflows/generator.yml
