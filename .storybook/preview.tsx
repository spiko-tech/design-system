/// <reference types="vite/client" />
import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/global.css';

const preview: Preview = {
  decorators: [withThemeByClassName({ themes: { light: 'light', dark: 'dark' }, defaultTheme: 'light' })],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: ['Introduction', 'UI', 'Inputs', 'Feedback', 'Overlay', 'Data', 'Icons', 'Logos', 'Tokens'],
      },
    },
  },
};

export default preview;
