import { Box, Stack } from '@mui/material';
import React from 'react';
import HeaderLesson from 'widgets/lesson-header/HeaderLesson';
import withSidebar from 'shared/hoc/withSidebar';
import { AnimatedPage } from 'features/AnimatedPage/ui/AnimatedPage';
import useLesson from 'entities/lesson/api/useLesson';

function Lecture() {
  const url = useLesson(state => state.lecture_url)
  const doc = "https://filesamples.com/samples/document/doc/sample2.doc"
  return (
    <AnimatedPage>
      <Box mt={4} ml={5} width="100%" height="100vh">
        <HeaderLesson />
        <Stack direction="column" width="90%" height="70%" mt={6} alignItems="center">
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
            width="100%"
            height="100%"
            frameBorder="0"
            title="slides"
          />
        </Stack>
      </Box>
    </AnimatedPage>
  );
}

export default withSidebar(Lecture);
