import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
// import styled from '@emotion/styled'


const Header = ({ children }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <div>
            <MainContainer>
                <Box>
                    <Wrapper>
                        <List><Link style={{ color: "inherit", textDecoration: "none" }} to={"/"}> LIST OF ALL USERS</Link> </List>
                        <List><Link style={{ color: "inherit", textDecoration: "none" }} to={"/add-user"}> ADD USER</Link> </List>
                        {
                            (localStorage.getItem("token")) ?
                                (
                                    <List><Link style={{ color: "inherit", textDecoration: "none" }} onClick={handleLogout}>LOGOUT</Link> </List>
                                )
                                :
                                (
                                    <List><Link style={{ color: "inherit", textDecoration: "none" }} to={"/login"}>LOGIN</Link> </List>
                                )
                        }
                    </Wrapper>
                </Box>
            </MainContainer>
            {children}
        </div>
    )
}

export default Header
const Wrapper = styled(Box)`
    display:flex;
    align-items: center;
    height: 54px;
    padding: 10px;
    color: white;
    margin-left: auto;
`
const MainContainer = styled(Box)`
background-color: #1976d2;

`
const List = styled(Typography)`
font-size: 14px;
margin-right: 23px;

`