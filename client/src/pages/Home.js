import React from 'react'
import Header from '../component/Header/Header'
import { Box } from '@mui/material'
import Users from '../component/UserList/Users'

const Home = () => {
    return (
        <Header>
            <Box>
                <Users/>
            </Box>
        </Header>
    )
}

export default Home