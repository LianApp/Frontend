import React, { useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  InputBase,
  Divider,
  Button,
  Input,
  List,
  ListItem,
} from "@mui/material";
import ActivityCard from "widgets/activity-card/ui/ActivityCard";
import ItemCard from "shared/ui/ItemCard/ItemCard";
import withSidebar from "shared/hoc/withSidebar";
import useAuth from "entities/user/api/lib/useAuth";
import axios from "shared/api/axiosConfig";
import { useQuery } from "react-query";
import { CourseType } from "entities/course/model/course.model";
import { useNavigate } from "react-router-dom";
import { Lesson } from "entities/lesson/model/lesson.model";
import Slide from "shared/ui/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useLesson from "entities/lesson/api/useLesson";
import LessonItemCard from "entities/lesson/ui/LessonItemCard";

const settings = {
  className: "slider variable-width",
  dots: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // adaptiveHeight: true,
  // variableWidth: true,
};

function Main() {
  const navigate = useNavigate();
  const userName = useAuth((state) => state.userName);
  const courses = useQuery("courses", async () => {
    return await axios.get("/students/courses");
  });
  const setLesson = useLesson((state) => state.setLesson);

  const goToLesson = (lesson: Lesson) => {
    navigate("/lessons/1/pres");
    setLesson(lesson);
  };

  return (
    <Box mt={4} ml={5} width="100vw" height="100vh">
      <Typography
        variant="h1"
        id="welcometext"
        fontFamily="Montserrat"
        fontSize="46px"
      >
        Добро пожаловать, {userName}!
      </Typography>
      <Stack mt={4} direction="column">
        <Stack
          direction="row"
          width="85%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="20px" color="#6B7280">
            Последние курсы
          </Typography>

          <Typography
            onClick={() => navigate("/lessons")}
            fontSize="14px"
            sx={{ cursor: "pointer" }}
            color="#5D7CFB"
            data-cy="all-lessons"
          >
            Смотреть все
          </Typography>
        </Stack>

        <Stack direction="row" width="100%" gap={2} data-cy="lesson-list">
          {courses.data?.data.map((course: CourseType) => (
            <Box
              px={4}
              py={2}
              minWidth="29%"
              minHeight="40%"
              sx={{
                boxShadow: "0px 12px 32px -3px rgba(0, 0, 0, 0.1)",
                borderRadius: "27px",
              }}
              mt={4}
            >
              <Stack direction="row">
                <Typography data-testid="lesson-title" fontSize="24px">
                  {course.title}
                </Typography>
                <Typography data-testid="lesson-icon" fontSize="24px">
                  {course.icon}
                </Typography>
              </Stack>
              <List>
                {course.lessons.map((l: Lesson) => (
                  <ListItem
                    data-cy="item-card"
                    onClick={() => goToLesson(l)}
                    sx={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    {l.title}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Stack>

        <Stack
          direction="row"
          width="85%"
          alignItems="center"
          justifyContent="space-between"
          mt={8}
        >
          <Typography fontSize="20px" color="#6B7280">
            Последние уроки
          </Typography>
        </Stack>

        <Stack direction="row" width="100%" gap={6} mt={6} flexWrap="wrap">
          {courses.data?.data.map((course: CourseType) =>
            course.lessons.map((l: Lesson) => <LessonItemCard {...l} />)
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default withSidebar(Main);
