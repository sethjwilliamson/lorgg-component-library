<template>
  <div
    class="card-item-container"
    @mouseover="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <!-- TODO: Create a global function to get card -->
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
        (isDeckBuilder || userCardQuantity != undefined) && card.collectible
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
      v-if="showDetailsOnHover"
      ref="card-info"
      :class="showRelatedCards ? null : 'card-info'"
    >
      <div v-if="!showRelatedCards">
        <div
          v-if="quantityPossessed !== undefined"
          class="card-info-quantity-possessed"
        >
          {{ 'You have: ' }}
          <b :class="quantityNeededClass">
            {{ quantityPossessed + ' / ' + (quantityNeeded || 3) }}
          </b>
        </div>
        <hr
          v-if="
            quantityPossessed !== undefined &&
            (card.keywordRefs.length > 0 || card.associatedCardRefs.length > 0)
          "
          class="line"
        />

        <div
          v-for="keyword in keywordObjects"
          :key="keyword.nameRef"
          class="card-info-section"
        >
          <h4 class="card-info-title">{{ keyword.name }}</h4>
          <p class="card-info-text">{{ keyword.description }}</p>
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
import { defineComponent, PropType } from 'vue';
import { Instance, Props } from 'tippy.js';
import tippy from 'tippy.js';
import { DataJsonKeyword, SetJsonCard } from '#/jsons';
import { props } from './CardItemProps';

// TODO: Try switching to Composition API
export default defineComponent({
  props: props,
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
    quantityNeededClass(): 'bad' | null {
      if (
        this.quantityNeeded != undefined &&
        this.userCardQuantity != undefined &&
        this.card.cardCode in this.userCardQuantity &&
        this.quantityNeeded > this.userCardQuantity[this.card.cardCode]
      ) {
        return 'bad';
      }

      return null;
    },
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
    showDetailsOnHover(): boolean {
      return (
        this.isRoot &&
        (this.userCardQuantity != undefined ||
          this.card.keywordRefs.length > 0 ||
          this.card.associatedCardRefs.length > 0)
      );
    },
    quantityPossessed(): number {
      if (
        this.userCardQuantity == undefined ||
        !(this.card.cardCode in this.userCardQuantity)
      ) {
        return 0;
      }

      return this.userCardQuantity[this.card.cardCode];
    },
  },
  mounted() {
    if (
      this.userCardQuantity != undefined ||
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
    if (this.card.associatedCardRefs.length > 0) {
      window.removeEventListener('keydown', this.keyUpRelatedCards);
      window.removeEventListener('keyup', this.keyDownRelatedCards);
    }
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
    quantityTickClass: function (index: number) {
      if (this.isDeckBuilder) {
        if (
          !(this.card.cardCode in this.deckList) ||
          index > this.deckList[this.card.cardCode]
        ) {
          return 'disabled';
        }

        return null;
      }

      if (index > this.quantityPossessed) {
        return 'disabled';
      }

      return null;
    },
  },
});
</script>

<style scoped>
.card-item-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  padding-top: 5px;
  padding: 3px;
  position: relative;
}

.card-item-container:hover {
  padding: 0px;
}

.card-item {
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.quantity-ticks-container {
  display: flex;
  margin: 0 auto;
}

.quantity-tick {
  background-color: #0067ee;
  border-radius: 15px;
  height: 10px;
  margin: 3px;
  width: 10px;
}

.card-info {
  width: 20vh;
}

.card-info-section {
  margin-bottom: 10px;
}

.card-info-section:last-child {
  margin-bottom: 0;
}

.card-info-title {
  color: white;
  margin-bottom: 5px;
  margin: 0;
}

.card-info-text {
  color: var(--color-0);
  margin: 0;
}

.line {
  background-color: var(--color-0);
  border: none;
  color: var(--color-0);
  height: 2px;
}

.associated-card-container {
  display: flex;
}

.associated-card {
  width: 20vh;
}
</style>
