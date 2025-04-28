import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PhoneIcon from '../assets/svgs/phone.svg';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        backgroundColor: '#FAE1E1', // light background
        height: '100px',
        width: '100vw',
      }}
    >
      {/* Logo Section */}
      <Box display="flex" alignItems="center">
        <Typography variant="h5" sx={{ color: '#D53A3A', fontWeight: 'bold' }}>
          Khatabook
        </Typography>
      </Box>

      {/* Phone and Login Section */}
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FCE4E4', // light button background
            padding: '8px 12px',
            borderRadius: '8px',
            marginRight: '10px'
          }}
        >
          <img src={PhoneIcon} alt='phone' width="32" height="32" />
          {/* sx={{ color: '#D53A3A', marginRight: '4px' }} */}
          <Typography variant="body1" sx={{ color: '#000' }}>
            9606800800
          </Typography>
        </Box>

        <Button variant="outlined" color="primary">
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default Header;