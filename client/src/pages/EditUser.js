import { Box, Button, TextField, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../component/Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



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
const EditUser = () => {
    const [newUser, setNewUser] = useState(newUserData)
    const { id } = useParams()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }


    const findUserByID = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/get-single-user/${id}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
            if (data.success) {
                setNewUser(data.user)
            }
        }
        catch (error) {
            console.log("something went wrong while getting single user info", error)
        }
    }

    useEffect(() => {
        findUserByID()
    }, [])

    const UpdateUser = async (e) => {
        // add-new-user
        try {
            if (!(newUser.name && newUser.fatherName && newUser.uidNumer && newUser.cifNumber && newUser.email && newUser.address && newUser.mobileNumber && newUser.accountNumber && newUser.state)) {
                alert("all fields are required ")
            }
            const { data } = await axios.put(`http://localhost:8080/update-user/${id}`, newUser)
            if (data.success) {
                alert("data updated successfully...")
                navigate("/")
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Header>
            <h1 style={{ textAlign: "center" , marginTop:'22px'}}>EDIT CUSTOMER DETAIL </h1>
            <UserForm style={{ display: 'flex', height: '100%' }}>
                <Wraper>
                    <TextField
                        variant="standard"
                        name='name'
                        value={newUser.name}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='accountNumber'
                        value={newUser.accountNumber}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='cifNumber'
                        value={newUser.cifNumber}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='email'
                        value={newUser.email}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='address'
                        value={newUser.address}
                        onChange={e => handleChange(e)}
                    />
                </Wraper>
                {/*  */}
                <Wraper>
                    <TextField
                        variant="standard"
                        name='fatherName'
                        value={newUser.fatherName}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='uidNumer'
                        value={newUser.uidNumer}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='imgUrl'
                        value={newUser.imgUrl}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='mobileNumber'
                        value={newUser.mobileNumber}
                        onChange={e => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        name='state'
                        value={newUser.state}
                        onChange={e => handleChange(e)}
                    />
                </Wraper>
            </UserForm>
            <Box style={{display:'flex'}}>
                <AddUserBtn variant='contained' onClick={() => navigate(`/`)}>Back</AddUserBtn>
                <AddUserBtn variant='contained' onClick={() => UpdateUser()}>Update User</AddUserBtn>
            </Box>
        </Header>
    )
}

export default EditUser

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