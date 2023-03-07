import AppBar from '@mui/material/AppBar';
import {Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { AccountsFiltersDialog } from '../AccountFilters';

export const DragonBar = () => {
  return <Box>
  <AppBar position='static' sx={{ maxHeight: '36px', display: 'flex', justifyContent: 'center' }}>
    <Container maxWidth={false}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <AccountsFiltersDialog />
      </Toolbar>
    </Container>
  </AppBar>
</Box>
}