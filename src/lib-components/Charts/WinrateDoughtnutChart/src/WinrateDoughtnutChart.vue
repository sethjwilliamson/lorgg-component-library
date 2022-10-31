<template>
  <DoughnutChart
    ref="chart"
    :chart-data="testData"
    :options="options"
    :plugins="plugins"
  />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import {
  WinrateDoughtnutChartProps,
  winrateDoughtnutChartProps,
} from './types';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

const chart = ref<HTMLCanvasElement | null>(null);

Chart.register(...registerables);

const props: WinrateDoughtnutChartProps = defineProps(
  winrateDoughtnutChartProps,
);

const testData: ComputedRef<ChartData<'doughnut'>> = computed(() => {
  return {
    labels: ['Wins', 'Losses'],
    datasets: [
      {
        data: [props.wins, props.matches - props.wins],
        backgroundColor: ['#00adff', '#ff5153'],
      },
    ],
  };
});

const options: ChartOptions<'doughnut'> = {
  cutout: 145,
  elements: {
    arc: {
      borderRadius: 999,
      borderWidth: 15,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
};

const plugins = [
  {
    id: 'text',
    beforeDraw: function (chart: Chart) {
      const width = chart.chartArea.width,
        height = chart.chartArea.height,
        ctx = chart.ctx;

      ctx.restore();
      const fontSize = (height / 100).toFixed(2);
      ctx.font = `bold ${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';

      const wins = chart.data.datasets[0].data[0] as number;
      const losses = chart.data.datasets[0].data[1] as number;

      const text = ((wins / (wins + losses)) * 100).toFixed(2) + '%',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      if (wins > losses) {
        ctx.fillStyle = '#00adff';
      } else if (wins < losses) {
        ctx.fillStyle = '#ff5153';
      } else {
        ctx.fillStyle = '#ffffff';
      }

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];
</script>

<style scoped></style>
