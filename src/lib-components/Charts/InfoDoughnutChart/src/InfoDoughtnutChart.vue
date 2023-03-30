<template>
  <DoughnutChart ref="chart" :chart-data="testData" :options="options" />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import {
  InfoDoughtnutChartData,
  InfoDoughtnutChartProps,
  infoDoughtnutChartProps,
} from './types';
import { DoughnutChart } from 'vue-chart-3';
import {
  Chart,
  ChartData,
  ChartOptions,
  LegendItem,
  registerables,
} from 'chart.js';
import { ObjectWithNumber } from '#/helpers';
import { getCssVarValue, getDeckObjectFromCode } from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import { DataJsonRarity, DataJsonType } from '#/jsons';

const chart = ref<HTMLCanvasElement | null>(null);
const store = useJsonStore();

Chart.register(...registerables);

const props: InfoDoughtnutChartProps = defineProps(infoDoughtnutChartProps);

const testData: ComputedRef<ChartData<'doughnut'>> = computed(() => {
  const dataJsonKey = props.info === 'typeRef' ? 'types' : 'rarities';

  const dataValues: ObjectWithNumber = {};
  const deck = getDeckObjectFromCode(props.deckCode);

  for (const cardCode in deck) {
    const card = store.jsons.cardJsonObject[cardCode];
    let key = card[props.info];

    if (key === 'Unit') {
      key = card.supertype === 'Champion' ? 'Champion' : 'Follower';
    }

    if (dataValues[key] === undefined) {
      dataValues[key] = 0;
    }

    dataValues[key] += deck[cardCode];
  }

  const data: InfoDoughtnutChartData[] = [];

  for (const key in dataValues) {
    const dataJsonValue: DataJsonRarity | DataJsonType =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (store.jsons.dataJson[dataJsonKey] as DataJsonRarity[] | DataJsonType[])
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .find((x) => x.nameRef === key);
    const dataPoint: InfoDoughtnutChartData = {
      key: key,
      value: dataValues[key],
      color: dataJsonValue.color,
      name: dataJsonValue.name,
      order: dataJsonValue.order,
    };

    data.push(dataPoint);
  }

  console.log(data);

  data.sort((a, b) => a.order - b.order);

  return {
    labels: data.map((x) => x.name),
    datasets: [
      {
        data: data.map((x) => x.value),
        backgroundColor: data.map((x) => x.color),
      },
    ],
  };
});

const options: ChartOptions<'doughnut'> = {
  cutout: 55,
  layout: {
    padding: {
      top: 10,
      bottom: 10,
    },
  },
  elements: {
    arc: {
      // borderRadius: 999,
      borderWidth: 0,
      // borderColor: 'black',
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true,
        generateLabels(chart) {
          const legendItems: Array<LegendItem> = [];
          const labels = chart.data.labels as string[];

          for (let i = 0; i < (chart.data.labels as string[]).length; i++) {
            legendItems.push({
              text: `${labels[i]} (${chart.data.datasets[0].data[i]})`,
              borderRadius: 999,
              datasetIndex: 0,
              index: i,
              fontColor: getCssVarValue('--color-0'),
              fillStyle: (chart.data.datasets[0].backgroundColor as string[])[
                i
              ],
            });
          }

          return legendItems;
        },
      },
    },
    datalabels: {
      display: false,
    },
  },
};
</script>

<style scoped></style>
