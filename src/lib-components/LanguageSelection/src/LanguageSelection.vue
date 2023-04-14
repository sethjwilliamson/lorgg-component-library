<template>
  <div class="language-selection">
    <FontAwesomeIcon
      ref="languageIcon"
      icon="language"
      class="icon"
      @click="onIconClick"
    />
    <!-- TODO: Fix -->
    <ModalItem v-model:show-modal="showModal">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </ModalItem>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import ModalItem from '@/lib-components/ModalItem';

const showModal = ref(false);

function onIconClick() {
  showModal.value = true;
}
</script>

<style scoped>
.language-selection {
  color: var(--color-0);
  font-size: var(--language-selection-size, 25px);
}
</style>
