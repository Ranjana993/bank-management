import React, { useEffect, useState } from 'react'
import Header from '../component/Header/Header'
import { Box, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import EditIcon from '@mui/icons-material/Edit';

const DetailPage = () => {
    const [singleUser, setSingleUser] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()


    const findUserByID = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/get-single-user/${id}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
            if (data.success) {
                setSingleUser(data.user)
            }
        }
        catch (error) {
            console.log("something went wrong while getting single user info", error)
        }
    }

    useEffect(() => {
        findUserByID()
    }, [])


    return (
        <Header>
            <Container>
                <Box>
                    <StyledImage src={"https://as2.ftcdn.net/v2/jpg/04/43/94/63/1000_F_443946370_WUGFjvltxCqxenfBOektCf1RvefGNH6B.jpg"} alt='profile-pic' />
                </Box>
                <Box>
                    <StyledBtn>
                        <span>Active </span> <ToggleOnIcon style={{ height: '60px', width: '70px', color: 'green' }} />  <EditIcon style={{ cursor: "pointer" }} onClick={() => navigate(`/edit-user/${singleUser._id}`)}/>
                    </StyledBtn>
                </Box>
                <DetailBox>
                    {/* <Box> */}
                        <UserInfo><span> Name : </span> <span style={{fontWeight:'400'}}>{singleUser.name} </span>  </UserInfo>
                        <UserInfo><span>Father Name : </span> <span>  {singleUser.fatherName} </span></UserInfo>
                        <UserInfo><span>Account number : </span> <span>{singleUser.accountNumber} </span>   </UserInfo>
                        <UserInfo><span>CIF Number : </span> <span> {singleUser.cifNumber}  </span>  </UserInfo>
                        <UserInfo><span>Email :  </span> <span>{singleUser.email} </span>   </UserInfo>
                        <UserInfo><span>Address : </span>  <span> {singleUser.address}</span>  </UserInfo>
                        <UserInfo><span>State :   </span> <span>{singleUser.state}  </span> </UserInfo>
                    {/* </Box> */}
                </DetailBox>
            </Container>
        </Header>
    )
}

export default DetailPage
const Container = styled(Box)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 22px;
    margin:auto;
    width: 30vw;
    height: 80vh;
    box-shadow: 2px 3px 12px 1px lightgray;
    margin-top: 45px;

`
const DetailBox = styled(Box)`
    padding: 12px;

`

const StyledImage = styled("img")({
    height: "160px",
    borderRadius: "50%",
    margin:'auto',
    marginLeft:'35%'

})
const UserInfo = styled(Box)`
    display: flex;
    
    justify-content: space-between;
    border-bottom: 0.5px solid lightgray;
    /* margin: 34px; */
    margin-top: 5px;
    padding: 5px;

`
const StyledBtn = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    
`