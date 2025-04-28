import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #6c63ff, #c1c2ff)', width: '100vw', height: '100vh', display: "flex", justifyContent: "center", alignItems: "center", padding: '20px'}}>
        <Container maxWidth="xs" style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
        <Typography variant="h5" align="center" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
            Login
        </Typography>
        <Box component="form" noValidate autoComplete="off">
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth style={{ background: 'linear-gradient(135deg, #6c63ff, #c1c2ff)', marginTop: '20px' }}>
                Login
            </Button>
        </Box>
        <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
            <a href="/" style={{ color: '#6c63ff' }}>Forgot Password?</a>
        </Typography>
        <Typography variant="body2" align="center" style={{ marginTop: '5px' }}>
            Don't have an account? <a href="/" style={{ color: '#6c63ff' }}>Sign up</a>
        </Typography>
        </Container>
    </div>
  );
};

export default Login;