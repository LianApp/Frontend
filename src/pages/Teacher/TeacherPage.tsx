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
  const courses = useQuery("teachersCourses", async () => {
    return await axios.get("/teacher/courses");
  });
  const groups = useQuery("groups", async () => {
    return await axios.get("/groups");
  });

  const navigate = useNavigate();
  const setGroupId = useGroup((state) => state.setGroupId);
  const setGroupName = useGroup((state) => state.setGroupName);

  return (
    <Stack width="95%" mt={5} ml={6}>
      <Typography fontSize="32px">Добро пожаловать, {userName}!</Typography>
      {/* <Box mt={4}>
        <Typography data-testid="title-groups" fontSize="32px">
          Мои группы
        </Typography>
        <Stack mt={4} spacing={4}>
          {groups.data?.data.map((g: Group) => (
            <GroupCard key={g.id} id={g.id} name={g.name} />
          ))}
        </Stack>
      </Box> */}
      <Stack mt={4} direction="column">
        <Stack
          direction="row"
          width="85%"
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
              height="auto"
              width="20%"
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
      <Box mt={4}>
        <Typography data-testid="title-subjects" fontSize="32px">
          Мои предметы
        </Typography>
        <Stack mt={4}>
          {courses.data?.data.map((c: CourseType) => (
            <CourseCard
              key={c.id}
              id={c.id}
              title={c.title}
              icon={c.icon}
              lessons={c.lessons}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

export default withSidebar(TeacherPage);
