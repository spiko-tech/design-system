import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { mergeConfig } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Landing Netlify subpath (`/design-system/`). Local `pnpm storybook` keeps `/`.
 * spiko-landing sets STORYBOOK_BASE_PATH at build time.
 */
const rawBase = process.env.STORYBOOK_BASE_PATH?.trim() || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Do not add @vitejs/plugin-react again — Storybook's react-vite framework
    // already injects it; a second copy throws RefreshRuntime redeclaration.
    return mergeConfig(config, {
      base,
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@': path.resolve(dirname, '../src'),
        },
      },
    });
  },
};

export default config;
