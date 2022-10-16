<template>
  <button ref="button" class="circle-button" @click="uploadDeckToLor">
    <RuneterraIcon></RuneterraIcon>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { copyToClipboard } from '@/helpers/functions';
import tippy, { Instance } from 'tippy.js';
import {
  uploadDeckToLorButtonProps,
  UploadDeckToLorButtonProps,
} from './types';
import { useI18n } from 'vue-i18n';
import RuneterraIcon from '@/lib-components/icons/RuneterraIcon/src/RuneterraIcon.vue';
const { t } = useI18n();

const props: UploadDeckToLorButtonProps = defineProps(
  uploadDeckToLorButtonProps,
);
const button = ref<HTMLElement | null>(null);
let uploadedTippy: Instance;
let uploadButtonTippy: Instance;

onMounted(() => {
  uploadButtonTippy = tippy(button.value as HTMLElement, {
    // TODO: Logged In
    // content: loggedIn ? t('deck.uploadDeckToLor') : t('deck.signInToUpload'),
    content: t('deck.uploadDeckToLor'),
    arrow: true,
  });

  uploadedTippy = tippy(button.value as HTMLElement, {
    content: t('deck.deckUploaded'),
    trigger: 'manual',
    arrow: true,
  });
});

function uploadDeckToLor() {
  console.log('UPLOAD DECK');
  // if (!loggedIn) {
  //   return;
  // }

  // axios.post('/api/user/me/uploadDeckToLor', {
  //   'code': props.deckCode,
  //   'name': "(LOR.GG) " + props.name
  // })
  // .then( (response) => {
  //   uploadedTippy.setContent(t('deck.deckUploaded'))
  //   uploadedTippy.show()
  // })
  // .catch( (error: Erro) => {
  //   if (error.response.status === 401) {
  //     uploadedTippy.setContent("Error - Not Authenticated")
  //     uploadedTippy.show()

  //     return
  //   }

  //   uploadedTippy.setContent("Error (" + error.response.status + ")")
  //   uploadedTippy.show()
  // })
}
</script>

<style scoped>
.circle-button > svg {
  height: 25px;
  width: 25px;
}
</style>
