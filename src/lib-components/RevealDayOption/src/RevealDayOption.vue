<template>
  <div class="reveal-day-option-wrapper">
    <div ref="revealDayOption" class="reveal-day-option" :class="classes">
      <div class="card-wrapper">
        <img :src="RuneterraCardback" alt="card" class="card" />
      </div>
      <div class="card-wrapper">
        <img :src="RuneterraCardback" alt="card" class="card" />
      </div>
      <div class="card-wrapper">
        <img :src="RuneterraCardback" alt="card" class="card" />
      </div>
    </div>
    <div ref="revealDayOptionTippy">
      <TippyText :text="textValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TippyText from '@/lib-components/TippyText';
import tippy from 'tippy.js';
import { computed, inject, onMounted, ref } from 'vue';
import { RevealDayOptionProps, revealDayOptionProps } from './types';
import dayjs from 'dayjs';
import RuneterraCardback from '../../../assets/CardbackRuneterra.webp';

const $dayjs = inject('dayjs') as typeof dayjs;

const props: RevealDayOptionProps = defineProps(revealDayOptionProps);
const revealDayOption = ref<HTMLElement | null>(null);
const revealDayOptionTippy = ref<HTMLElement | null>(null);

const isInPast = computed(() => {
  return props.date.getTime() < new Date().getTime();
});

const textValue = computed(() => {
  if (isInPast.value) {
    return `Revealed Cards
${props.date.toLocaleDateString()}`;
  }

  return `Cards Revealed
${$dayjs(props.date).fromNow()}`;
});

const classes = computed(() => {
  const classes = [];

  if (props.activated) {
    classes.push('activated');
  }

  if (props.soon) {
    classes.push('soon');
  }

  if (isInPast.value) {
    classes.push('past');
  }

  return classes;
});

onMounted(() => {
  tippy(revealDayOption.value as HTMLElement, {
    content: revealDayOptionTippy.value as HTMLElement,
    arrow: true,
  });
});
</script>

<style scoped>
.reveal-day-option {
  --size: 30px;
  background-color: var(--color-primary-2);
  border: var(--color-background-1) 4px solid;
  border-radius: var(--size);
  height: var(--size);
  position: relative;
  width: var(--size);
}

.card-wrapper {
  top: 50%;
  display: none;
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  transform-origin: 50% 100%;
  width: var(--size);
  transition: transform 0.25s;
}

/* .reveal-day-option.soon {
  opacity: 80%;;
} */

.reveal-day-option.soon,
.reveal-day-option.activated,
.reveal-day-option.past {
  background-color: transparent;
  border-color: transparent;
}

.reveal-day-option.soon {
  background: radial-gradient(
    circle,
    rgba(var(--color-gold-rgb), 1) 0%,
    rgba(var(--color-gold-rgb), 0.5) 100%
  );
  box-shadow: 0px 0px 10px 1px rgba(var(--color-gold-rgb), 1);
}

/* .reveal-day-option.soon:hover .card,
.reveal-day-option.soon.activated .card {
  box-shadow: 0px 0px 8px 2px var(--color-gold);
} */

.reveal-day-option.soon .card-wrapper,
.reveal-day-option.activated .card-wrapper,
.reveal-day-option.past .card-wrapper {
  display: unset;
}

.card {
  width: var(--size);
  transition: transform 0.25s;
}

.reveal-day-option.activated > .card-wrapper:nth-child(1),
.reveal-day-option:hover > .card-wrapper:nth-child(1) {
  transform: translateY(-50%) rotateZ(30deg);
}

.reveal-day-option.activated > .card-wrapper:nth-child(3),
.reveal-day-option:hover > .card-wrapper:nth-child(3) {
  transform: translateY(-50%) rotateZ(-30deg);
}

.reveal-day-option.activated .card,
.reveal-day-option:hover .card {
  transform: translateY(-10%);
}
</style>
