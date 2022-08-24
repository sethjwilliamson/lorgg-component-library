<template>
  <div
    class="card-item-container"
    @mouseover="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <img
      ref="card-item"
      :alt="card.name"
      class="card-item"
      :class="cardImageClass"
      :src="
        'https://lor.gg/storage/cards/card/' +
        'en_us' +
        '/' +
        card.cardCode +
        '.webp'
      "
      @click="handleCardClick"
    />

    <div
      v-if="
        (isDeckBuilder || card.quantityPossessed !== undefined) && !hideQuantity
      "
      class="quantity-ticks-container"
    >
      <div
        v-for="i in 3"
        :key="i"
        class="quantity-tick"
        :class="quantityTickClass(i)"
      ></div>
    </div>

    <div
      v-if="
        card.quantityPossessed !== undefined ||
        card.keywordRefs.length > 0 ||
        card.associatedCardRefs.length > 0
      "
      ref="card-info"
      :class="showRelatedCards ? null : 'card-info'"
    >
      <div v-if="!showRelatedCards">
        <div
          v-if="card.quantityPossessed !== undefined"
          class="card-info-quantity-possessed"
        >
          {{ 'You have: ' }}
          <b :class="quantityNeededClass">
            {{ card.quantityPossessed + ' / ' + (quantityNeeded || 3) }}
          </b>
        </div>
        <hr
          v-if="
            card.quantityPossessed !== undefined &&
            (card.keywordRefs.length > 0 || card.associatedCardRefs.length > 0)
          "
          class="line"
        />

        <div
          v-for="keyword in keywordObjects"
          :key="keyword.nameRef"
          class="card-info-section"
        >
          <h4 class="card-info-title" v-html="keyword.name"></h4>
          <p class="card-info-text" v-html="keyword.description"></p>
        </div>

        <hr
          v-if="
            card.keywordRefs.length > 0 && card.associatedCardRefs.length > 0
          "
          class="line"
        />

        <div v-if="card.associatedCardRefs.length > 0" class="card-info-text">
          {{ 'Hold Shift to see Associated Cards' }}
        </div>
      </div>
      <div v-else class="associated-card-container">
        <card-item
          v-for="associatedCard in associatedCards"
          :key="associatedCard.cardCode"
          :card-prop="associatedCard"
          :is-deck-builder="false"
          :is-root="false"
          class="associated-card"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Instance, Props } from 'tippy.js';
import tippy from 'tippy.js';
import { DataJsonKeyword, SetJsonCard } from '#/jsons';

export default defineComponent({
  props: {
    cardProp: {
      type: Object as () => SetJsonCard,
      required: false,
    },
    cardCodeProp: {
      type: String,
      required: false,
    },
    isDeckBuilder: {
      type: Boolean,
      required: true,
    },
    isSimulateMulligan: {
      type: Boolean,
      required: true,
    },
    hideQuantity: {
      type: Boolean,
      required: true,
      default: false,
    },
    isRoot: {
      type: Boolean,
      required: true,
    },
    quantityNeeded: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      mouseOver: false,
      cardItemTippy: null as Instance<Props> | null,
      showRelatedCards: false,
    };
  },
  computed: {
    card(): SetJsonCard {
      console.log(this.setJson);
      console.log(this.dataJson);
      if (this.cardProp) {
        return this.cardProp;
      }

      if (!this.cardCodeProp) {
        throw new Error('CardProp or CardCodeProp must be defined.');
      }

      return this.setJsonObject[this.cardCodeProp];
    },
    // quantityNeededClass() {
    //   if (this.quantityNeeded != undefined && this.card.quantityPossessed != undefined && this.quantityNeeded > this.card.quantityPossessed) {
    //     return "bad"
    //   }
    // },
    associatedCards(): Array<SetJsonCard> {
      const associatedCards = [];

      if (this.isRoot) {
        for (const associatedCardCode of this.card.associatedCardRefs) {
          associatedCards.push(this.setJsonObject[associatedCardCode]);
        }
      }

      return associatedCards;
    },
    keywordObjects(): Array<DataJsonKeyword> {
      const keywordObjects = [];

      for (const keywordRef of this.card.keywordRefs) {
        const keywordObject = this.dataJson.keywords.find(
          (x) => x.nameRef === keywordRef,
        );

        if (keywordObject) {
          keywordObjects.push(keywordObject);
        }
      }

      return keywordObjects;
    },
  },
  mounted() {
    // this.card.quantityPossessed !== undefined ||
    if (
      this.card.keywordRefs.length > 0 ||
      this.card.associatedCardRefs.length > 0
    ) {
      this.cardItemTippy = tippy(this.$refs['card-item'] as Element, {
        allowHTML: true,
        content: this.$refs['card-info'] as HTMLElement,
        placement: 'right-start',
        duration: 0,
        role: 'card-info',
        maxWidth: '50vw',
      });
    }

    if (this.card.associatedCardRefs.length > 0) {
      this.keyUpRelatedCards();
      this.keyDownRelatedCards();
    }
  },
  unmounted() {
    window.removeEventListener('keydown', this.keyUpRelatedCards);
    window.removeEventListener('keyup', this.keyDownRelatedCards);
  },
  methods: {
    forceShowTippy: function (isRight: boolean) {
      if (this.cardItemTippy) {
        this.cardItemTippy.setProps({
          placement: isRight ? 'right-start' : 'left-start',
        });
        this.cardItemTippy.show();
      }
    },
    forceHideTippy: function () {
      if (this.cardItemTippy) {
        this.cardItemTippy.hide();
      }
    },
    keyUpRelatedCards: function () {
      window.addEventListener('keyup', (e) => {
        if (e.key == 'Shift') {
          this.showRelatedCards = false;
        }
      });
    },
    keyDownRelatedCards: function () {
      window.addEventListener('keydown', (e) => {
        if (e.key == 'Shift') {
          this.showRelatedCards = true;
        }
      });
    },
  },
});
</script>

<style scoped></style>
