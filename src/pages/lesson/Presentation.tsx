import { ArrowForward } from '@mui/icons-material';
import {
  Box, Button, IconButton, Stack, Typography,
} from '@mui/material';
import React from 'react';
import withSidebar from 'shared/hoc/withSidebar';
import HeaderLesson from 'widgets/lesson-header/HeaderLesson';
import { AnimatedPage } from 'features/AnimatedPage/ui/AnimatedPage';
import useLesson from 'entities/lesson/api/useLesson';
import { useNavigate } from 'react-router-dom';

// Google viewer http://docs.google.com/viewer?url=${linkToPPTFile}&embedded=true

function Presentation() {
  const navigate = useNavigate()
  const url = useLesson(state => state.presentation_url)
  const linkToPPTFile = 'https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx';  
  return (
    <AnimatedPage>  
      <Box mt={4} ml={5} width="100%" height="100%">

        <HeaderLesson />

        <Stack direction="column" width="95%" height="70%" mt={6} alignItems="center">
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
            width="100%"
            height="600px"
            frameBorder="0"
            title="slides"
          />
        </Stack>

        <Stack alignItems="flex-end" width="95%" mt={6}>
          <Button
            sx={{
              boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '50px',
              color: 'black',
              px: '8px',
            }}
            size="small"
            onClick={() => navigate("/lessons/1/lecture")}
          >
            <Typography fontSize="12px">К лекции</Typography>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </Button>
        </Stack>

      </Box>
    </AnimatedPage>
  );
}

export default withSidebar(Presentation);
