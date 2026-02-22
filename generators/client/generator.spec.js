import { beforeAll, describe, expect, it } from 'vitest';

import { defaultHelpers as helpers, result } from 'generator-jhipster/testing';

const SUB_GENERATOR = 'client';
const BLUEPRINT_NAMESPACE = `jhipster:${SUB_GENERATOR}`;
const INDEX_HTML = 'src/main/webapp/index.html';
const SWAGGER_INDEX_HTML = 'src/main/webapp/swagger-ui/index.html';
const sharedOptions = { ignoreNeedlesError: true };

describe('SubGenerator client of yellowbricks-client-contextpath JHipster blueprint', () => {
  describe('without contextPath', () => {
    beforeAll(async () => {
      await helpers
        .run(BLUEPRINT_NAMESPACE)
        .withJHipsterConfig()
        .withOptions(sharedOptions)
        .withJHipsterGenerators()
        .withConfiguredBlueprint()
        .withBlueprintConfig();
    });

    it('should succeed', () => {
      expect(result.getStateSnapshot()).toMatchSnapshot();
    });

    it('should not modify base href in index.html', () => {
      const content = result._readFile(INDEX_HTML);
      expect(content).toContain('<base href="/" />');
    });

    it('should not modify base href in swagger-ui/index.html', () => {
      const content = result._readFile(SWAGGER_INDEX_HTML);
      expect(content).toContain('<base href="/swagger-ui/" />');
    });
  });

  describe('with contextPath configured', () => {
    beforeAll(async () => {
      await helpers
        .run(BLUEPRINT_NAMESPACE)
        .withJHipsterConfig()
        .withOptions(sharedOptions)
        .withJHipsterGenerators()
        .withConfiguredBlueprint()
        .withBlueprintConfig({ contextPath: '/jh/' });
    });

    it('should set base href in index.html', () => {
      const content = result._readFile(INDEX_HTML);
      expect(content).toContain('<base href="/jh/" />');
    });

    it('should set base href in swagger-ui/index.html', () => {
      const content = result._readFile(SWAGGER_INDEX_HTML);
      expect(content).toContain('<base href="/jh/swagger-ui/" />');
    });
  });
});
