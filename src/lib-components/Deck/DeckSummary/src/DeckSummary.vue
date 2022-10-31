<template>
  <div class="deck-summary">
    <!-- TODO: Change icon links -->
    <div class="deck-cards">
      <div class="champions-landmarks column">
        <div v-if="champions.length > 0" class="type">
          <div class="type-heading">
            <img class="icon" src="https://lor.gg/images/champion.svg" />
            <div v-t="'general.champions'" class="title" />
            <p class="type-quantity">
              {{ typeQuantity(champions) }}
            </p>
          </div>
          <div class="card-container">
            <CardSliceItem
              v-for="card of champions"
              :key="card.cardCode"
              :card-prop="card"
              :color="getRegionColorOfCard(card, regions)"
              :name="card.name"
              :mana-number="card.cost"
              :quantity-number="props.deck[card.cardCode]"
              :maintain-aspect-ratio="true"
            />
          </div>
        </div>
        <div v-if="landmarks.length > 0" class="type column">
          <div class="type-heading">
            <img class="icon" src="https://lor.gg/images/landmark.svg" />
            <div v-t="'general.landmarks'" class="title" />
            <p class="type-quantity">
              {{ typeQuantity(landmarks) }}
            </p>
          </div>
          <div class="card-container">
            <CardSliceItem
              v-for="card of landmarks"
              :key="card.cardCode"
              :card-prop="card"
              :color="getRegionColorOfCard(card, regions)"
              :name="card.name"
              :mana-number="card.cost"
              :quantity-number="props.deck[card.cardCode]"
              :maintain-aspect-ratio="true"
            />
          </div>
        </div>
        <div v-if="equipment.length > 0" class="type column">
          <div class="type-heading">
            <img class="icon" src="https://lor.gg/images/equipment.svg" />
            <div v-t="'general.equipments'" class="title" />
            <p class="type-quantity">
              {{ typeQuantity(equipment) }}
            </p>
          </div>
          <div class="card-container">
            <CardSliceItem
              v-for="card of equipment"
              :key="card.cardCode"
              :card-prop="card"
              :color="getRegionColorOfCard(card, regions)"
              :name="card.name"
              :mana-number="card.cost"
              :quantity-number="props.deck[card.cardCode]"
              :maintain-aspect-ratio="true"
            />
          </div>
        </div>
      </div>

      <div v-if="followers.length > 0" class="type column">
        <div class="type-heading">
          <img class="icon" src="https://lor.gg/images/follower.svg" />
          <div v-t="'general.followers'" class="title" />
          <p class="type-quantity">
            {{ typeQuantity(followers) }}
          </p>
        </div>
        <div class="card-container">
          <CardSliceItem
            v-for="card of followers"
            :key="card.cardCode"
            :card-prop="card"
            :color="getRegionColorOfCard(card, regions)"
            :name="card.name"
            :mana-number="card.cost"
            :quantity-number="props.deck[card.cardCode]"
            :maintain-aspect-ratio="true"
          />
        </div>
      </div>
      <div v-if="spells.length > 0" class="type">
        <div class="type-heading">
          <img class="icon" src="https://lor.gg/images/spell.svg" />
          <div v-t="'general.spells'" class="title" />
          <p class="type-quantity">
            {{ typeQuantity(spells) }}
          </p>
        </div>
        <div class="card-container">
          <CardSliceItem
            v-for="card of spells"
            :key="card.cardCode"
            :card-prop="card"
            :color="getRegionColorOfCard(card, regions)"
            :name="card.name"
            :mana-number="card.cost"
            :quantity-number="props.deck[card.cardCode]"
            :maintain-aspect-ratio="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardJsonCard } from '#/jsons';
import { getRegionColorOfCard, getRegions } from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import CardSliceItem from '@/lib-components/CardSliceItem';
import { computed, ComputedRef } from 'vue';
import { deckSummaryProps, DeckSummaryProps } from './types';

const props: DeckSummaryProps = defineProps(deckSummaryProps);
const cardJsonObject = useJsonStore().jsons.cardJsonObject;

const cards: ComputedRef<Array<CardJsonCard>> = computed(() => {
  return Object.keys(props.deck)
    .map((x) => cardJsonObject[x])
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => a.cost - b.cost);
});
const regions: ComputedRef<Array<string>> = computed(() => {
  return getRegions(props.deck);
});

const champions: ComputedRef<Array<CardJsonCard>> = computed(() => {
  return cards.value.filter(
    (x) => x.typeRef === 'Unit' && x.supertype === 'Champion',
  );
});
const followers: ComputedRef<Array<CardJsonCard>> = computed(() => {
  return cards.value.filter((x) => x.typeRef === 'Unit' && x.supertype === '');
});
const spells: ComputedRef<Array<CardJsonCard>> = computed(() => {
  return cards.value.filter((x) => x.typeRef === 'Spell');
});
const landmarks: ComputedRef<Array<CardJsonCard>> = computed(() => {
  return cards.value.filter((x) => x.typeRef === 'Landmark');
});
const equipment: ComputedRef<Array<CardJsonCard>> = computed(() => {
  return cards.value.filter((x) => x.typeRef === 'Equipment');
});

function typeQuantity(cardArray: Array<CardJsonCard>) {
  return cardArray.reduce((prevValue, currValue) => {
    return prevValue + props.deck[currValue.cardCode];
  }, 0);
}
</script>

<style scoped>
.deck-cards {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

.type-container {
  flex-grow: 1;
}

.type {
  flex-grow: 1;
  max-width: 400px;
  width: auto;
}

.type-heading {
  align-items: center;
  display: flex;
  font-family: sans-serif;
  font-weight: var(--font-weight-light);
  gap: 10px;
  height: 20px;
  justify-content: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  width: auto;
}

.icon {
  width: 20px;
}

.type-quantity {
  color: var(--color-gold);
  font-weight: var(--font-weight-bold);
  font-style: normal;
}

.title {
  color: var(--color-primary-2);
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  margin: 0;
  text-align: center;
}

.card-container {
  display: grid;
  grid-gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 992px) {
  .deck-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .deck-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
