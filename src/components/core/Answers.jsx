import * as React from 'react';
import { Grid } from '@mui/material';
import styles from '../styles/QuestionCard.css';
import AnswerSlider from '../common/Slider';

const Answers = ({
    currQuestion,
    questions,
    setQuestions,
    value,
    setValue,
    marks,
}) => {
    const handleSliderChange = (event, newValue) => {
        if (newValue !== undefined) {
            setValue(newValue);
            let temp = [...questions];
            temp[currQuestion.id - 1] = {
                ...currQuestion,
                answer: marks[newValue / 25].label,
                value: newValue,
            };
            setQuestions(temp);
        }
    };

    return (
        <Grid
            container
            item
            xs={12}
            px={15}
            py={6}
            className={styles.answer__container}
        >
            <AnswerSlider
                aria-label='answer slider'
                value={value ? value : 0}
                step={25}
                marks={marks}
                onChange={handleSliderChange}
            />
        </Grid>
    );
};

export default Answers;
