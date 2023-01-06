<template>
  <div ref="gemsCostDiv" class="gems-cost">
    <ShardsIcon class="shards-icon"></ShardsIcon>
    <div class="gems-text">
      {{
        (gemsCostPersonal !== null
          ? gemsCostPersonal
          : gemsCost
        )?.toLocaleString()
      }}
    </div>

    <div ref="gemsCostTippyDiv" class="gems-cost-tippy">
      <template v-if="gemsCostPersonal">
        <div class="gems-cost-title">
          {{ t('deck.personalCost') }}
        </div>
        <div class="gems-cost-value">
          {{ gemsCostPersonal?.toLocaleString() }}
        </div>
        <hr class="divider" />
      </template>
      <div class="gems-cost-title">
        {{ t('deck.originalCost') }}
      </div>
      <div class="gems-cost-value">
        {{ gemsCost?.toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getGemsCost } from '@/helpers/functions';
import ShardsIcon from '@/lib-components/icons/ShardsIcon';
import tippy from 'tippy.js';
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { GemsCostProps, gemsCostProps } from './types';
const { t } = useI18n();

const props: GemsCostProps = defineProps(gemsCostProps);

const gemsCostDiv = ref<HTMLDivElement | null>(null);
const gemsCostTippyDiv = ref<HTMLDivElement | null>(null);

const gemsCost = computed(() => {
  return getGemsCost(props.deck, false);
});
const gemsCostPersonal = computed(() => {
  return getGemsCost(props.deck, true);
});

onMounted(() => {
  tippy(gemsCostDiv.value as HTMLDivElement, {
    content: gemsCostTippyDiv.value as HTMLDivElement,
    arrow: true,
    duration: 0,
  });
});
</script>

<style scoped>
.gems-cost {
  align-items: center;
  background-color: var(--color-3);
  border-radius: 45px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  height: 45px;
  padding: 10px 20px;
}

.shards-icon {
  height: 100%;
}

.gems-text {
  color: var(--color-primary-2);
  font-size: 16px;
}

.gems-cost-title {
  font-weight: 600;
  margin-bottom: 2px;
  text-align: center;
}

.gems-cost-value {
  text-align: center;
}
</style>
