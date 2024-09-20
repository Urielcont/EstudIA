import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { AttachMoneyOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/system/Unstable_Grid/Grid';

const login= () => {
    <Card
    sx={{
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.neutral.main,
        maxWidth: '100%',
        mb: 2,
        height: 175,   

        padding: {
            xs: 2,   
            md: 3,  
        },
    }}
>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#03AC13',
                    borderRadius: '100%',
                    width: '2rem',
                    height: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mr: 1.5,
                }}
            >
                <AttachMoneyOutlined
                    sx={{
                        width: '1.5rem',
                        color: '#ffffff',
                    }}
                />
            </Box>
            <Typography variant="h6"  className="card-value" >
                Ganancias
            </Typography>
        </Box>

        <Typography variant="h2" sx={{ mb: 1 }}>
            fff
        </Typography>
    </CardContent>
</Card>

};

export default login;