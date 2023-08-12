<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a
          class="page-link"
          href="#"
          @click.prevent="changePage(currentPage - 1)"
          :aria-disabled="currentPage === 1"
        >
          Previous
        </a>
      </li>
      <li class="page-item disabled">
        <span class="page-link">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a
          class="page-link"
          href="#"
          @click.prevent="changePage(currentPage + 1)"
          :aria-disabled="currentPage === totalPages"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const emit = defineEmits(['update:data']);
const props = defineProps({
  totalItems: Number,
  itemsPerPage: Number,
  rows: Array,
});

const currentPage = ref(1);
const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);

const changePage = newPage => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;

    const start = (currentPage.value - 1) * props.itemsPerPage;
    const paginatedData = props.rows.slice(start, start + props.itemsPerPage);

    emit('update:data', paginatedData);
  }
};

onMounted(() => {
  changePage(currentPage.value);
});
</script>
