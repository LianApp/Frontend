import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useGroup from "shared/api/useGroup";

export interface Group {
    id: number
    name: string
    organization_id?: number
}

function GroupCard(group: Group) {      
    const navigate = useNavigate() 
    const setGroupId = useGroup(state => state.setGroupId)
    const setGroupName = useGroup(state => state.setGroupName)
    return (
        <Box
        width="20%"
        height="60%"
        sx={{
            backgroundColor: 'white',
            boxShadow: '0px 4px 4px 4px rgba(74, 0, 233, 0.25)',
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
            setGroupId(group.id)
            setGroupName(group.name)
            navigate('/students/list')
            }
        }                      
        >
            <Typography fontSize={22}>{group.name}</Typography>             
        </Box>
    )
}

export default GroupCard;