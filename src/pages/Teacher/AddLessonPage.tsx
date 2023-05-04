import { Box, Button, Container, FormControl, FormGroup, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import useCourse from "entities/course/api/useCourse";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "shared/api/axiosConfig";
import withSidebar from "shared/hoc/withSidebar";
import Toast from "shared/ui/Toast/Toast";

function AddLessonPage() {   
    const navigate = useNavigate()
    const courseTitle = useCourse(state => state.title)
    const id = useCourse(state => state.id)
    const [open, setOpen] = useState(false)
    const addLeson = useMutation(newLesson => {
      return axios.post(`/course/${id}/lessons`, newLesson, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, 
        }
      })    
    })  

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      console.log(data.get("lecture"));
      console.log(data.get("presentation"));
      console.log(data.get("name"));      
      const res = await addLeson.mutateAsync( { 
        title: data.get("name"),
        presentation: data.get("presentation"),
        lecture: data.get("lecture")
      } as never as void)
      if(res.data) setOpen(true)
      navigate("/teacher/course/lessons")
      console.log(res);      
    }

    
    return(
    <Container maxWidth='md' sx={{mt: 4}}>
        <Typography variant='h4' align='center' gutterBottom>
            Создание урока для курса {courseTitle}
        </Typography>
      <Box sx={{ mt: 4 }}>        
        <form encType="multipart/form-data" onSubmit={handleForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="name"
                id='lesson-title'
                label='Название урока'
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl>
                <FormLabel>Файл лекции</FormLabel>
                <FormGroup>
                  <InputBase
                    type='file'
                    name="lecture"
                    inputProps={{
                      accept: '.docx,.pdf',
                    }}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl>
                <FormLabel>Файл презентации</FormLabel>
                <FormGroup>
                  <InputBase
                    type='file'
                    name="presentation"
                    inputProps={{
                      accept: '.pdf,.ppt,.pptx',
                    }}
                  />
                </FormGroup>        
              </FormControl>
            </Grid>            
            <Grid item lg={6}>
                <Button color='primary' type='submit'>
                    Добавить урок
                </Button>  
            </Grid>          
          </Grid>
        </form>
      </Box>
      <Toast open={open} setOpen={setOpen} msg="Урок добавлен!" variant={"success"}  />
    </Container>
    )
}

export default withSidebar(AddLessonPage);
