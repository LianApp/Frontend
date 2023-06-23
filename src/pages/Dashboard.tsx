import { Stack } from "@mui/material";
import useAuth from "entities/user/api/lib/useAuth";
import { useQuery } from "react-query";
import instance from "shared/api/axiosConfig";
import withSidebar from "shared/hoc/withSidebar";

function Dashboard() {
    const id = useAuth(state => state.organization_id)
    const name = useAuth(state => state.userName)
    
    const groups = useQuery('g', async () => {
        return await instance.get('/groups')
    })

    const subjects = useQuery("subjects", async () => {
        return await instance.get("/subjects");
    });
    console.log(subjects.data?.data);
    

    return (
        <Stack mt={6} ml={5}>
        </Stack>
    )
}

export default withSidebar(Dashboard)