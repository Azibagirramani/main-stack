import React, { useEffect, useRef } from "react";
import Chart, { type ChartOptions } from "chart.js/auto";
import formatDate from "src/util/formatDateTime";

import type { Payment } from "src/types";

const LineChart = ({ data }: { data: Array<Payment> }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const labels = data.map((entry) => formatDate(entry.date));
    const amounts = data.map((entry) => entry.amount);
    const filteredLabels = labels.map((label, index) =>
      index === 0 || index === labels.length - 1 ? label : ""
    );
    const chartData = {
      labels: filteredLabels,
      datasets: [
        {
          label: "Amount",
          data: amounts,
          fill: false,
          borderColor: "red",
          borderWidth: 1.9,
          tension: 0.3,
          pointRadius: 0,
          borderCapStyle: "round",
        },
      ],
    };

    const options: ChartOptions = {
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };

    const ctx = chartRef.current.getContext("2d");
    const lineChart = new Chart(ctx as any, {
      type: "line",
      data: chartData,
      options: options,
    });

    return () => {
      lineChart.destroy();
    };
  }, [data]);

  return (
    <canvas
      ref={chartRef}
      style={{ maxHeight: 260, width: "100%", maxWidth: 820 }}
    ></canvas>
  );
};

export default LineChart;
