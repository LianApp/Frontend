import React, { FormEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Stack,
} from '@mui/material';
import instance from 'shared/api/axiosConfig';
import { Group } from 'shared/ui/GroupCard/GroupCard';
import Toast from 'shared/ui/Toast/Toast';

const AddTeacherForm = () => {
  const [teachers, setTeachers] = useState([{ name: '', email: '' }]); 
  const [open, setOpen] = useState(false);

  const teachersMut = useMutation(
    async (newTeachers) => {
      return await instance.post('/teachers', newTeachers);      
    }
  );

  const handleAddTeacher = () => {
    setTeachers([...teachers, { name: '', email: '' }]);
  };

  const handleRemoveTeachers = (index: number) => {
    const newStudents = [...teachers];
    newStudents.splice(index, 1);
    setTeachers(newStudents);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await teachersMut.mutateAsync({data: teachers} as never as void);        
      console.log(teachers);         
      setTeachers([{ name: '', email: '' }]);
    } catch (error) {
      setOpen(true)
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, maxHeight: '80%', overflow: 'scroll', overflowX: 'hidden' }}>
      
      <Typography variant="h4" align="center" gutterBottom>
        Добавить учителей
      </Typography>
        <Stack direction='row' justifyContent='space-between'>
            <Button sx={{ mt: 2 }} onClick={handleAddTeacher}>
                Добавить учителя
            </Button>
            <Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                Добавить учителей
            </Button>
      </Stack>
      
      <TableContainer sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Почта</TableCell>                         
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    required
                    fullWidth
                    value={teacher.name}
                    onChange={(e) => {
                      const newStudents = [...teachers];
                      newStudents[index].name = e.target.value;
                      setTeachers(newStudents);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    value={teacher.email}
                    onChange={(e) => {
                      const newStudents = [...teachers];
                      newStudents[index].email = e.target.value;
                      setTeachers(newStudents);
                    }}
                  />
                </TableCell>               
                <TableCell align="center">
                  <Button variant="outlined" onClick={() => handleRemoveTeachers(index)}>
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>    
      {teachersMut.isSuccess ? (
        <Toast open={open} setOpen={setOpen} msg='Устуденты успешно добавленны' variant='success' />
      ) : (
        // @ts-ignore
        <Toast open={open} setOpen={setOpen} msg={teachersMut?.error?.response?.data?.message} variant='error' />
      )}      
    </Container>
  );
};

export default AddTeacherForm;
