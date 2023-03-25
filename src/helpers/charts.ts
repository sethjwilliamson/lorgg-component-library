import { ChartOptions } from 'chart.js';
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useJsonStore } from './stores';
import { useI18n } from 'vue-i18n';

export function addPatchAnnotations(
  chartOptions: ChartOptions<'line'>,
  dates: Array<Date>,
) {
  const { t } = useI18n();
  Chart.register(annotationPlugin);

  if (!chartOptions.plugins) {
    chartOptions.plugins = {};
  }
  if (!chartOptions.plugins.annotation) {
    chartOptions.plugins.annotation = {};
  }
  chartOptions.plugins.annotation.annotations = [];

  let maxDate = new Date('1972-01-01');
  let minDate = new Date('3000-12-01');

  for (const date of dates) {
    if (date > maxDate) {
      maxDate = date;
    }
    if (date < minDate) {
      minDate = date;
    }
  }

  const patchesInRange = [];

  for (const patch of useJsonStore().jsons.dataJson.patches) {
    if (
      new Date(patch.startTime) <= maxDate &&
      new Date(patch.startTime) >= minDate
    ) {
      patchesInRange.push(patch);
    }
  }

  for (const patch of patchesInRange) {
    chartOptions.plugins.annotation.annotations.push({
      type: 'line',
      xMin: patch.startTime,
      xMax: patch.startTime,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderDash: [10, 5],
      borderWidth: 1,
      label: {
        content: `${t('general.patch')} ${patch.name}`,
        display: true,
        position: 'start',
        font: {
          weight: 'normal',
        },
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
    });
  }
}
