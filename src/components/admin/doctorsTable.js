import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const rows = [
  {id:"123", name:"Dr. Hassan", speciality:"General surgery", clinic:"cl 1", date_added:"19/12/2023"},
  {id:"123", name:"Dr. Hassan", speciality:"General surgery", clinic:"cl 1", date_added:"19/12/2023"},
  {id:"123", name:"Dr. Hassan", speciality:"General surgery", clinic:"cl 1", date_added:"19/12/2023"},
];

export default function DoctorsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Speciality</TableCell>
            <TableCell align="right">Clinic</TableCell>
            <TableCell align="right">Date added</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.speciality}</TableCell>
              <TableCell align="right">{row.clinic}</TableCell>
              <TableCell align="right">{row.date_added}</TableCell>
              <TableCell align="right"><Button variant="contained" style={{backgroundColor:'red'}}>remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}