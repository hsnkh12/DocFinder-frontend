import DoctorsTable from "../components/admin/doctorsTable"
import AdminFilterForm from "../components/admin/adminFilterDoctos"
import { Container } from "@mui/material"

export default function AdminDoctorsPage(){


    return (
        <Container style={{marginTop:70}}>
            <AdminFilterForm></AdminFilterForm>
            <br></br>
            <br></br>
            <DoctorsTable></DoctorsTable>
        </Container>
    )
}