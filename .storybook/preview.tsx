import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/vendor/ui-utils/styles/global.css';

const preview: Preview = {
  decorators: [withThemeByClassName({ themes: { light: 'light', dark: 'dark' }, defaultTheme: 'light' })],
  parameters: { controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } } },
};

export default preview;
