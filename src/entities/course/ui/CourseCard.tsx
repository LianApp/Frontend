import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import { CourseType } from "../model/course.model";
import useCourse from "../api/useCourse";
import { useNavigate } from "react-router-dom";

function CourseCard(course: CourseType) {    
    const navigate = useNavigate()
    const setCourse = useCourse(state => state.setCourse)    
    return (
        <Box
        width="20%"
        height="60%"
        sx={{
            border: '1px solid black',
            backgroundColor: 'white',
            boxShadow: '8px 10px 0px -1px #000000',
            borderRadius: '20px',
            cursor: 'pointer',
            overflow: 'hidden',
        }}
        px={2}
        py={2}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"   
        onClick={() => {
            setCourse(course)
            navigate("/teacher/course/lessons")
            }
        }             
        >
            <Typography fontSize={22}>{course.title}</Typography> 
            <Icon>
                {course.icon}
            </Icon>
        </Box>
    )
}

export default CourseCard;