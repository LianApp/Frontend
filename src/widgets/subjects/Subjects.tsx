import React, { FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import instance from "shared/api/axiosConfig";
import { style } from "pages/Teacher/CoursesSubject";

const Subjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjName, setSubjName] = useState('')

  const subjects = useQuery("asd", async () => {
    return await instance.get("/subjects");
  });

  const subjectsMut = useMutation(newSubject => {
    return instance.post('/subjects', newSubject)
  })

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const addSubject = async (e: FormEvent) => {
    e.preventDefault()
    await subjectsMut.mutateAsync({name: subjName} as never as void)
    subjects.refetch()
    handleClose()
  }

  return (
    <Box>
      {subjects.isLoading ? (
        <Typography>Loading...</Typography>
      ) : (                
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontSize: '18px'}}>Предметы</TableCell>  
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects.data?.data.map((s: any) => (
                        <TableRow key={s.id}>
                            <TableCell>{s.name}</TableCell>                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>       
      )}
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
            Добавить предмет
          </Typography>
          <form onSubmit={addSubject} >
          <TextField
              margin="normal"
              required
              fullWidth
              id="course_name"              
              label="Название предмета..."      
              value={subjName}
              onChange={(e) => setSubjName(e.target.value)}        
              autoFocus
            />     
           
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
    </Box>
  );
};

export default Subjects;
