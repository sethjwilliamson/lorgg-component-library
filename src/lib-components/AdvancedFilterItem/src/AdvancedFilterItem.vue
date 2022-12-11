<template>
  <div class="advanced-filter-item">
    <MultiSelect
      v-model="advancedAttribute"
      class="advanced-attribute"
      :options="options"
      label="label"
      value-prop="value"
    />
    <div class="equality-button" @click="equalityClick">
      {{ props.filterValue.equality }}
    </div>
    <input
      type="number"
      class="equality-number"
      :value="props.filterValue.number"
      @input="onInputNumber"
    />
  </div>
</template>

<script setup lang="ts">
import MultiSelect from '@vueform/multiselect';
import { MultiSelectOption } from '#/helpers';
import { ref, Ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  AdvancedFilterAttribute,
  AdvancedFilterEquality,
  AdvancedFilterItem,
  advancedFilterItemProps,
  AdvancedFilterItemProps,
} from './types';
const { t } = useI18n();

const props: AdvancedFilterItemProps = defineProps(advancedFilterItemProps);
const emit = defineEmits<{
  (e: 'update:filterValue', value: AdvancedFilterItem): void;
}>();

const options: MultiSelectOption[] = [
  {
    value: 'attack',
    label: t('cards.attack'),
  },
  {
    value: 'health',
    label: t('cards.health'),
  },
  {
    value: 'cost',
    label: t('cards.cost'),
  },
  {
    value: 'quantityOwned',
    label: t('cards.quantityOwned'),
  },
];

const advancedAttribute: Ref<AdvancedFilterAttribute> = ref(
  props.filterValue.attribute,
);

watch(advancedAttribute, () => {
  emit('update:filterValue', {
    attribute: advancedAttribute.value,
    equality: props.filterValue.equality,
    number: props.filterValue.number,
  });
});

function equalityClick() {
  let newEquality: AdvancedFilterEquality = '>';

  if (props.filterValue.equality === '>') {
    newEquality = '<';
  } else if (props.filterValue.equality === '<') {
    newEquality = '=';
  }

  emit('update:filterValue', {
    attribute: props.filterValue.attribute,
    equality: newEquality,
    number: props.filterValue.number,
  });
}

function onInputNumber(e: Event) {
  emit('update:filterValue', {
    attribute: props.filterValue.attribute,
    equality: props.filterValue.equality,
    number: Number((e.target as HTMLInputElement).value),
  });
}
</script>

<style scoped>
.advanced-filter-item {
  display: flex;
  gap: 10px;
  height: 45px;
  justify-content: space-between;
}

.advanced-attribute {
  flex-basis: 0;
  flex-grow: 1;
}

.equality-button {
  align-items: center;
  background-color: var(--color-2);
  border-radius: 25px;
  color: var(--color-primary-2);
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 45px;
  justify-content: center;
  width: 45px;
}

.equality-number {
  align-items: center;
  background-color: var(--color-2);
  border-radius: 25px;
  border: none;
  color: var(--color-primary-2);
  display: flex;
  flex-basis: 0;
  justify-content: center;
  outline: none;
  padding: 0px 10px;
  width: 25px;
}
</style>
