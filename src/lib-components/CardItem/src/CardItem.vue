<template>
    <div class="card-item-container"
    @mouseover="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <img
      :alt="card.name"
      class="card-item"
      :class="cardImageClass"
      ref="card-item"
      :src="'https://lor.gg/storage/cards/card/' + 'en_us' + '/' + card.cardCode + '.webp'"
      v-on:click="handleCardClick"
    />

    <div class="quantity-ticks-container" v-if="(isDeckBuilder || card.quantityPossessed !== undefined) && !hideQuantity">
      <div v-for="i in 3" class="quantity-tick" :key="i" :class="quantityTickClass(i)"></div>
    </div>
    
    <div v-if="card.quantityPossessed !== undefined || card.keywordRefs.length > 0 || card.associatedCardRefs.length > 0" :class="showRelatedCards ? null : 'card-info'" ref="card-info">
      <div v-if="!showRelatedCards">
        <div class="card-info-quantity-possessed" v-if="card.quantityPossessed !== undefined">
          {{ "You have: " }}
          <b :class="quantityNeededClass">
            {{card.quantityPossessed + " / " + (quantityNeeded || 3) }}
          </b>
        </div>
        <hr class="line" v-if="card.quantityPossessed !== undefined && (card.keywordRefs.length > 0 || card.associatedCardRefs.length > 0)"/>

        <div class="card-info-section" v-for="keyword in keywordObjects" :key="keyword.nameRef">
          <h4 class="card-info-title" v-html="keyword.name"> </h4>
          <p class="card-info-text" v-html="keyword.description"> </p>
        </div>

        <hr class="line" v-if="card.keywordRefs.length > 0 && card.associatedCardRefs.length > 0"/>

        <div class="card-info-text" v-if="card.associatedCardRefs.length > 0">
          {{"Hold Shift to see Associated Cards"}}
        </div>
      </div>
      <div v-else class="associated-card-container">
        <card-item v-for="associatedCard in associatedCards" :cardProp="associatedCard" :isDeckBuilder="false" :key="associatedCard.cardCode" :isRoot="false" class="associated-card"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  { Instance, Props, } from 'tippy.js'
import tippy from 'tippy.js'
import { DataJsonKeyword, SetJsonCard } from '#/jsons'

export default defineComponent({
  props: {
    cardProp: {
      type: Object as () => SetJsonCard,
      required: false,
    },
    cardCodeProp: {
      type: String,
      required: false
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
      default: false
    },
    isRoot: {
      type: Boolean,
      required: true,
    },
    quantityNeeded: {
      type: Number,
      required: false
    },
  },
  computed: {
    card(): SetJsonCard {
      console.log(this.setJson)
      console.log(this.dataJson)
      if ( this.cardProp ) {
        return this.cardProp
      }

      if ( !this.cardCodeProp ) {
        throw new Error("CardProp or CardCodeProp must be defined.")
      }

      return this.setJsonObject[this.cardCodeProp]
    },
    // quantityNeededClass() {
    //   if (this.quantityNeeded != undefined && this.card.quantityPossessed != undefined && this.quantityNeeded > this.card.quantityPossessed) {
    //     return "bad"
    //   }
    // },
    associatedCards(): Array<SetJsonCard> {      
      let associatedCards = []

      if (this.isRoot) {
        for (let associatedCardCode of this.card.associatedCardRefs) {
          associatedCards.push(this.setJsonObject[associatedCardCode])
        }
      }

      return associatedCards
    },
    keywordObjects(): Array<DataJsonKeyword> {
      let keywordObjects = []

      for (let keywordRef of this.card.keywordRefs) {
        let keywordObject = this.dataJson.keywords.find( x => x.nameRef === keywordRef )

        if (keywordObject) {
          keywordObjects.push(keywordObject)
        }
      }

      return keywordObjects
    }
  },
  data() {
    return {
      mouseOver: false,
      cardItemTippy: null as Instance<Props> | null,
      showRelatedCards: false,
    }
  },
  mounted() {
    // this.card.quantityPossessed !== undefined || 
    if (this.card.keywordRefs.length > 0 || this.card.associatedCardRefs.length > 0) {
      this.cardItemTippy = tippy(this.$refs["card-item"] as Element, {
        allowHTML: true,
        content: this.$refs["card-info"] as HTMLElement,
        placement: "right-start",
        duration: 0,
        role: "card-info",
        maxWidth: "50vw"
      });
      
    }

    if (this.card.associatedCardRefs.length > 0) {
      this.keyUpRelatedCards()
      this.keyDownRelatedCards()
    }
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyUpRelatedCards);
    window.removeEventListener('keyup', this.keyDownRelatedCards);
  },
  methods: {
    forceShowTippy: function(isRight: boolean) {
      if (this.cardItemTippy) {
        this.cardItemTippy.setProps({
          //placement: (isRight ? "right" : "left") + "-start"
        })
        this.cardItemTippy.show()
      }
    },
    forceHideTippy: function() {
      if (this.cardItemTippy) {
        this.cardItemTippy.hide()
      }
    },
    keyUpRelatedCards: function() {
      window.addEventListener('keyup', (e) => {
        if (e.key == "Shift") {
          this.showRelatedCards = false
        }
      })
    },
    keyDownRelatedCards: function() {
      window.addEventListener('keydown', (e) => {
        if (e.key == "Shift") {
          this.showRelatedCards = true
        }
      })
    },
  }
})
</script>

<style scoped>

</style>