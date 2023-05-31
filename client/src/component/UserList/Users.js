import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from "axios"
import { styled } from '@mui/material';
import SingleUserData from '../../pages/SingleUserData';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'fatherName', label: 'Father Name', minWidth: 170 },
  {
    id: 'accountNo', label: 'accountNo', minWidth: 170,
  },
  { id: 'email', label: 'email', minWidth: 170 },
];


const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([])

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const allUserList = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/get-all-user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      if (data.success) {
        setRows(data.users)
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    allUserList();
  }, [])


  return (
    <Paper sx={{ width: '100%', marginTop: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>List of all customer</h1>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table aria-label=" table">
          <TableHeader>
            <TableRow style={{ fontSize: "19px" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              rows.map((user) => (
                <SingleUserData  user={user}/>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default Users


const TableHeader = styled(TableHead)`
  font-weight: 600 !important;
  font-size:17px !important;

`