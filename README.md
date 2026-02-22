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
