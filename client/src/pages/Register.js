import { Box, Button, Dialog, TextField, styled } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Register = () => {
    const [user, setUser] = useState({ name: "", memberID: "", email: "", password: "" })

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
        try {
            if (user.name === " " || user.email === " " || user.memberID === " " || user.password === " ") {
                alert("Plz fill all data")
            }
            else {
                const { data } = await axios.post("http://localhost:8080/register", user)
                if (data.sucsess) {
                    alert("register successfully");
                }
                navigate("/login")
                setUser({ name: " ", memberID: " ", email: " ", password: " " })
                handleClose()
            }


        } catch (error) {
            console.log(error);
        }


    }
    return (
        <Dialog open={open} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
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
                            name='memberID'
                            value={user.memberID}
                            onChange={e => handleChange(e)}
                            label="Enter memberID"
                        />
                        <TextField
                            variant="standard"
                            name='email'
                            value={user.email}
                            onChange={e => handleChange(e)}
                            label="Enter Email"
                        />

                        <TextField
                            variant="standard"
                            name='password'
                            value={user.password}
                            onChange={e => handleChange(e)}
                            label="Enter Password"
                        />
                        <LoginBtn variant='contained' onClose={handleClose} onClick={() => signUpUser()}>Register</LoginBtn>
                    </Wraper>
                </Box>
            </Component>
        </Dialog>
    )
}

export default Register


const Component = styled(Box)`
    height: 70vh;
    width: 97vh;

`

const Wraper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div ,& > button ,& >p{
        margin-top: 20px;
    }


`

const LoginBtn = styled(Button)`
    text-transform: none;
    /* background-color: #fB641B; */
    color: #fff;
    height: 48px;
    border-radius: 2px;


`


