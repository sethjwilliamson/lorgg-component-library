<template>
  <LineChart
    ref="chart"
    :chart-data="testData"
    :options="options"
    :plugins="plugins"
  />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import { WinrateLineChartProps, winrateLineChartProps } from './types';
import { LineChart } from 'vue-chart-3';
import {
  Chart,
  ChartData,
  ChartOptions,
  LinearScale,
  registerables,
  TooltipItem,
} from 'chart.js';
import 'chartjs-adapter-moment';
import annotationPlugin from 'chartjs-plugin-annotation';
import { addPatchAnnotations } from '@/helpers/charts';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const chart = ref<InstanceType<typeof LineChart>>();

Chart.register(...registerables);
Chart.register(annotationPlugin);

const props: WinrateLineChartProps = defineProps(winrateLineChartProps);

const testData: ComputedRef<ChartData<'line'>> = computed(() => {
  console.log(props.baseline);
  return {
    labels: props.data.map((x) => x.date),
    datasets: [
      {
        borderColor: 'rgba(255, 255, 255, 0.1)',
        data: props.data.map((x) => x.winrate * 100),
        pointBackgroundColor: 'rgba(255, 255, 255, 0.25)',
      },
      {
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        data: props.data.map(() => props.baseline),
        borderColor: 'rgba(0, 0, 0, 0.05)',
      },
    ],
  };
});

const options: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'nearest',
      position: 'nearest',
      axis: 'x',
      intersect: false,
      filter: function (tooltipItem: TooltipItem<'line'>): boolean {
        return tooltipItem.datasetIndex === 0;
      },
      callbacks: {
        label(tooltipItem: TooltipItem<'line'>): string | string[] {
          let label = tooltipItem.dataset.label || '';

          if (label) {
            label += ': ';
          }
          label += tooltipItem.parsed.y + '%';
          return label;
        },
        footer: (tooltipItems: TooltipItem<'line'>[]) => {
          let label = '';

          if (
            tooltipItems[0].dataIndex !== null &&
            props.data[tooltipItems[0].dataIndex].matches
          ) {
            label += `${t('general.matches')}:  ${
              props.data[tooltipItems[0].dataIndex].matches
            }`;
          }

          return label;
        },
      },
    },
    annotation: {
      annotations: [],
    },
    datalabels: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.25,
    },
  },
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'MMM D',
        },
        tooltipFormat: 'MMM D',
      },
    },
  },
};

addPatchAnnotations(
  options,
  props.data.map((x) => x.date),
);

const plugins = [
  {
    id: 'chartGradient',
    beforeDraw: function (chart: Chart) {
      if (!chart.scales.y) {
        return;
      }

      const yLinearScale = chart.scales.y as LinearScale;

      const max = Math.max.apply(null, chart.data.datasets[0].data as number[]);
      const yTop = yLinearScale.getPixelForValue(max);
      const yGoal = yLinearScale.getPixelForValue(50);
      const min = Math.min(
        Math.min.apply(null, chart.data.datasets[0].data as number[]),
        50,
      );
      const yBottom = yLinearScale.getPixelForValue(min);

      const ratio = Math.max(Math.min((yGoal - yTop) / (yBottom - yTop), 1), 0);

      const gradientGood = chart.ctx.createLinearGradient(
        0,
        0,
        0,
        chart.height,
      );

      gradientGood.addColorStop(0, 'rgba(0, 173, 255, 0.25)');
      gradientGood.addColorStop(
        Math.max(ratio - 0.08, 0),
        'rgba(0, 173, 255, 0)',
      );

      const gradientBad = chart.ctx.createLinearGradient(0, 0, 0, chart.height);

      gradientBad.addColorStop(ratio, 'rgba(255, 81, 83, 0)');
      gradientBad.addColorStop(1, 'rgba(255, 81, 83, 0.25)');

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      chart.config.data.datasets[0].fill = {
        target: 1,
        above: gradientGood,
        below: gradientBad,
      };

      chart.update();
    },
  },
];
</script>

<style scoped></style>
