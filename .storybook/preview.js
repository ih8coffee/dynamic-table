/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

library.add(faSort, faSortUp, faSortDown);

export default preview;

// .storybook/preview.js
import 'bootstrap/dist/css/bootstrap.min.css';

// Only import this if you want to use Bootstrap's
// JQuery helpers
import 'bootstrap/dist/js/bootstrap.bundle';

import '../src/assets/base.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
