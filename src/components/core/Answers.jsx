import * as React from 'react';
import { Grid } from '@mui/material';
import styles from '../styles/QuestionCard.module.css';
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
            const updatedQuestions = questions.map((question, index) => {
                if (index === currQuestion.id - 1) {
                    return {
                        ...question,
                        answer: marks[newValue / 25].label,
                        value: newValue,
                    };
                }
                return question;
            });
            setQuestions(updatedQuestions);
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
                aria-label="answer slider"
                value={value || 0}
                step={25}
                marks={marks}
                onChange={handleSliderChange}
            />
        </Grid>
    );
};

export default Answers;
