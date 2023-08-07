<template>
  <div>
    <tables
      :cols="columns"
      :rows="paginatedData"
      :sortable="true"
      :caption="`Showing ${paginatedData.length} of ${
        Object.keys(this.allData.rows).length
      } rows`"
    />
    <pagination
      :totalItems="Object.keys(allData.rows).length"
      :itemsPerPage="5"
      :rows="allData.rows"
      @update:data="updateData"
    />
  </div>
</template>

<script>
import tables from './components/tables.vue';
import pagination from './components/pagination.vue';
import exampleData from './example.json';

export default {
  components: {
    tables,
    pagination,
  },
  data() {
    return {
      allData: exampleData,
      paginatedData: [],
      columns: exampleData.columns,
    };
  },
  methods: {
    updateData(newData) {
      this.paginatedData = newData;
    },
  },
};
</script>
