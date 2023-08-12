<template>
  <tr>
    <td>
      <button
        v-if="row.nestedItems"
        class="expand-button"
        @click="toggleRow(row.id)"
      >
        <FontAwesomeIcon
          :icon="'chevron-right'"
          :class="{ 'chevron-rotate': row.expanded }"
          class="chevron"
        />
      </button>
    </td>
    <td v-for="(col, index) in cols" :key="col.field">
      <slot :name="'column' + index" v-bind="{ value: row[col.field] }">
        <span>{{ row[col.field] }}</span>
      </slot>
    </td>
  </tr>
  <template v-if="row.expanded && row.nestedItems">
    <NestedRow
      v-for="nestedRow in row.nestedItems"
      :key="nestedRow.id"
      :row="nestedRow"
      :cols="cols"
    >
      <template
        v-for="slotName in Object.keys($slots)"
        v-slot:[slotName]="slotProps"
      >
        <slot :name="slotName" v-bind="slotProps"></slot> </template
    ></NestedRow>
  </template>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'NestedRow',
  props: ['row', 'cols'],
  components: { FontAwesomeIcon },
  methods: {
    toggleRow(id) {
      this.row.expanded = !this.row.expanded;
    },
  },
};
</script>

<style>
td {
  min-width: 38.5px;
}
</style>
