import React from 'react';
import { Typography } from '@mui/material';

interface PropertyItemProps {
  icon: React.ReactNode;
  text: string | React.ReactNode;
}

const PropertyItem: React.FC<PropertyItemProps> = ({ icon, text }) => (
  <Typography
    variant="subtitle1"
    sx={{
      color: 'text.secondary',
      mb: 1,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {icon}
    {text}
  </Typography>
);

export default PropertyItem;
