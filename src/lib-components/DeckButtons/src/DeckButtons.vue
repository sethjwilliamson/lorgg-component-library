<template>
  <div class="deck-buttons">
    <div class="owned-deck-buttons buttons">
      <DeleteDeckButton
        v-if="props.showButtons.deleteDeck"
        :deck-id="props.deckId"
      ></DeleteDeckButton>
      <!-- TODO: Replace deckIsPrivate, archetypeId, and deckName with real values -->
      <UpdateDeckPrivacyButton
        v-if="props.showButtons.updateDeckPrivacy"
        :deck-id="props.deckId"
        :deck-is-private="false"
      ></UpdateDeckPrivacyButton>
      <EditDeckNameButton
        v-if="props.showButtons.editDeckName"
        :deck-id="props.deckId"
        :deck-name="'todo'"
      ></EditDeckNameButton>
    </div>
    <div class="normal-buttons buttons">
      <GemsCost v-if="props.showButtons.gemsCost" :deck="deck"></GemsCost>
      <!-- TODO: Get ArchetypeId -->
      <OpenArchetypePageButton
        v-if="props.showButtons.openArchetypePage"
        :archetype-id="1"
      ></OpenArchetypePageButton>
      <SimulateMulliganButton
        v-if="props.showButtons.simulateMulligan"
        :deck="deck"
      >
      </SimulateMulliganButton>
      <OpenInDeckBuilderButton
        v-if="props.showButtons.openInDeckBuilder"
        :deck-code="props.deckCode"
      ></OpenInDeckBuilderButton>
      <CopyDeckButton
        v-if="props.showButtons.copyDeckCode"
        :deck-code="props.deckCode"
      ></CopyDeckButton>
      <UploadDeckToLorButton
        v-if="props.showButtons.uploadDeckToLor"
        :deck-code="props.deckCode"
        :deck-name="'todo'"
      ></UploadDeckToLorButton>
      <ShareButton v-if="props.showButtons.shareDeck">{{
        t('deck.shareDeck')
      }}</ShareButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDeckObjectFromCode } from '@/helpers/functions';
import CopyDeckButton from '@/lib-components/Buttons/CopyDeckButton';
import DeleteDeckButton from '@/lib-components/Buttons/DeleteDeckButton';
import EditDeckNameButton from '@/lib-components/Buttons/EditDeckNameButton';
import OpenArchetypePageButton from '@/lib-components/Buttons/OpenArchetypePageButton';
import OpenInDeckBuilderButton from '@/lib-components/Buttons/OpenInDeckBuilderButton';
import SimulateMulliganButton from '@/lib-components/Buttons/SimulateMulliganButton';
import UpdateDeckPrivacyButton from '@/lib-components/Buttons/UpdateDeckPrivacyButton';
import UploadDeckToLorButton from '@/lib-components/Buttons/UploadDeckToLorButton';
import GemsCost from '@/lib-components/GemsCost';
import ShareButton from '@/lib-components/ShareButton';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { DeckButtonsProps, deckButtonsProps } from './types';
const { t } = useI18n();

const props: DeckButtonsProps = defineProps(deckButtonsProps);

const deck = computed(() => {
  return getDeckObjectFromCode(props.deckCode);
});

console.log(deck);
</script>

<style scoped>
.deck-buttons {
  display: flex;
  gap: 30px;
}

.buttons {
  display: flex;
  gap: 10px;
}
</style>
