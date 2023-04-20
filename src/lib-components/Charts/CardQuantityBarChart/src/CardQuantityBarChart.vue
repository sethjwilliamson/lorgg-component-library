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
import { cardQuantityBarChartProps, CardQuantityBarChartProps } from './types';
const { t } = useI18n();

const chart = ref<InstanceType<typeof BarChart>>();

Chart.register(...registerables);
Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

const props: CardQuantityBarChartProps = defineProps(cardQuantityBarChartProps);

const data: ComputedRef<ChartData<'bar'>> = computed(() => {
  return {
    labels: props.data.map((x) => x.quantity),
    datasets: [
      {
        backgroundColor: props.data.map((x) =>
          x.wins * 2 >= x.matches
            ? 'rgba(0, 173, 255, 0.5)'
            : 'rgba(255, 81, 83, 0.5)',
        ),
        borderWidth: 0,
        borderRadius: 9999,
        data: props.data.map((x) => {
          if (props.type === 'winrate') {
            return (x.wins / x.matches) * 100 - props.baseline;
          }

          return x.matches;
        }),
      },
    ],
  };
});

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      callbacks: {
        title(tooltipItems) {
          return `${t('general.quantity')}: ${tooltipItems[0].label}`;
        },
        label(tooltipItem) {
          if (props.type === 'winrate') {
            return (
              (
                tooltipItem.dataset.data[tooltipItem.dataIndex] + props.baseline
              ).toFixed(2) + '%'
            );
          }

          return tooltipItem.dataset.data[tooltipItem.dataIndex].toString();
        },
        footer(tooltipItems) {
          return [
            `${t('general.matches')}: ${
              props.data[tooltipItems[0].dataIndex].matches
            }`,
            `${t('general.wins')}: ${
              props.data[tooltipItems[0].dataIndex].wins
            }`,
          ];
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
        text:
          props.type === 'winrate'
            ? t('general.winrate')
            : t('general.matches'),
      },
      ticks: {
        callback(tickValue) {
          if (props.type === 'winrate') {
            return (tickValue as number) + props.baseline + '%';
          }

          return tickValue;
        },
      },
    },
    x: {
      title: {
        display: true,
        text: t('general.quantity'),
      },
    },
  },
};
</script>
