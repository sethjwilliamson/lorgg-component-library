<template>
  <BarChart ref="chart" :chart-data="testData" :options="options" />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import {
  ManaCurveChartData,
  manaCurveChartProps,
  ManaCurveChartProps,
} from './types';
import { BarChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useI18n } from 'vue-i18n';
import {
  getDeckObjectFromCode,
  getRegionColorOfRegionRef,
  getRegionNameOfRegionRef,
  getRegionsFromDeck,
  regionOfCard,
} from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
const { t } = useI18n();

const chart = ref<InstanceType<typeof BarChart>>();
const store = useJsonStore();

Chart.register(...registerables);
Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

const props: ManaCurveChartProps = defineProps(manaCurveChartProps);

const borderRadiusAllCorners = {
  topLeft: 9999,
  topRight: 9999,
  bottomLeft: 9999,
  bottomRight: 9999,
};

const labels: ComputedRef<Array<string>> = computed(() => {
  return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];
});

const regionDataSet: ComputedRef<ManaCurveChartData> = computed(() => {
  const returnValue: ManaCurveChartData = {};

  const deck = getDeckObjectFromCode(props.deckCode);
  const regions = getRegionsFromDeck(deck);

  for (const region of regions) {
    returnValue[region] = labels.value.map(() => 0);
  }

  for (const cardCode in deck) {
    const card = store.jsons.cardJsonObject[cardCode];
    const region = regionOfCard(card, regions);

    if (card.cost > 10) {
      returnValue[region][10] += deck[cardCode];
      continue;
    }

    returnValue[region][card.cost] += deck[cardCode];
  }

  return returnValue;
});

const testData: ComputedRef<ChartData<'bar'>> = computed(() => {
  const datasets = [];

  for (let i = 0; i < Object.keys(regionDataSet.value).length; i++) {
    const regionKey = Object.keys(regionDataSet.value)[i];

    datasets.push(
      {
        backgroundColor: getRegionColorOfRegionRef(regionKey),
        data: regionDataSet.value[regionKey],
        borderRadius: borderRadiusAllCorners,
        borderSkipped: false,
        label: getRegionNameOfRegionRef(regionKey),
      },
      {
        backgroundColor: 'transparent',
        data: regionDataSet.value[regionKey].map((x) => (x > 0 ? 1 : 0)),
      },
    );
  }

  return {
    labels: labels.value,
    datasets: datasets,
  };
});

const options: ChartOptions<'bar'> = {
  responsive: true,
  animation: props.animation,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: props.tooltipsEnabled,
      mode: 'index',
      intersect: false,
      filter(tooltipItem) {
        return (
          tooltipItem.datasetIndex % 2 === 0 &&
          tooltipItem.formattedValue !== '0'
        );
      },
      callbacks: {
        title(tooltipItems) {
          if (tooltipItems.length === 0) {
            return '';
          }

          return t('deck.numManaCards', {
            num: tooltipItems[0].label === '+' ? '10+' : tooltipItems[0].label,
          });
        },
        footer(tooltipItems) {
          if (tooltipItems.length === 0) {
            return '';
          }
          let sum = 0;

          for (let i = 0; i < tooltipItems[0].chart.data.datasets.length; i++) {
            if (i % 2 === 1) {
              continue;
            }

            sum += tooltipItems[0].chart.data.datasets[i].data[
              tooltipItems[0].dataIndex
            ] as number;
          }

          return `${t('general.total')}: ${sum}`;
        },
      },
    },
    datalabels: {
      align: 'end',
      anchor: 'end',
      offset: props.dataLabelsOffset,
      formatter(value, context: Context) {
        let sum = 0;

        for (let i = 0; i < context.chart.data.datasets.length; i++) {
          if (i % 2 === 1) {
            continue;
          }

          sum += context.chart.data.datasets[i].data[
            context.dataIndex
          ] as number;
        }

        return sum || '';
      },
      display(context) {
        if (!props.showDataLabels) {
          return false;
        }

        return context.datasetIndex === context.chart.data.datasets.length - 1;
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      display: props.displayXScale,
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      display: false,
    },
  },
  layout: {
    padding: {
      top: props.paddingTop,
    },
  },
};
</script>

<style scoped></style>
