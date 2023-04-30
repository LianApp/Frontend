import {
  Box, Pagination, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { AnimatedPage } from 'features/AnimatedPage/ui/AnimatedPage';
import HeaderLesson from 'widgets/lesson-header/HeaderLesson';
import withSidebar from 'shared/hoc/withSidebar';
import AnswerCard from 'shared/ui/AnswerCard/AnswerCard';

const answers = ['O(n)', 'O(n*n)', 'O(iphone)', 'O(n * log(n))'];

function Test() {
  return (
    <AnimatedPage>
      <Box mt={4} ml={5} width="100%" height="100vh">
        <HeaderLesson title="Алгоритмизация" />

        <Stack direction="row" mt={8} width="80%" justifyContent="space-between">
          <Typography fontSize="30px">Тест по быстрой сортировки</Typography>

          <Pagination count={8} variant="outlined" color="primary" />
        </Stack>

        <Stack mx="auto" mt={6} width="60%" height="80%" pr={14} alignItems="center">
          <Typography textAlign="center" fontSize="28px">Какая асимптотика у быстрой сортировки?</Typography>
          <Box
            sx={{
              width: '100%',
              height: '55%',
              display: 'flex',
              flexWrap: 'wrap',
            }}
            mt={4}
          >
            {answers.map((ans) => <AnswerCard key={ans} answer={ans} />)}
          </Box>
          <Box
            sx={{
              boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '50px',
              border: '0px',
              cursor: 'pointer',
              fontSize: '20px',
            }}
            component="button"
            width="20%"
            py={2}
            px={4}
            mr={4}
          >
            Далее
          </Box>
        </Stack>

      </Box>
    </AnimatedPage>
  );
}

export default withSidebar(Test);
