import * as React from 'react';
import { Grid } from '@mui/material';
import styles from '../styles/QuestionCard.module.css';
import ProgressBar from '../common/ProgressBar';

const Categories = ({ currQuestion, questionBank }) => {
    const [progress, setProgress] = React.useState(
        (currQuestion.id * 100) / questionBank.length
    );

    React.useEffect(() => {
        setProgress((currQuestion.id * 100) / questionBank.length);
    }, [currQuestion.id, questionBank.length]);

    React.useEffect(() => {
        if (progress <= 25) {
            console.log(1, progress);
        } else if (progress > 25 && progress <= 50) {
            console.log(2, progress);
        } else if (progress > 50 && progress <= 75) {
            console.log(3, progress);
        } else if (progress > 75 && progress <= 100) {
            console.log(4, progress);
        }
    }, [progress]);

    return (
        <Grid
            container
            item
            xs={12}
            px={8}
            py={6}
            spacing={2}
            className={styles.categories__container}
        >
            <Grid item xs={3} className={styles.categories__section}>
                <ProgressBar
                    variant="determinate"
                    value={progress <= 25 ? (progress / 25) * 100 : 100}
                />
                <span
                    style={{
                        fontWeight: progress <= 25 && progress > 0 ? '700' : '400',
                        color: progress <= 25 && progress > 0 ? '#20adb4' : '#000',
                    }}
                >
                    Idealistic
                </span>
            </Grid>
            <Grid item xs={3} className={styles.categories__section}>
                <ProgressBar
                    variant="determinate"
                    value={
                        progress <= 25
                            ? 0
                            : progress <= 50
                                ? ((progress - 25) / 25) * 100
                                : 100
                    }
                />
                <span
                    style={{
                        fontWeight: progress > 25 && progress <= 50 ? '700' : '400',
                        color: progress > 25 && progress <= 50 ? '#20adb4' : '#000',
                    }}
                >
                    Disillusioned
                </span>
            </Grid>
            <Grid item xs={3} className={styles.categories__section}>
                <ProgressBar
                    variant="determinate"
                    value={
                        progress <= 50
                            ? 0
                            : progress <= 75
                                ? ((progress - 50) / 25) * 100
                                : 100
                    }
                />
                <span
                    style={{
                        fontWeight: progress > 50 && progress <= 75 ? '700' : '400',
                        color: progress > 50 && progress <= 75 ? '#20adb4' : '#000',
                    }}
                >
                    Cynical
                </span>
            </Grid>
            <Grid item xs={3} className={styles.categories__section}>
                <ProgressBar
                    variant="determinate"
                    value={
                        progress <= 75
                            ? 0
                            : progress <= 100
                                ? ((progress - 75) / 25) * 100
                                : 100
                    }
                />
                <span
                    style={{
                        fontWeight: progress > 75 && progress <= 100 ? '700' : '400',
                        color: progress > 75 && progress <= 100 ? '#20adb4' : '#000',
                    }}
                >
                    Hopeful
                </span>
            </Grid>
        </Grid>
    );
};

export default Categories;
