import UsersTable from "../components/admin/usersTable"
import { Container } from "@mui/material"

export default function AdminUsersPage(){


    return (
        <Container style={{marginTop:70}}>
            <UsersTable></UsersTable>
        </Container>
    )
}