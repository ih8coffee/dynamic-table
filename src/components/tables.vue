<template>
  <table class="table table-striped table-hover">
    <caption v-if="!sortedRows.length">
      No data to display
    </caption>
    <caption>
      {{
        caption || `Showing ${sortedRows.length} of ${rows.length} rows`
      }}
    </caption>
    <thead class="thead">
      <tr>
        <th></th>
        <th v-for="(col, index) in cols" :key="index">
          <div
            @click="col.sortable && sortable && sortColumn(index)"
            class="no-select header-container"
          >
            <slot :name="'header' + index" :value="col.title">
              <span class="header-title">{{ col.title }}</span>
            </slot>
            <span class="header-icon">
              <FontAwesomeIcon
                v-if="col.sortable && sortable"
                :icon="
                  sortingState[index] === 'desc'
                    ? 'sort-down'
                    : sortingState[index] === 'asc'
                    ? 'sort-up'
                    : 'sort'
                "
              />
            </span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <NestedRow
        v-for="row in sortedRows"
        :key="row.id"
        :row="row"
        :cols="cols"
      >
        <template
          v-for="slotName in Object.keys($slots)"
          v-slot:[slotName]="slotProps"
        >
          <slot :name="slotName" v-bind="slotProps"></slot>
        </template>
      </NestedRow>
    </tbody>
  </table>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { tableSort } from '../scripts/tableSort.js';
import NestedRow from './NestedRow.vue';

const props = defineProps(['cols', 'rows', 'sortable', 'caption']);
const { sortColumn, sortingState, sortedRows } = tableSort(props);
</script>

<style>
/* Styles for the main table component */
</style>
