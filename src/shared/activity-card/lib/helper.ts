/* eslint-disable import/prefer-default-export */
import { styled } from '@mui/material/styles';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

interface CustomLinearProgressProps extends LinearProgressProps {
  colorBg: string;
}

// eslint-disable-next-line max-len
export const BorderLinearProgress = styled(LinearProgress)<CustomLinearProgressProps>(({ theme, colorBg }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? colorBg : '#308fe8',
  },
}));

export const ProgressContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));
