import { Button, FormControl, Snackbar, Stack, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box, Paper, Table, TableBody } from "@mui/material";
import useAuth from "entities/user/api/lib/useAuth";
import { FormEvent, useState } from "react";
import { useQuery } from "react-query";
import instance from "shared/api/axiosConfig";
import withSidebar from "shared/hoc/withSidebar";
import AddStudentForm from "./AddStudentForm";
import StudentTable from "widgets/student-table/StudentTable";
import { Tabs, Tab } from '@mui/material';
import Subjects from "widgets/subjects/Subjects";

function Dashboard() {
  const id = useAuth((state) => state.organization_id);
  const name = useAuth((state) => state.userName);
  const role = useAuth(state => state.role)
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [inputs, setInputs] = useState([{ name: "", email: "" }]);
  const [inputValues, setInputValues] = useState(inputs.map(() => ({ name: "", email: "" })));
  console.log(role);
  
  const groups = useQuery("g", async () => {
    return await instance.get("/groups");
  });

  const subjects = useQuery("subjects", async () => {
    return await instance.get("/subjects");
  });
  console.log(subjects.data?.data);

  const handleAddInput = () => {
    setInputs((inputs) => [...inputs, { name: "", email: "" }]);
    setInputValues((values) => [...values, { name: "", email: "" }]);
  };
  // @ts-ignore
  const handleInputChange = (index, field, value) => {
    setInputValues((values) => {
      const newValues = [...values];
      // @ts-ignore
      newValues[index][field] = value;
      return newValues;
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(inputValues);
  };

  return (
    <Stack mt={6} ml={5} width="100wv" height="100vh" direction="column">

      <Tabs value={value} onChange={handleChange}>
        <Tab label="Добавить студентов" />
        <Tab label="Все студенты" />        
        <Tab label="Все предметы" />        
      </Tabs>
      {value === 0 && <AddStudentForm />}
      {value === 1 && <StudentTable />}           
      {value === 2 && <Subjects />}           
    </Stack>
  );
}

export default withSidebar(Dashboard);
