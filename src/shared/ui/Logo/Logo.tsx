import React from 'react';
import Box from "@mui/material/Box/Box"
import logo from '../../../../public/icons/logo.svg';

const Logo = () => {
    return <Box component="img" alt="logo" src={logo} width={90} height="auto" mb={2} maxWidth="100%" />
}

export default Logo;