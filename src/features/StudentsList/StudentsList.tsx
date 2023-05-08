import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box, Stack, Typography } from "@mui/material";
import { User } from "entities/user/model/user.model";
import React from "react"
import { useQuery } from "react-query";
import instance from "shared/api/axiosConfig";
import useGroup from "shared/api/useGroup";
import withSidebar from "shared/hoc/withSidebar";

function StudentList() {
    const id = useGroup(state => state.groupId)
    const name = useGroup(state => state.name)
    const students = useQuery("students", async () => {
        return await instance.get(`/groups/${id}/students`)
    })
    return (
    <Stack>
        <Box mt={6}>
            <Typography fontSize="26px">Студенты группы {name}</Typography>
        </Box>
        <TableContainer component={Paper} sx={{mt: 8}}>
            <Table sx={{ minWidth: 650 }} aria-label="students table">
                <TableHead>
                <TableRow>
                    <TableCell>ФИО студента</TableCell>
                    <TableCell>Адрес почты</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {students.data?.data.map((student: User) => (
                    <TableRow
                    key={student.name}              
                    >
                        <TableCell component="th" scope="row">{student.name}</TableCell>
                        <TableCell align="left">{student.email}</TableCell>             
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Stack>
    )
}

export default withSidebar(StudentList);
