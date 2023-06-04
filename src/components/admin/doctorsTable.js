import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function DoctorsTable(props) {

  const handleDeleteButton = (id) => {
    const c = window.confirm("Are you sure you want to delete doctor with id  '"+id+"'?")

    if(c){
      props.deleteDoctorRequest(id)
    }
  }

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
          {props.doctors.map((doc) => (
            <TableRow
              key={doc.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {doc.doctor_id}
              </TableCell>
              <TableCell align="right">{doc.name}</TableCell>
              <TableCell align="right">{doc.field_name}</TableCell>
              <TableCell align="right">{doc.clinic_id}</TableCell>
              <TableCell align="right">{doc.date_added}</TableCell>
              <TableCell align="right"><Button variant="contained" style={{backgroundColor:'red'}} onClick={ () => handleDeleteButton(doc.doctor_id) } >remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}