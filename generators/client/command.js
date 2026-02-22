import { asCommand } from 'generator-jhipster';

export default asCommand({
  configs: {
    contextPath: {
      description: 'Context path to set as base href in index.html and swagger-ui/index.html (e.g. /jh/)',
      cli: {
        type: String,
      },
      scope: 'blueprint',
    },
  },
});
