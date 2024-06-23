import * as React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import styles from '../styles/QuestionCard.css';
import Categories from '../core/Categories';
import Questions from './Questions';
import { questionBank } from '../../utils/constants';
import Answers from './Answers';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const QuestionCard = () => {
    const [currQuestion, setCurrQuestion] = React.useState(questionBank[0]);
    const [questions, setQuestions] = React.useState(questionBank);
    const [value, setValue] = React.useState(undefined);
    const marks = [
        {
            value: 0,
            label: 'Strongly Disagree',
        },
        {
            value: 25,
            label: 'Disagree',
        },
        {
            value: 50,
            label: 'Neutral',
        },
        {
            value: 75,
            label: 'Agree',
        },

        {
            value: 100,
            label: 'Strongly Agree',
        },
    ];
    React.useEffect(() => {
        setValue(currQuestion.value);
    }, [currQuestion]);

    return (
        <Grid container item xs={11} sm={8}>
            <Paper className={styles.container}>
                <Grid xs={12} container item>
                    <Categories currQuestion={currQuestion} questionBank={questionBank} />
                </Grid>
                <Grid xs={12} container item>
                    <Questions currQuestion={currQuestion} questionBank={questions} />
                </Grid>
                <Grid xs={12} container item>
                    <Answers
                        currQuestion={currQuestion}
                        questions={questions}
                        setQuestions={setQuestions}
                        value={value}
                        setValue={setValue}
                        marks={marks}
                    />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    px={8}
                    py={6}
                    className={styles.step__container}
                >
                    <Button
                        variant='text'
                        disabled={currQuestion.id === 1}
                        onClick={() => {
                            setCurrQuestion(questions[currQuestion.id - 1 - 1]);
                            setValue(currQuestion.value);
                        }}
                        startIcon={<ArrowBackIcon />}
                        style={{
                            color: '#000',
                            fontWeight: '700',
                        }}
                    >
                        Previous
                    </Button>
                    <Button
                        variant='text'
                        disabled={currQuestion.id === questions.length}
                        onClick={() => {
                            setCurrQuestion(questions[currQuestion.id + 1 - 1]);
                            setValue(currQuestion.value);
                        }}
                        endIcon={<ArrowForwardIcon />}
                        style={{
                            color: '#000',
                            fontWeight: '700',
                        }}
                    >
                        Next
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default QuestionCard;
