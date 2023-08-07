import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

library.add(faSort, faSortUp, faSortDown);

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3-vite',
  docs: {
    autodocs: 'tag',
  },
};
