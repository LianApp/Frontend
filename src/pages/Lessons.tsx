import {
  Box, InputBase, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { LessonList, LessonListProps } from 'widgets/lessons-list/ui/LessonList';
import withSidebar from 'shared/hoc/withSidebar';
import axios from 'shared/api/axiosConfig'
import { useQuery } from 'react-query';



function Lessons() {  
  const blessed = useQuery('blessed', async () => {
    return await axios.get('/students/courses')
  })
  console.log(blessed.data?.data);
  
  return (
    <Box mt={4} ml={5}>
      <Stack direction="row" justifyContent="space-between" width="95%">
        <Typography fontFamily='Montserrat' fontSize="46px">Мои курсы</Typography>        
      </Stack>

      <Stack data-cy="lesson-list" width="95%" height="100vh" mt={4} spacing={2}>
        {blessed.data?.data.slice(0, 4).map((course: LessonListProps) => 
          <LessonList key={course.id} icon={course.icon} title={course.title} lessons={course.lessons} />
        )}
      </Stack>

    </Box>
  );
}

export default withSidebar(Lessons);
