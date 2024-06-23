import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <Grid item xs={12} className={styles.container}>
            <Typography
                sx={{
                    fontSize: {
                        sm: 24,
                        xs: 18,
                    },
                    fontWeight: 700,
                }}
                className={styles.header}
            >
                Are you Disillusioned?
            </Typography>
        </Grid>
    );
};

export default Navbar;
