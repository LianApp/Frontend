import { Box, Button, Container, FormControl, FormGroup, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import useCourse from "entities/course/api/useCourse";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "shared/api/axiosConfig";
import withSidebar from "shared/hoc/withSidebar";
import Toast from "shared/ui/Toast/Toast";

function AddLessonForm() {   
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
      console.log(data.keys.length);      
      const res = await addLeson.mutateAsync( { 
        title: data.get("name"),
        presentation: data.get("presentation"),
        lecture: data.get("lecture")
      } as never as void)
      setOpen(true)  
      console.log(res);      
    }

    
    return(
    <Container maxWidth='md' sx={{mt: 4}}>
        <Typography data-testid="header-title_text" variant='h4' align='center' gutterBottom>
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
                data-testid='lesson-title'
                label='Название урока'
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl>
                <FormLabel data-testid="title-add-document">Прикрепите документ</FormLabel>
                <FormGroup>
                  <InputBase
                    type='file'
                    data-testid="button-add-document"
                    name="lecture"
                    inputProps={{
                      accept: '.docx',
                    }}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl>
                <FormLabel data-testid="title-add-presentation">Файл презентации</FormLabel>
                <FormGroup>
                  <InputBase
                    type='file'
                    data-testid="button-add-presentation"
                    name="presentation"
                    inputProps={{
                      accept: '.pptx',
                    }}
                  />
                </FormGroup>        
              </FormControl>
            </Grid>            
            <Grid item lg={6}>
                <Button  data-testid="menu-item_create_lesson" color='primary' type='submit'>
                  Создать урок
                </Button>  
            </Grid>          
          </Grid>
        </form>
      </Box>
      <Toast open={open} setOpen={setOpen} msg="Урок добавлен!" variant={"success"}  />
    </Container>
    )
}

export default withSidebar(AddLessonForm);
