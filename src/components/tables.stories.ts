import { Meta, Story } from '@storybook/vue3';
import Tables from './tables.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

export default {
  title: 'Tables',
  component: Tables,
} as Meta;

const Template: Story = args => ({
  components: { Tables, FontAwesomeIcon },
  setup() {
    const faSortIcon = ref(faSort);
    const faSortUpIcon = ref(faSortUp);
    const faSortDownIcon = ref(faSortDown);

    return { args, faSortIcon, faSortUpIcon, faSortDownIcon };
  },
  template: `
    <Tables v-bind="args">
      <template #header="{ col, sortable, sortColumn, sortingState }">
        <div
          @click="col.sortable && sortable && sortColumn(col.field)"
          class="no-select header-container"
        >
          <span class="header-title">{{ col.title }}</span>

          <span class="header-icon">
            <FontAwesomeIcon
              v-if="sortingState[col.field] === 'desc'"
              :icon="faSortDownIcon"
            />
            <FontAwesomeIcon
              v-if="sortingState[col.field] === 'asc'"
              :icon="faSortUpIcon"
            />
            <FontAwesomeIcon
              v-if="sortingState[col.field] === 'reset' && col.sortable && sortable"
              :icon="faSortIcon"
            />
          </span>
        </div>
      </template>
    </Tables>
  `,
});

export const Default = Template.bind({});
Default.args = {
  cols: [
    { title: 'ID', field: 'id', sortable: true },
    { title: 'Name', field: 'name', sortable: true },
    { title: 'Email', field: 'email', sortable: true },
    { title: 'Phone', field: 'phone', sortable: true },
  ],
  rows: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '555-555-5555',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '555-555-5555',
    },
    {
      id: 3,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '555-555-5555',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-555-5555',
    },
  ],
  sortable: true,
  caption: 'My Table',
};
