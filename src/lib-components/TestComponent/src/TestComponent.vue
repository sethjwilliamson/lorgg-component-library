<template>
  <div>
    <h1>TestComponent</h1>
  </div>
</template>

<script lang="ts">
import { getDeckObjectFromCode, getRegionsQuantity } from '@/helpers/functions';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  mounted() {
    const deck = getDeckObjectFromCode(
      'EUAACAIEA54Q6AIGBECACBQKF4AQIBQGAECAOUYBAECBWAICAYKACAIFFUAQIBAOAIDAOBJIAIDAYBIIAIDAMGY5AMDAEGI4EIBQMAYTC4RAGBQABIMCQAYGAUBQMHY',
    );
    console.log(deck);

    console.log(getRegionsQuantity(deck));
  },
});
</script>

<style scoped></style>
