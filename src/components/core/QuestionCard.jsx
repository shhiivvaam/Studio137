import * as React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import styles from '../styles/QuestionCard.module.css';
import Categories from '../core/Categories';
import Questions from './Questions';
import { questionBank } from '../../utils/constants';
import Answers from './Answers';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const QuestionCard = () => {
    const [currQuestion, setCurrQuestion] = React.useState(questionBank[0]);
    const [questions, setQuestions] = React.useState(questionBank);
    const [value, setValue] = React.useState(currQuestion.value);

    const marks = [
        { value: 0, label: 'Strongly Disagree' },
        { value: 25, label: 'Disagree' },
        { value: 50, label: 'Neutral' },
        { value: 75, label: 'Agree' },
        { value: 100, label: 'Strongly Agree' },
    ];

    React.useEffect(() => {
        setValue(currQuestion.value);
    }, [currQuestion]);

    const handlePrevious = () => {
        setCurrQuestion(questions[currQuestion.id - 2]);
        setValue(questions[currQuestion.id - 2].value);
    };

    const handleNext = () => {
        setCurrQuestion(questions[currQuestion.id]);
        setValue(questions[currQuestion.id].value);
    };

    return (
        <Grid container item xs={11} sm={8}>
            <Paper className={styles.container}>
                <Grid item xs={12}>
                    <Categories currQuestion={currQuestion} questionBank={questionBank} />
                </Grid>
                <Grid item xs={12}>
                    <Questions currQuestion={currQuestion} questionBank={questions} />
                </Grid>
                <Grid item xs={12}>
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
                        variant="text"
                        disabled={currQuestion.id === 1}
                        onClick={handlePrevious}
                        startIcon={<ArrowBackIcon />}
                        style={{ color: '#000', fontWeight: '700' }}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="text"
                        disabled={currQuestion.id === questions.length}
                        onClick={handleNext}
                        endIcon={<ArrowForwardIcon />}
                        style={{ color: '#000', fontWeight: '700' }}
                    >
                        Next
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default QuestionCard;
