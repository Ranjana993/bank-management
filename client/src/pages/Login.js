import React, { useState } from 'react'
import { Box, Button, Dialog, styled, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState({ Username: "", password: "" })
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()




    const handleClose = () => {
        setOpen(false)
    }


    const onValueChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value })

    // login
    const loginUser = async () => {
        navigate("/")
    }

    return (
        <Dialog open={open} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Wraper>
                        <TextField
                            label="Enter Your meberID"
                            variant="standard"
                            name='Username'
                            value={login.Username}
                            // autoComplete='off'
                            onChange={e => onValueChange(e)}
                        />
                        <TextField
                            label="Enter Password"
                            variant="standard"
                            name='password'
                            // autoComplete='off'
                            value={login.password}
                            onChange={e => onValueChange(e)}
                        />
                        <LoginBtn variant='contained' onClose={handleClose} onClick={() => loginUser()}>Login</LoginBtn>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <CreateAccount onClick={() => navigate("/register")}>Create an Account </CreateAccount>
                    </Wraper>
                </Box>
            </Component>
        </Dialog>
    )
}

export default Login
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
    /* background-color: green; */
    color: #fff;
    height: 48px;
    border-radius: 2px;


`

const CreateAccount = styled(Button)`
font-size: 14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`
