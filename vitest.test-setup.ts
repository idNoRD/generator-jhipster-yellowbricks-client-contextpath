import { fileURLToPath } from 'node:url';

import { defineDefaults } from 'generator-jhipster/testing';

defineDefaults({
  blueprint: 'generator-jhipster-yellowbricks-client-contextpath',
  blueprintPackagePath: fileURLToPath(new URL('./', import.meta.url)),
});
