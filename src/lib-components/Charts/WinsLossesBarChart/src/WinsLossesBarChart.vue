<template>
  <BarChart ref="chart" :chart-data="testData" :options="options" />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import { WinsLossesBarChartProps, winsLossesBarChartProps } from './types';
import { BarChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useI18n } from 'vue-i18n';
import { getCssVarValue, localeNumber } from '@/helpers/functions';
import { ChartDataPoints } from '@/helpers/charts';
const { t } = useI18n();

const chart = ref<InstanceType<typeof BarChart>>();

Chart.register(...registerables);
Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

const props: WinsLossesBarChartProps = defineProps(winsLossesBarChartProps);

const isDates = computed(() => {
  return typeof props.data[0].column !== 'string';
});

const sortedData = computed(() => {
  return props.data.slice().sort((a, b) => {
    if (isDates.value) {
      return (a.column as Date).getTime() - (b.column as Date).getTime();
    } else {
      return (a.column as string).localeCompare(b.column as string);
    }
  });
});

const labels: ComputedRef<(string | Date)[]> = computed(() => {
  return [...new Set(sortedData.value.map((x) => x.column))];
});

const datasetsObject = computed(() => {
  return {
    losses: sortedData.value.map((x) => x.matches - x.wins),
    wins: sortedData.value.map((x) => x.wins),
  } as ChartDataPoints;
});

const testData: ComputedRef<ChartData<'bar'>> = computed(() => {
  return {
    labels: labels.value,
    datasets: Object.entries(datasetsObject.value).map((x, index) => {
      return {
        backgroundColor:
          x[0] === 'wins'
            ? `rgba(${getCssVarValue('--color-good-rgb')}, 0.5)`
            : `rgba(${getCssVarValue('--color-bad-rgb')}, 0.5)`,
        data: x[1],
        borderRadius:
          index === 0
            ? {
                topLeft: 0,
                topRight: 0,
                bottomLeft: 10,
                bottomRight: 10,
              }
            : {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 0,
                bottomRight: 0,
              },
        borderSkipped: false,
        label: t(`general.${x[0]}`),
        barPercentage: 0.5,
      };
    }),
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
        footer(tooltipItems) {
          if (tooltipItems.length === 0) {
            return '';
          }
          let sum = 0;
          const wins = tooltipItems[0].chart.data.datasets[1].data[
            tooltipItems[0].dataIndex
          ] as number;

          for (let i = 0; i < tooltipItems[0].chart.data.datasets.length; i++) {
            sum += tooltipItems[0].chart.data.datasets[i].data[
              tooltipItems[0].dataIndex
            ] as number;
          }

          return `${t('general.total')}: ${sum}
${t('general.winrate')}: ${localeNumber((wins / sum) * 100, 1, 3)}%`;
        },
      },
    },
    datalabels: {
      align: 'end',
      anchor: 'end',
      formatter(value, context: Context) {
        let sum = 0;

        for (let i = 0; i < context.chart.data.datasets.length; i++) {
          sum += context.chart.data.datasets[i].data[
            context.dataIndex
          ] as number;
        }

        return sum || '';
      },
      display(context) {
        return context.datasetIndex === context.chart.data.datasets.length - 1;
      },
    },
  },
  scales: {
    x: {
      type: isDates.value ? 'time' : 'category',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'MMM D',
        },
        tooltipFormat: 'MMM D',
      },
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      display: true,
    },
  },
};
</script>

<style scoped></style>
