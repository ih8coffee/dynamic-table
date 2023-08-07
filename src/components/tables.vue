<template>
  <table class="table table-striped table-hover">
    <caption v-if="sortedRows.length === 0">
      No data to display
    </caption>
    <caption>
      {{
        caption
          ? caption
          : `Showing ${sortedRows.length} of ${rows.length} rows`
      }}
    </caption>
    <thead class="thead">
      <tr>
        <th v-for="(col, index) in cols" :key="index">
          <div
            @click="col.sortable && sortable && sortColumn(index)"
            class="no-select header-container"
          >
            <span class="header-title">{{ col.title }}</span>

            <span class="header-icon">
              <FontAwesomeIcon
                v-if="sortingState[index] === 'desc'"
                icon="sort-down"
              />
              <FontAwesomeIcon
                v-if="sortingState[index] === 'asc'"
                icon="sort-up"
              />
              <FontAwesomeIcon
                v-if="
                  sortingState[index] === 'reset' && col.sortable && sortable
                "
                icon="sort"
              />
            </span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedRows" :key="row.id">
        <td v-for="col in cols" :key="col.field">
          <span v-if="!nestedItem(col.field, row)">
            {{ row[col.field] }}
          </span>
          <div
            v-else
            v-for="(nestedValue, nestedKey) in row[col.field]"
            :key="nestedKey"
          >
            {{ nestedKey }}: {{ nestedValue }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { tableSort } from '../scripts/tableSort.js';

const props = defineProps(['cols', 'rows', 'sortable', 'caption']);
const { sortColumn, sortingState, nestedItem, sortedRows } = tableSort(props);
</script>
