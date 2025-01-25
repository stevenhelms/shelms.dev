import React, { useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import MainCard from 'components/MainCard';
import { set } from 'lodash';

const Calculator = () => {
  const [nib, setNib] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [cocoa, setCocoa] = useState(0);
  const [vanilla, setVanilla] = useState(0);
  const [salt, setSalt] = useState(0);
  const [percent, setPercent] = useState(50);
  const [weight, setWeight] = useState(80);
  const [total, setTotal] = useState(0);

  const handleSubmit = event => {
    event.preventDefault(); // Prevent default form submission
    console.log('Submitted:', event.target);
    // Here you would typically send the data to a server
  };

  const calculate = () => {
    if (percent > 100 || percent < 0) {
      setPercent(50);
    }
    if (weight > 100 || weight < 0) {
      setWeight(80);
    }
    let cocoa_percent;
    if (percent <= 50) {
      cocoa_percent = 20;
    } else {
      cocoa_percent = 10;
    }
    console.log('Calculating...');
    console.log('Percent', percent);
    console.log('Weight', weight);
    const sugar_weight = (1 - parseInt(percent) / 100) * parseInt(weight);
    const chocolate_weight = parseInt(weight) - sugar_weight;
    console.log('Chocolate Weight:', chocolate_weight);
    console.log('Sugar Weight:', sugar_weight);
    setSugar(sugar_weight);

    const cocoa_weight = (parseInt(cocoa_percent) / 100) * parseInt(chocolate_weight);
    setCocoa(cocoa_weight);
    setNib(chocolate_weight - cocoa_weight);
  };

  return (
    <Box
      id="chocolate-calculator"
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="on"
      onSubmit={handleSubmit}
      onChange={calculate}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <TextField
          id="percent-chocolate"
          label="Percent Chocolate"
          variant="outlined"
          name="percent-chocolate"
          value={percent}
          onChange={e => {
            setPercent(e.target.value);
          }}
        />
        <TextField
          id="total-weight"
          label="Total Weight"
          variant="outlined"
          name="total-weight"
          value={weight}
          onChange={e => {
            setWeight(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 5,
        }}
      >
        <TextField
          id="nib"
          label="Nib"
          variant="outlined"
          name="nib"
          onChange={e => {
            setNib(e.target.value);
            calculate();
          }}
          onFocus={e => {
            console.log('Focus:', e.target);
          }}
          value={nib}
        />
        <TextField
          id="cocoa"
          label="Cocoa Butter"
          variant="outlined"
          name="cocoa"
          onChange={e => {
            setCocoa(e.target.value);
            calculate();
          }}
          value={cocoa}
        />
        <TextField
          id="sugar"
          label="Sugar"
          variant="outlined"
          name="sugar"
          onChange={e => {
            setSugar(e.target.value);
            calculate();
          }}
          value={sugar}
        />
      </Box>

      <Button type="submit" onClick={calculate}>
        Calculate
      </Button>
    </Box>
  );
};

const CalculatorCard = () => {
  return (
    <MainCard content={false} sx={{ mt: 1.5 }}>
      <Typography variant="h5" sx={{ p: 2 }}>
        Calculator
      </Typography>
      <Calculator />
    </MainCard>
  );
};

export default CalculatorCard;
