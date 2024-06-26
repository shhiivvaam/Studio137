import { LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import { linearProgressClasses } from '@mui/material/LinearProgress';


const ProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#E9E9E9',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 4,
        backgroundColor: '#20ADB4',
    },
    marginBottom: '1rem',
}));

export default ProgressBar;
