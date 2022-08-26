<template>
  <div class="card-item-link-wrapper">
    <div class="card-item-wrapper" v-if="!isDeckBuilder">
      <a href="https://lor.gg">
        <card-item v-bind="$props"></card-item>
      </a>
    </div>
    <div class="card-item-wrapper" v-else>
      <card-item v-bind="$props"></card-item>
      <a class="link-icon-link" href="https://lor.gg">
        <div class="link-icon">
          <info-icon></info-icon>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { props } from '@/lib-components/CardItem/src/CardItemProps';
import { defineComponent } from 'vue';
import CardItem from '@/lib-components/CardItem/src/CardItem.vue';
import InfoIcon from '@/lib-components/icons/InfoIcon/src/InfoIcon.vue';

export default defineComponent({
  props: props,
  components: { CardItem, InfoIcon },
});
</script>

<style scoped>
.card-item-wrapper {
  position: relative;
}

.link-icon {
  height: 10vh;
  max-height: 50px;
  max-width: 50px;
  position: absolute;
  right: 5%;
  top: 5%;
  width: 10vh;
}

.link-icon-link {
  display: none;
}

.card-item-wrapper:hover > .link-icon-link {
  display: flex;
}
</style>
