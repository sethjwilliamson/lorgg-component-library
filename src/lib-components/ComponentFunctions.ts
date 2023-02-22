import { Ref } from 'vue';
import { HeadingItem, SortDirection } from './LargeTable/src/types';

export function toggleSort(id: string, headingItems: Ref<HeadingItem[]>) {
  const headingItem = headingItems.value.find((x) => x.id === id);

  if (
    !headingItem ||
    headingItem.sortDirection === SortDirection.NOT_SORTABLE
  ) {
    return;
  }

  const sortDirection = headingItem.sortDirection;
  clearSorts(headingItems);

  if (sortDirection === SortDirection.NEITHER) {
    headingItem.sortDirection = SortDirection.DOWN;
    return;
  }

  if (sortDirection === SortDirection.DOWN) {
    headingItem.sortDirection = SortDirection.UP;
    return;
  }

  headingItem.sortDirection = SortDirection.DOWN;
}

function clearSorts(headingItems: Ref<HeadingItem[]>) {
  headingItems.value.forEach((headingItem) => {
    if (headingItem.sortDirection !== SortDirection.NOT_SORTABLE) {
      headingItem.sortDirection = SortDirection.NEITHER;
    }
  });
}
