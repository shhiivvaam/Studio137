import * as React from 'react';
import { Grid } from '@mui/material';
import styles from '../styles/QuestionCard.module.css';

const Questions = ({ currQuestion, questionBank }) => {
    return (
        <Grid
            container
            item
            xs={12}
            px={8}
            py={6}
            spacing={2}
            className={styles.question__container}
        >
            <Grid
                container
                item
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                className={styles.question__section}
            >
                <Grid variant='div' className={styles.question__progress}>
                    <span style={{ fontWeight: 700 }}>{currQuestion.id}</span>/
                    {questionBank.length}
                </Grid>
                <Grid variant='p' className={styles.question__label}>
                    {currQuestion.label}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Questions;
