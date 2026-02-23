import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, {
      ...features,

      sbsBlueprint: true,
    });
  }

  get [BaseApplicationGenerator.INITIALIZING]() {
    return this.asInitializingTaskGroup({
      async initializingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.PROMPTING]() {
    return this.asPromptingTaskGroup({
      async promptingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.CONFIGURING]() {
    return this.asConfiguringTaskGroup({
      async configuringTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.COMPOSING]() {
    return this.asComposingTaskGroup({
      async composingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.COMPOSING_COMPONENT]() {
    return this.asComposingComponentTaskGroup({
      async composingComponentTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.LOADING]() {
    return this.asLoadingTaskGroup({
      async loadingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      async preparingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_PREPARING]() {
    return this.asPostPreparingTaskGroup({
      async postPreparingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.DEFAULT]() {
    return this.asDefaultTaskGroup({
      async defaultTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: {
            files: [{ templates: ['template-file-client'] }],
          },
          context: application,
        });
      },
    });
  }

  get [BaseApplicationGenerator.MULTISTEP_TRANSFORM]() {
    return this.asMultistepTransformTaskGroup({
      async multistepTransformTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_WRITING]() {
    return this.asPostWritingTaskGroup({
      async addBaseHref() {
        const contextPath = this.blueprintConfig.contextPath;
        if (!contextPath) {
          this.log.warn(
            '[yellowbricks-client-contextpath] contextPath not configured — add {"generator-jhipster-yellowbricks-client-contextpath":{"contextPath":"/jh/"}} to .yo-rc.json',
          );
          return;
        }

        this.editFile('src/main/webapp/index.html', { ignoreNonExisting: true }, content => {
          if (!content.includes('<base href=')) {
            this.log.warn('[yellowbricks-client-contextpath] index.html: <base href> tag not found — manual intervention needed');
            return content;
          }

          const previousMatch = content.match(/<base href="([^"]*)" \/>/);
          const previousHref = previousMatch ? previousMatch[1] : null;
          const updated = content.replace(/<base href="[^"]*" \/>/, `<base href="${contextPath}" />`);

          if (previousHref && previousHref !== contextPath) {
            this.log.info(`[yellowbricks-client-contextpath] index.html: base href renamed from "${previousHref}" to "${contextPath}"`);
          } else {
            this.log.info(`[yellowbricks-client-contextpath] index.html: base href "${contextPath}" set successfully`);
          }

          return updated;
        });

        const swaggerHref = `${contextPath}swagger-ui/`;

        this.editFile('src/main/webapp/swagger-ui/index.html', { ignoreNonExisting: true }, content => {
          if (!content.includes('<base href=')) {
            this.log.warn('[yellowbricks-client-contextpath] swagger-ui/index.html: <base href> tag not found — manual intervention needed');
            return content;
          }

          const previousMatch = content.match(/<base href="([^"]*)" \/>/);
          const previousHref = previousMatch ? previousMatch[1] : null;
          const updated = content.replace(/<base href="[^"]*" \/>/, `<base href="${swaggerHref}" />`);

          if (previousHref && previousHref !== swaggerHref) {
            this.log.info(`[yellowbricks-client-contextpath] swagger-ui/index.html: base href renamed from "${previousHref}" to "${swaggerHref}"`);
          } else {
            this.log.info(`[yellowbricks-client-contextpath] swagger-ui/index.html: base href "${swaggerHref}" set successfully`);
          }

          return updated;
        });
      },
    });
  }

  get [BaseApplicationGenerator.TRANSFORM]() {
    return this.asTransformTaskGroup({
      async transformTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.INSTALL]() {
    return this.asInstallTaskGroup({
      async installTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_INSTALL]() {
    return this.asPostInstallTaskGroup({
      async postInstallTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.END]() {
    return this.asEndTaskGroup({
      async endTemplateTask() {},
    });
  }
}
