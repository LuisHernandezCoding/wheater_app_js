// Chart Manager
// -------------
function getNextHours() {
  const hours = [];
  const today = new Date();
  today.setHours(today.getHours() + 1);
  const nextHours = [];
  for (let i = 0; i < 8; i += 1) {
    const nextHour = new Date(today);
    nextHour.setHours(today.getHours() + i * 3);
    nextHours.push(nextHour);
  }
  nextHours.forEach((hour) => {
    hours.push(`${hour.getHours()}:00`);
  });

  return hours;
}

export default async function createChart(label, ctx, type, data, color = '255, 99, 132') {
  /* eslint-disable */ // eslint-disable-line because of Chart.js way of doing things
  const background = 'rgba(' + color + ', 0.2)';
  const border = 'rgba(' + color + ', 1)';
  const chart = new Chart(ctx, {
    /* eslint-enable */
    type,
    data: {
      labels: getNextHours(),
      datasets: [{
        label,
        data,
        backgroundColor: background,
        borderColor: border,
        borderWidth: 3,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: true,
            maxTicksLimit: 8,
            maxRotation: 0,
            minRotation: 0,
          },
        }],
        yAxes: [{
          ticks: {
            autoSkip: true,
            maxTicksLimit: 5,
          },
        }],
      },
    },
  });
}
