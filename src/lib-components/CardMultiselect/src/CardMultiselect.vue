<template>
  <MultiSelect
    v-model="cardCodes"
    class="multiselect"
    :placeholder="t('cards.cards')"
    :mode="props.mode"
    :options="cards"
    :infinite="true"
    :limit="10"
    :searchable="true"
    label="name"
    value-prop="cardCode"
  >
    <!-- <template #tag="{ option, handleTagRemove }">
      <span
        class="multiselect-tag"
        tabindex="-1"
        aria-label="{{option.name}} ❎"
        ><img class="label-icon" :src="`https://lor.gg/${option.regionRefs[0]}.svg`" />
        <span class="multiselect-tag-remove"
          ><span
            class="multiselect-tag-remove-icon"
            @mousedown.prevent="handleTagRemove(option, $event)"
          ></span></span
      ></span>
    </template>

    <template #option="{ option }">
      <img class="label-icon" :src="`https://lor.gg/${option.regionRefs[0]}.svg`" />
      {{ option.name }}
    </template> -->
  </MultiSelect>
</template>

<script setup lang="ts">
import MultiSelect from '@vueform/multiselect';
import { CardMultiselectProps, cardMultiselectProps } from './types';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { useJsonStore } from '@/helpers/stores';
const { t } = useI18n();

const props: CardMultiselectProps = defineProps(cardMultiselectProps);
const emit = defineEmits<{
  (e: 'update:cardCodes', value: string[]): void;
}>();

const cardCodes = ref(props.cardCodes);
let cards = useJsonStore().jsons.cardJson.sort((a, b) =>
  a.name.localeCompare(b.name),
);

if (props.onlyCollectible) {
  cards = cards.filter((x) => x.collectible);
}

watch(cardCodes, () => {
  emit('update:cardCodes', cardCodes.value);
});
</script>

<style scoped>
.multiselect {
  height: 45px;
}
</style>
