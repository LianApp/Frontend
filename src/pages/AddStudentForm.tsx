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

const AddStudentForm = () => {
  const [students, setStudents] = useState([{ name: '', email: '', groupId: '' }]);
  const [groups, setGroups] = useState([]);
  const [open, setOpen] = useState(false);

  useQuery('groups', async () => {
    const response = await instance.get('/groups');
    setGroups(response.data);
  });

  const studentsMut = useMutation(
    async (newStudents) => {
      return await instance.post('/students', newStudents);      
    }
  );

  const handleAddStudent = () => {
    setStudents([...students, { name: '', email: '', groupId: '' }]);
  };

  const handleRemoveStudent = (index: number) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await studentsMut.mutateAsync({data: students} as never as void);        
      console.log(students);         
      setStudents([{ name: '', email: '', groupId: '' }]);
    } catch (error) {
      setOpen(true)
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, maxHeight: '80%', overflow: 'scroll', overflowX: 'hidden' }}>
      
      <Typography variant="h4" align="center" gutterBottom>
        Добавить студентов
      </Typography>
        <Stack direction='row' justifyContent='space-between'>
            <Button sx={{ mt: 2 }} onClick={handleAddStudent}>
                Добавить студента
            </Button>
            <Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                Добавить студентов
            </Button>
      </Stack>
      
      <TableContainer sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Почта</TableCell>
              <TableCell>Группа</TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    required
                    fullWidth
                    value={student.name}
                    onChange={(e) => {
                      const newStudents = [...students];
                      newStudents[index].name = e.target.value;
                      setStudents(newStudents);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    value={student.email}
                    onChange={(e) => {
                      const newStudents = [...students];
                      newStudents[index].email = e.target.value;
                      setStudents(newStudents);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <FormControl required fullWidth>                    
                    <Select
                      value={student.groupId}
                      onChange={(e) => {
                        const newStudents = [...students];
                        newStudents[index].groupId = e.target.value;
                        setStudents(newStudents);
                      }}
                    >
                      {groups.map((group: Group) => (
                        <MenuItem key={group.id} value={group.id}>
                          {group.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined" onClick={() => handleRemoveStudent(index)}>
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>    
      {/* {studentsMut.isSuccess ? (
        <Toast open={open} setOpen={setOpen} msg='Устуденты успешно добавленны' variant='success' />
      ) : (
        // @ts-ignore
        <Toast open={open} setOpen={setOpen} msg={studentsMut?.error?.response?.data?.message} variant='error' />
      )}   */}
      {/* @ts-ignore */}
      <Toast open={open} setOpen={setOpen} msg={studentsMut?.error?.response?.data?.message} variant='error' />
    </Container>
  );
};

export default AddStudentForm;
