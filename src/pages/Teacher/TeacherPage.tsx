import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { CourseType } from "entities/course/model/course.model";
import CourseCard from "entities/course/ui/CourseCard";
import useLesson from "entities/lesson/api/useLesson";
import { Lesson } from "entities/lesson/model/lesson.model";
import useAuth from "entities/user/api/lib/useAuth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import axios from "shared/api/axiosConfig";
import useGroup from "shared/api/useGroup";
import withSidebar from "shared/hoc/withSidebar";
import GroupCard, { Group } from "shared/ui/GroupCard/GroupCard";

function TeacherPage() {
  const userName = useAuth((state) => state.userName);
  const navigate = useNavigate();
  const setLesson = useLesson((state) => state.setLesson);
  const courses = useQuery("teachersCourses", async () => {
    return await axios.get("/teacher/courses");
  });
  const groups = useQuery("groups", async () => {
    return await axios.get("/groups");
  });
  const subjects = useQuery("subjects", async () => {
    return await axios.get("/subjects");
  });
  const goToLesson = (lesson: Lesson) => {
    navigate('/lessons/1/pres');
    setLesson(lesson);
  }
  const setGroupId = useGroup((state) => state.setGroupId);
  const setGroupName = useGroup((state) => state.setGroupName);
  console.log(subjects.data?.data);
  
  return (
    <Stack width="95%" mt={5} ml={6}>
      <Typography fontSize="32px">Добро пожаловать, {userName.split(' ')[0]}✌️</Typography>
      <Stack mt={4} direction="column">
        <Stack
          direction="row"
          width="95%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="20px" color="#6B7280">
            Мои группы
          </Typography>

          <Typography
            fontSize="14px"
            sx={{ cursor: "pointer" }}
            color="#5D7CFB"
          >
            Смотреть все
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} mt={4}>
          {groups.data?.data.map((g: Group) => (
            <Stack
              width="33%"
              height="30%"
              justifyContent="space-between"
              px={1}
              py={1}
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 12px 32px -3px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Typography
                fontSize={{ xs: "12px", lg: "22px", md: "16px" }}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {g.name}
              </Typography>
              <Stack alignItems="end" mt={5}>
                <Box
                  onClick={() => {
                    setGroupId(g.id);
                    setGroupName(g.name);
                    navigate("/students/list");
                  }}
                  sx={{
                    borderRadius: "20px",
                    cursor: "pointer",
                    py: 1,
                    px: 2,
                  }}
                  fontSize={{ xs: "12px", lg: "14px", md: "10px" }}
                  display="flex"
                  alignItems="center"
                >
                  К СТУДЕНТАМ
                  <ArrowForward sx={{ ml: "6px" }} />
                </Box>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
          direction="row"
          width="95%"
          alignItems="center"
          justifyContent="space-between"
          mt={6}
        >
          <Typography fontSize="20px" color="#6B7280">
            Мои предметы
          </Typography>

          <Typography
            fontSize="14px"
            sx={{ cursor: "pointer" }}
            color="#5D7CFB"
            onClick={() => navigate('/add-lesson')}
          >
            Смотреть все
          </Typography>
        </Stack>
      <Stack direction="row" gap={2} mt={4}>
          {subjects.data?.data.map((s: {id: number, name: string}) => (
            <Stack
              width="33%"
              height="30%"
              justifyContent="space-between"
              px={1}
              py={1}
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 12px 32px -3px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Typography
                fontSize={{ xs: "12px", lg: "22px", md: "16px" }}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {s.name}
              </Typography>
              <Stack alignItems="end" mt={5}>
                <Box                  
                  sx={{
                    borderRadius: "20px",
                    cursor: "pointer",
                    py: 1,
                    px: 2,
                  }}
                  fontSize={{ xs: "12px", lg: "14px", md: "10px" }}
                  display="flex"
                  alignItems="center"
                >
                  К ПРЕДМЕТУ
                  <ArrowForward sx={{ ml: "6px" }} />
                </Box>
              </Stack>
            </Stack>
          ))}
        </Stack>
      <Box mt={4}>
      <Stack
          direction="row"
          width="95%"
          alignItems="center"
          justifyContent="space-between"
          mt={6}
        >
          <Typography fontSize="20px" color="#6B7280">
            Мои курсы
          </Typography>

          <Typography
            fontSize="14px"
            sx={{ cursor: "pointer" }}
            color="#5D7CFB"
            onClick={() => navigate('/lessons')}
          >
            Смотреть все
          </Typography>
        </Stack>
        <Stack direction="row" width='100%' height="100%" gap={2}>          
          {courses.data?.data.map((course: CourseType) => (
              <Box 
                px={4} 
                py={2} 
                minWidth='29%'                              
                minHeight='60%'                 
                sx={{ 
                  boxShadow: '0px 12px 32px -3px rgba(0, 0, 0, 0.1)', 
                  borderRadius: '27px', 
                }} 
                mt={4}
              > 
              
                <Typography fontSize='24px'>{course.title} {course.icon}</Typography> 
                <List> 
                  {course.lessons.map((l: Lesson) => (
                    <ListItem onClick={() => goToLesson(l)} sx={{fontSize: '12px', cursor: "pointer"}}>{l.title}</ListItem> 
                  ))}                      
                </List> 
              </Box> 
            ))}
            </Stack>
      </Box>
    </Stack>
  );
}

export default withSidebar(TeacherPage);
