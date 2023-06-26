import { Box, Button, Container, Input, Modal, Stack, TextField, Typography } from "@mui/material";
import { CourseType } from "entities/course/model/course.model";
import CourseCard from "entities/course/ui/CourseCard";
import useAuth from "entities/user/api/lib/useAuth";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "shared/api/axiosConfig";
import withSidebar from "shared/hoc/withSidebar";
// import InputEmoji from 'react-input-emoji'
import { ArrowForward } from "@mui/icons-material";
import instance from "shared/api/axiosConfig";
import useSubject, { Subject } from "entities/subject/useSubject";
import { useNavigate } from "react-router-dom";
import useCourse from "entities/course/api/useCourse";
import { Group } from "shared/ui/GroupCard/GroupCard";

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

function TeacherPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const setSubject = useSubject(state => state.setSubject)
  const subjId = useCourse(state => state.subject_id)
  console.log(subjId);
  
  // const [subName, setSubName] = useState('')

  // const subjMut = useMutation(newSubj => {
  //   return instance.post('/subjects', newSubj, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  //   })
  // })

  // const addSubject = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); 
  //   await subjMut.mutateAsync({name: subName} as never as void)
  //   subjects.refetch()
  //   handleClose()
  // }

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const courses = useQuery("teachersCourses", async () => {
    return await axios.get("/teacher/courses");
  });

  const subjects = useQuery("subjects", async () => {
    return await axios.get("/subjects");
  }); 
  

  return (
    <>
      <Stack width="100%" mt={5} ml={6}>
        <Box>
          <Typography fontSize="32px">Мои предметы</Typography>
          <Stack mt={4} direction="row" gap={6} flexWrap="wrap">
            {subjects.data?.data.map((s: Subject) => (
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
                {s.name}
              </Typography>
              <Stack alignItems="end" mt={5}>
                <Box   
                  data-testid="goToLesson"  
                  onClick={() => {  
                    setSubject(s)                  
                    navigate('/subjects/course')
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
                  К ПРЕДМЕТУ
                  <ArrowForward sx={{ ml: "6px" }} />
                </Box>
              </Stack>
            </Stack>
          ))}
          </Stack>
        </Box>
      </Stack>
      {/* <Box
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
      </Box> */}
      {/* <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
            Добавить предмет
          </Typography>
          <form onSubmit={addSubject}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="course_name"
              label="Название предмета..."
              value={subName}
              onChange={(e) => setSubName(e.target.value)}
              autoFocus
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
      </Modal> */}
    </>
  );
}

export default withSidebar(TeacherPage);
