import React, { useState } from 'react';
import { Box } from '@mui/material';

interface AnswerCardProps {
    answer: string
}

function AnswerCard({ answer }: AnswerCardProps) {
  const [color, setColor] = useState('white');

  const onChangeColor = () => {
    setColor((prev) => (prev === '#B9FF83' ? 'white' : '#B9FF83'));
  };

  return (
    <Box
      sx={{
        boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        width: '40%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '34px',
        ml: '45px',
        cursor: 'pointer',
        backgroundColor: color,
      }}
      onClick={onChangeColor}
    >
      {answer}
    </Box>
  );
}

export default AnswerCard;
