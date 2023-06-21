import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import HeaderLesson from 'widgets/lesson-header/HeaderLesson';
import withSidebar from 'shared/hoc/withSidebar';
import { AnimatedPage } from 'features/AnimatedPage/ui/AnimatedPage';
import useLesson from 'entities/lesson/api/useLesson';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Lecture() {
  const navigate = useNavigate()
  const url = useLesson(state => state.lecture_url)
  const doc = "https://filesamples.com/samples/document/doc/sample2.doc"
  return (
    <AnimatedPage>
      <Box mt={4} ml={5} width="100%" height="100vh">
        <HeaderLesson />
        <Stack direction="column" width="95%" height="70%" mt={6} alignItems="center">
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
            width="100%"
            height="100%"
            frameBorder="0"
            title="slides"
          />
        </Stack>
        <Stack alignItems="flex-start" width="95%" mt={6}>
          <Button
            sx={{
              boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '50px',
              color: 'black',
              px: '8px',
            }}
            size="small"
            onClick={() => navigate("/lessons/1/pres")}
          >
            <IconButton>
              <ArrowBack />
            </IconButton>
            <Typography fontSize="12px">К презентации</Typography>
          </Button>
        </Stack>
      </Box>
    </AnimatedPage>
  );
}

export default withSidebar(Lecture);
