import { Box, Button, InputLabel, Modal, Stack, TextField, Typography } from "@mui/material";
import useCourse from "entities/course/api/useCourse";
import { Lesson } from "entities/lesson/model/lesson.model";
import LessonItemCard from "entities/lesson/ui/LessonItemCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import withSidebar from "shared/hoc/withSidebar";
import { style } from "./CoursesSubject";
import { useMutation } from "react-query";
import instance from "shared/api/axiosConfig";
import Toast from "shared/ui/Toast/Toast";

function LessonsForCourse() {
  const lessons = useCourse((state) => state.lessons);
  const title = useCourse((state) => state.title);
  const id = useCourse(state => state.id)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false)

  const addLeson = useMutation(newLesson => {
    return instance.post(`/course/${id}/lessons`, newLesson, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  })  

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data.get("lecture"));
    console.log(data.get("presentation"));
    console.log(data.get("name"));      
    try {
        const res = await addLeson.mutateAsync(data as never as void)  
        if(res.data) {
            handleClose()
        }
    } catch (error) {
        setOpen(true)        
    }
  }

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  return (
    <Box ml={6} width="100%">
      <Stack mt={4} justifyContent="space-between" direction="row" width="80%">
        <Typography fontSize="32px">Мои уроки по курсу {title}</Typography>        
      </Stack>
      <Stack mt={4} direction="row" flexWrap="nowrap" spacing={2} width="70%">
        {lessons.map((les: Lesson) => (
          <LessonItemCard
            key={les.id}
            title={les.title}
            lecture_url={les.lecture_url}
            presentation_url={les.presentation_url}
          />
        ))}
      </Stack>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: 2,
          padding: 2,
          background: "#5D7CFB",
          color: "white",
          cursor: "pointer",
        }}
        width="65px"
        height="65px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        onClick={handleOpen}
      >
        <Typography fontSize="36px">+</Typography>
      </Box>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Добавить урок
          </Typography>
          <form onSubmit={handleForm}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="course_name"
              name="name"
              label="Название урока..."              
              autoFocus
            />            
            <Stack width='100%' direction='row' justifyContent="space-between" gap={4} mt={2}>
                <Button
                    variant="contained"
                    component="label"
                    sx={{width: '50%'}}                    
                    >
                    Лекция
                    <input
                        name="lecture"  
                        type="file"
                        accept=".docx,.pdf"
                        required
                        hidden
                    />
                </Button>
                <Button
                    variant="contained"
                    component="label"
                    sx={{width: '50%'}}
                    >
                    Презентация
                    <input
                        type="file"
                        name="presentation" 
                        accept=".pdf,.pptx"
                        required
                        hidden
                    />
                </Button>
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"              
              sx={{ mt: 3, mb: 2, background: 'green' }}
            >
              Добавить
            </Button>
          </form>
        </Box>
      </Modal>
      {/* @ts-ignore */}      
      <Toast open={open} setOpen={setOpen} msg={addLeson?.error?.response?.data?.message} variant='error' />
    </Box>
  );
}

export default withSidebar(LessonsForCourse);
