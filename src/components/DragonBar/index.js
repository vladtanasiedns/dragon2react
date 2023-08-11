import AppBar from '@mui/material/AppBar';
import { Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { AccountsFiltersDialog } from '../AccountFilters';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export const DragonBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
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
        {isAuthenticated ? <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button> : <Button color="inherit" onClick={() => logout()}>Logout</Button>}
      </Toolbar>
    </Container>
  </AppBar>
</Box>
}