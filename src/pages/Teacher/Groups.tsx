import { ArrowForward } from "@mui/icons-material";
import { Stack, Typography, Box } from "@mui/material";
import { useQuery } from "react-query";
import instance from "shared/api/axiosConfig";
import { Group } from "shared/ui/GroupCard/GroupCard";
import { useNavigate } from "react-router-dom";
import useLesson from "entities/lesson/api/useLesson";
import { Lesson } from "entities/lesson/model/lesson.model";
import useGroup from "shared/api/useGroup";
import withSidebar from "shared/hoc/withSidebar";

const Groups = () => {
    const setLesson = useLesson((state) => state.setLesson);
    const setGroupId = useGroup((state) => state.setGroupId);
    const setGroupName = useGroup((state) => state.setGroupName);
    const navigate = useNavigate();
    const groups = useQuery("groups", async () => {
        return await instance.get("/groups");
    });
    
    const goToLesson = (lesson: Lesson) => {
        navigate('/lessons/1/pres');
        setLesson(lesson);
    }

    return (
        <Box ml={6} mt={6}>
        <Typography fontSize="32px">Мои группы</Typography>
        <Stack direction="row" gap={6} flexWrap='wrap' mt={5}>
          {groups.data?.data.map((g: Group) => (
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
                {g.name}
              </Typography>
              <Stack alignItems="end" mt={5}>
                <Box
                  onClick={() => {
                    setGroupId(g.id);
                    setGroupName(g.name);
                    navigate("/students/list");
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
                  К СТУДЕНТАМ
                  <ArrowForward sx={{ ml: "6px" }} />
                </Box>
              </Stack>
            </Stack>
          ))}
        </Stack>
        </Box>
    )
}

export default withSidebar(Groups)