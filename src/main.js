import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap';
import './assets/base.css';
import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronRight,
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSort, faSortUp, faSortDown, faChevronRight);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
