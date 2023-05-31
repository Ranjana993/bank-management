import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleUserData = ({ user }) => {
    const navigate = useNavigate();

    return (
        <TableRow onClick={() => navigate(`/detailed-page/${user._id}`)} style={{ cursor: "pointer" }}>
            <TableCell
                key={user.id}
                align={user.align}
                style={{ top: 57, minWidth: user.minWidth }}
            >
                {user.name}
            </TableCell>
            <TableCell
                key={user.id}
                align={user.align}
                style={{ top: 57, minWidth: user.minWidth }}
            >
                {user.fatherName}
            </TableCell>
            <TableCell
                key={user.id}
                align={user.align}
                style={{ top: 57, minWidth: user.minWidth }}
            >
                {user.accountNumber}
            </TableCell>
            <TableCell
                key={user.id}
                align={user.align}
                style={{ top: 57, minWidth: user.minWidth }}
            >
                {user.email}
            </TableCell>
        </TableRow>
    )
}

export default SingleUserData