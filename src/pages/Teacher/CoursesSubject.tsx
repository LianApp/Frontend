import { Box, Button, Container, Input, Modal, Stack, TextField, Typography } from "@mui/material";
import { CourseType } from "entities/course/model/course.model";
import CourseCard from "entities/course/ui/CourseCard";
import useAuth from "entities/user/api/lib/useAuth";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "shared/api/axiosConfig";
import withSidebar from "shared/hoc/withSidebar";
{/* @ts-ignore */}
import InputEmoji from 'react-input-emoji'
import { ArrowForward } from "@mui/icons-material";
import useSubject, { Subject } from "entities/subject/useSubject";
import { Group } from "shared/ui/GroupCard/GroupCard";
import Toast from "shared/ui/Toast/Toast";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 12,
    p: 4,
    borderRadius: '25px'
  };

function CoursesSubject() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, name } = useSubject()
  const [text, setText] = useState()
  const [courseName, setCourseName] = useState('')
  const [open, setOpen] = useState(false)

  const courses = useQuery("courses", async () => {
    return await axios.get(`/teacher/courses`);
  });

  const groups = useQuery("groups", async () => {
    return await axios.get("/groups");
  });

  const groupIds = groups.data?.data.map((group: Group) => group.id)

  const courseMut = useMutation(newCourse => {
    return axios.post('/courses', newCourse)
  })

  const addCourse = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {        
        const res = await courseMut.mutateAsync({
            title: courseName,
            subjectId: id,
            groupIds: groupIds,
            icon: text,
        } as never as void)

        if(res.data) {            
            courses.refetch()
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
   
  return (
    <>
      <Stack width="100%" mt={5} ml={6}>
        <Box>
          <Typography fontSize="32px">Курсы по предмету {name}</Typography>
          <Stack mt={4} direction="row" gap={6} flexWrap="wrap">
            {courses.data?.data.filter((c: CourseType) => c.subject_id === id).map((c: CourseType) => (
            <Stack
              width="30%"
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
                {c.title}
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
                  К УРОКАМ
                  <ArrowForward sx={{ ml: "6px" }} />
                </Box>
              </Stack>
            </Stack>
          ))}
          </Stack>
        </Box>
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
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
            Добавить курс
          </Typography>
          <form onSubmit={addCourse} >
          <TextField
              margin="normal"
              required
              fullWidth
              id="course_name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              label="Название курса..."              
              autoFocus
            />      
           <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter            
            placeholder="Выбирите иконку..."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Добавить
            </Button>      
          </form>
        </Box>
      </Modal>
      {/* @ts-ignore */}
      <Toast open={open} setOpen={setOpen} msg={courseMut?.error?.response?.data?.message} variant='error' />
    </>
  );
}

export default withSidebar(CoursesSubject);
