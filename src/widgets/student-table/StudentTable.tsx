import React, { FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import instance from "shared/api/axiosConfig";
import { Group } from "shared/ui/GroupCard/GroupCard";
import { style } from "pages/Teacher/CoursesSubject";

const StudentTable = () => {
  const [groupId, setGroupId] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState('')

  const groups = useQuery("g", async () => {
    return await instance.get("/groups");
  });

  const groupMut = useMutation(newGroup => {
    return instance.post('/groups', newGroup)
  })

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const addGroup = async (e: FormEvent) => {
    e.preventDefault()
    await groupMut.mutateAsync({name: groupName} as never as void)
    groups.refetch()
    handleClose()
  }

  const StudentRows = ({ groupId }: { groupId: number }) => {
    const studentsQuery = useQuery(["students", groupId], async () => {
      return await instance.get(`/groups/${groupId}/students`);
    });
  
    useEffect(() => {
      studentsQuery.refetch()
    }, [groupId])
  
    if (studentsQuery.isLoading) {
      return <Typography>Загрузка...</Typography>
    }
  
    if (studentsQuery.isError) {
      return <Typography>Произошла ошибка при загрузке студентов.</Typography>
    }
  
    const students = studentsQuery.data?.data.filter((s: any) => s.group_id === groupId);
  
    return (
      <>
        {students?.map((student: any) => (
          <TableRow key={student.id}>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
          </TableRow>
        ))}
      </>
    );
  };

  useEffect(() => {
    groups.refetch()
  }, [])

  return (
    <Box>
      {groups.isLoading ? (
        <Typography>Загрузка...</Typography>
      ) : (
        groups.data?.data.map((group: Group) => (
          <Accordion key={group.id}>
            <AccordionSummary>
              <Typography>Группа {group.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Имя</TableCell>                      
                      <TableCell>Почта</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>                    
                    <StudentRows groupId={group.id} />               
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))
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
            Добавить группу
          </Typography>
          <form onSubmit={addGroup} >
          <TextField
              margin="normal"
              required
              fullWidth
              id="course_name"              
              label="Название группы..."      
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}        
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

export default StudentTable;
