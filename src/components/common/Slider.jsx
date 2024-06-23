import { Slider, styled } from '@mui/material';

const boxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const AnswerSlider = styled(Slider)(({ theme }) => ({
    color: '#20ADB4',
    height: 12,
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        boxShadow: boxShadow,
    },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#E9E9E9',
        height: 5,
    },
    '& .MuiSlider-mark': {
        backgroundColor: '#9B9B9B',
        height: 10,
        width: 10,
        borderRadius: '50%',
        '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'currentColor',
            fontWeight: 700,
        },
    },
}));

export default AnswerSlider;
