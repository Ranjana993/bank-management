import { Box, Button, TextField, styled } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header"
import axios from "axios"

const newUserData = {
    name: "",
    fatherName: "",
    uidNumer: "",
    cifNumber: "",
    email: "",
    imgUrl: "",
    address: "",
    mobileNumber: "",
    accountNumber: "",
    state: ""
}



const AddUser = () => {
    const [newUser, setNewUser] = useState(newUserData)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }



    // signUpUser
    const signUpUser = async (e) => {
        // add-new-user
        try {
            if (!(newUser.name && newUser.fatherName && newUser.uidNumer && newUser.cifNumber && newUser.email && newUser.address && newUser.mobileNumber && newUser.accountNumber && newUser.state)) {
                alert("alll fields are required ")
            }
            const { data } = await axios.post("http://localhost:8080/add-new-user", newUser)
            if (data.success) {
                alert("data added successfully...")
                navigate("/")
            }

        }
        catch (error) {
            console.log(error);
        }
        // console.log(newUser);

    }
    return (
        <Header>
            <h1 style={{ textAlign: "center" }}>ADD NEW USER </h1>
            <UserForm style={{ display: 'flex', height: '100%' }}>
                <Wraper>
                    <TextField
                        variant="standard"
                        name='name'
                        value={newUser.name}
                        onChange={e => handleChange(e)}
                        label="Enter Your Name"
                    />
                    <TextField
                        variant="standard"
                        name='accountNumber'
                        value={newUser.accountNumber}
                        onChange={e => handleChange(e)}
                        label="Enter accountNumber"
                    />
                    <TextField
                        variant="standard"
                        name='cifNumber'
                        value={newUser.cifNumber}
                        onChange={e => handleChange(e)}
                        label="Enter cifNumber"
                    />
                    <TextField
                        variant="standard"
                        name='email'
                        value={newUser.email}
                        onChange={e => handleChange(e)}
                        label="Enter email"
                    />
                    <TextField
                        variant="standard"
                        name='address'
                        value={newUser.address}
                        onChange={e => handleChange(e)}
                        label="Enter address"
                    />
                </Wraper>
                {/*  */}
                <Wraper>
                    <TextField
                        variant="standard"
                        name='fatherName'
                        value={newUser.fatherName}
                        onChange={e => handleChange(e)}
                        label="Enter fatherName"
                    />
                    <TextField
                        variant="standard"
                        name='uidNumer'
                        value={newUser.uidNumer}
                        onChange={e => handleChange(e)}
                        label="Enter uidNumer"
                    />
                    <TextField
                        variant="standard"
                        name='imgUrl'
                        value={newUser.imgUrl}
                        onChange={e => handleChange(e)}
                        label="Enter your image Url"
                    />
                    <TextField
                        variant="standard"
                        name='mobileNumber'
                        value={newUser.mobileNumber}
                        onChange={e => handleChange(e)}
                        label="Enter your mobileNumber"
                    />
                    <TextField
                        variant="standard"
                        name='state'
                        value={newUser.state}
                        onChange={e => handleChange(e)}
                        label="Enter state"
                    />
                </Wraper>
            </UserForm>
            <AddUserBtn variant='contained' onClick={() => signUpUser()}>AddUser</AddUserBtn>
        </Header>
    )
}

export default AddUser


// const Component = styled(Box)`

// `

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
