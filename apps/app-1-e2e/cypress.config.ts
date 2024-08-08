import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: { default: 'npx nx serve app-1' },
      ciWebServerCommand: 'nx run app-1:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
