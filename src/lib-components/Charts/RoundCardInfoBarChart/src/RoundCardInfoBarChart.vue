<template>
  <BarChart ref="chart" :chart-data="data" :options="options" />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useI18n } from 'vue-i18n';
import {
  roundCardInfoBarChartProps,
  RoundCardInfoBarChartProps,
  RoundCardInfoData,
} from './types';
import { groupBy } from '@/helpers/functions';
const { t } = useI18n();

const chart = ref<InstanceType<typeof BarChart>>();

Chart.register(...registerables);
Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

const props: RoundCardInfoBarChartProps = defineProps(
  roundCardInfoBarChartProps,
);

const dataGrouped: ComputedRef<Array<Array<RoundCardInfoData>>> = computed(
  () => {
    return Object.values(groupBy(props.data, (i) => i.copy));
  },
);

const data: ComputedRef<ChartData<'bar'>> = computed(() => {
  return {
    labels: Array.from(
      props.data.reduce(
        (prevValue, currentVal) => prevValue.add(currentVal.round),
        new Set<number>(),
      ),
    ),
    datasets: dataGrouped.value.map((dataset) => {
      return {
        backgroundColor: dataset.map((x) =>
          x.wins * 2 >= x.matches
            ? 'rgba(0, 173, 255, 0.5)'
            : 'rgba(255, 81, 83, 0.5)',
        ),
        borderWidth: 0,
        borderRadius: 9999,
        data: dataset.map((x) => {
          return (x.wins / x.matches) * 100 - props.baseline;
        }),
        label: `${t('general.copy')} ${dataset[0]?.copy}`,
      };
    }),
  };
});

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      callbacks: {
        title(tooltipItems) {
          return `${t('general.round')}: ${tooltipItems[0].label}`;
        },
        label(tooltipItem) {
          return (
            (
              tooltipItem.dataset.data[tooltipItem.dataIndex] + props.baseline
            ).toFixed(2) + '%'
          );
        },
        footer(tooltipItems) {
          const returnValue: Array<string> = [];

          for (const dataset of dataGrouped.value) {
            if (dataset[tooltipItems[0].dataIndex] === undefined) {
              continue;
            }

            returnValue.push(
              `${t('general.copy')} ${dataset[tooltipItems[0].dataIndex].copy}`,
              `${t('general.matches')}: ${
                dataset[tooltipItems[0].dataIndex].matches
              }`,
              `${t('general.wins')}: ${
                dataset[tooltipItems[0].dataIndex].wins
              }`,
            );
          }

          return returnValue;
        },
      },
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: t('general.winrate'),
      },
      ticks: {
        callback(tickValue) {
          return (tickValue as number) + props.baseline + '%';
        },
      },
    },
    x: {
      title: {
        display: true,
        text:
          props.type === 'drawn'
            ? t('cards.roundDrawn')
            : t('cards.roundPlayed'),
      },
    },
  },
};
</script>

<style scoped></style>
