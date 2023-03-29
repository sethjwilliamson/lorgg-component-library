<template>
  <LineChart ref="chart" :chart-data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import {
  LeaderboardChartPlayerDataPoint,
  LeaderboardChartProps,
  leaderboardChartProps,
  LeaderboardChartServerPlayersDataPoint,
} from './types';
import { LineChart } from 'vue-chart-3';
import {
  Chart,
  ChartData,
  ChartDataset,
  ChartOptions,
  registerables,
  TooltipItem,
} from 'chart.js';
import 'chartjs-adapter-moment';
import annotationPlugin from 'chartjs-plugin-annotation';
import { addPatchAnnotations } from '@/helpers/charts';
import { useI18n } from 'vue-i18n';
import { getRandomColor } from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import { PlayerData } from '@/lib-components/LeaderboardTop10Region/src/types';
const { t } = useI18n();

const servers = useJsonStore().jsons.dataJson.servers;

const chart = ref<InstanceType<typeof LineChart>>();

Chart.register(...registerables);
Chart.register(annotationPlugin);

const props: LeaderboardChartProps = defineProps(leaderboardChartProps);

const data = props.data.sort((a, b) => +a.date - +b.date);

const chartData: ComputedRef<ChartData<'line'>> = computed(() => {
  let datasets: ChartDataset<'line'>[];

  if (props.type === 'totalPlayers') {
    datasets = servers
      .filter((server) => {
        if (props.server === null) {
          return true;
        }

        return server.nameRef === props.server;
      })
      .map((server) => {
        return {
          label: server.name,
          borderColor: getRandomColor(server.nameRef),
          data: (data as LeaderboardChartServerPlayersDataPoint[])
            .filter((x) => x.server === server.nameRef)
            .map((x) => x.players),
          pointBackgroundColor: 'rgba(255, 255, 255, 0.25)',
        };
      });
  } else {
    datasets = (data as LeaderboardChartPlayerDataPoint[])
      .reduce((prev, curr) => {
        if (prev.includes(curr.player)) {
          return prev;
        }

        return [...prev, curr.player];
      }, [] as PlayerData[])
      .map((player) => {
        return {
          label: player.name,
          borderColor: getRandomColor(player.user_id),
          data: (data as LeaderboardChartPlayerDataPoint[])
            .filter((x) => x.player.user_id === player.user_id)
            .map((x) => (props.type === 'lp' ? x.lp : x.rank)),
          pointBackgroundColor: 'rgba(255, 255, 255, 0.25)',
        };
      });
  }

  return {
    labels: data
      .map((x) => x.date)
      .filter(
        (date, i, self) =>
          self.findIndex((d) => d.getTime() === date.getTime()) === i,
      ),
    datasets,
  };
});

const options: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: 'nearest',
      position: 'nearest',
      axis: 'x',
      intersect: false,
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
</script>

<style scoped></style>
