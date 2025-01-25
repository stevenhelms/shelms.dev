import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';

import MainCard from 'components/MainCard';
import CalculatorCard from './CalculatorCard';

// ==============================|| CHOCOLATE - DEFAULT ||============================== //

const boxPlotOptions = {
  chart: {
    height: 450,
    type: 'boxPlot',
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      data: [
        {
          x: 'category 1',
          y: [40, 51.98, 56.29, 59.59, 63.85],
        },
        {
          x: 'category 2',
          y: [43.66, 44.99, 51.35, 52.95, 59.42],
        },
        {
          x: 'category n',
          y: [52.76, 57.35, 59.15, 63.03, 67.98],
        },
      ],
    },
  ],
};

const BoxPlot = () => {
  return (
    <ReactApexChart
      options={boxPlotOptions}
      series={boxPlotOptions.series}
      type="boxPlot"
      height={450}
    />
  );
};

const BoxPlotCard = () => {
  return (
    <MainCard content={false} sx={{ mt: 1.5 }}>
      <Typography variant="h5" sx={{ p: 2 }}>
        BoxPlot
      </Typography>
      <BoxPlot />
    </MainCard>
  );
};

export default function Chocolate() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">KYYA Chocolate Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <BoxPlotCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <CalculatorCard />
      </Grid>
    </Grid>
  );
}
