import { Box, Button, Dialog, TextField, styled } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header"

const AddUser = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "", memberId: "" })
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const handleClose = () => {
        setOpen(false)
    }

    // signUpUser
    const signUpUser = async () => {
        navigate("/")
        handleClose()
    }
    return (
        <Header>
            <h1 style={{ textAlign: "center" }}>ADD NEW USER </h1>
            <UserForm style={{ display: 'flex', height: '100%' }}>
                <Wraper>
                    <TextField
                        variant="standard"
                        name='name'
                        value={user.name}
                        onChange={e => handleChange(e)}
                        label="Enter Your Name"
                    />
                    <TextField
                        variant="standard"
                        name='accountNumber'
                        value={user.accountNumber}
                        onChange={e => handleChange(e)}
                        label="Enter accountNumber"
                    />
                    <TextField
                        variant="standard"
                        name='cifNumber'
                        value={user.cifNumber}
                        onChange={e => handleChange(e)}
                        label="Enter cifNumber"
                    />
                    <TextField
                        variant="standard"
                        name='email'
                        value={user.email}
                        onChange={e => handleChange(e)}
                        label="Enter email"
                    />
                    <TextField
                        variant="standard"
                        name='address'
                        value={user.address}
                        onChange={e => handleChange(e)}
                        label="Enter address"
                    />
                </Wraper>
                {/*  */}
                <Wraper>
                    <TextField
                        variant="standard"
                        name='fatherName'
                        value={user.fatherName}
                        onChange={e => handleChange(e)}
                        label="Enter fatherName"
                    />
                    <TextField
                        variant="standard"
                        name='uidNumber'
                        value={user.uidNumber}
                        onChange={e => handleChange(e)}
                        label="Enter uidNumber"
                    />
                    <TextField
                        variant="standard"
                        name='url'
                        value={user.url}
                        onChange={e => handleChange(e)}
                        label="Enter your image url"
                    />
                    <TextField
                        variant="standard"
                        name='mobileNumber'
                        value={user.mobileNumber}
                        onChange={e => handleChange(e)}
                        label="Enter mobile Number"
                    />
                    <TextField
                        variant="standard"
                        name='address'
                        value={user.address}
                        onChange={e => handleChange(e)}
                        label="Enter address"
                    />
                </Wraper>
            </UserForm>
            <AddUserBtn variant='contained' onClose={handleClose} onClick={() => signUpUser()}>AddUser</AddUserBtn>
        </Header>
    )
}

export default AddUser


const Component = styled(Box)`

`

const Wraper = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '90vw',
    flexDirection: 'column',
    padding: '25px 35px',
    flex: 1,
    '& > div,& > button,& > p': {
        marginTop: '20px'
    },
    [theme.breakpoints.down('md')]: {
        width: '100vw',
        padding: '20px 30px',
        marginTop: '0'
    }
    ,
    [theme.breakpoints.down('sm')]: {
        width: '100vw',
        // padding: '20px 30px',
        marginTop: '0'
    }
}))


const AddUserBtn = styled(Button)`
    text-transform: none;
    /* background-color: #fB641B; */
    color: #fff;
    height: 48px;
    width: 90vw;;
    border-radius: 2px;
    padding: 25px 35px;
    margin: 50px;

`

const UserForm = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: 'wrap',
    flexDirection: 'row',
    /* border: 1px solid gray; */
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',

    }
}))
