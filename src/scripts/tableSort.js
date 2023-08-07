import { ref, computed } from 'vue';

export function tableSort(props) {
  const sortingState = ref(props.cols.map(() => 'reset'));

  const sortColumn = index => {
    const currentSortingState = sortingState.value[index];
    let nextSortingState;

    if (currentSortingState === 'reset') nextSortingState = 'desc';
    else if (currentSortingState === 'desc') nextSortingState = 'asc';
    else nextSortingState = 'reset';

    sortingState.value = sortingState.value.map((v, i) =>
      i === index ? nextSortingState : 'reset'
    );
  };

  const nestedItem = (field, row) =>
    typeof row[field] === 'object' &&
    row[field] !== null &&
    !Array.isArray(row[field]);

  const sortedRows = computed(() => {
    const index = sortingState.value.findIndex(state => state !== 'reset');
    if (index === -1) return props.rows;

    const field = props.cols[index].field;
    const order = sortingState.value[index];

    return [...props.rows].sort((a, b) =>
      a[field] < b[field]
        ? order === 'asc'
          ? -1
          : 1
        : a[field] > b[field]
        ? order === 'asc'
          ? 1
          : -1
        : 0
    );
  });

  return {
    sortColumn,
    sortingState,
    nestedItem,
    sortedRows,
  };
}
