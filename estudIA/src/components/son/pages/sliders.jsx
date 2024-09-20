import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const images = [
  '../',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

function mascota() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={images.length - 1}
      />
      <img
        src={images[value]}
        alt="Imagen del carrusel"
        style={{ width: '100%', height: '300px' }}
      />
    </Box>
  );
}

export default mascota;