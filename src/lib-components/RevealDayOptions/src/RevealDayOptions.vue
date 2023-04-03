<template>
  <div class="reveal-day-options">
    <div class="line"></div>
    <RevealDayOption
      v-for="(day, index) in props.days"
      :key="index"
      :date="day.date"
      :activated="day.activated"
      :soon="day.soon"
      @click="handleClick(index)"
    />
  </div>
</template>

<script setup lang="ts">
import RevealDayOption from '@/lib-components/RevealDayOption';
import { RevealDayOptionProps } from '@/lib-components/RevealDayOption/src/types';
import { RevealDayOptionsProps, revealDayOptionsProps } from './types';

const props: RevealDayOptionsProps = defineProps(revealDayOptionsProps);
const emit = defineEmits<{
  (e: 'update:days', value: RevealDayOptionProps[]): void;
}>();

function handleClick(index: number) {
  const newDays = props.days.map((x) => {
    return {
      activated: false,
      date: x.date,
      soon: x.soon,
    };
  });

  if (
    !newDays[index].soon &&
    newDays[index].date.getTime() > new Date().getTime()
  ) {
    return;
  }

  newDays[index].activated = true;

  console.log(newDays);

  emit('update:days', newDays);
}
</script>

<style scoped>
.reveal-day-options {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 5px;
  background-color: var(--color-background-0);
  border-radius: 10px;
}
</style>
