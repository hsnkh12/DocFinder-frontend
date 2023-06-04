import UsersTable from "../components/admin/usersTable"
import { Container } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { userAdminContext } from "../hooks/auth"
import { Link , useNavigate} from "react-router-dom"
import axios from "axios"


export default function AdminUsersPage(props){

    const {isUserAdmin} = useContext(userAdminContext) 
    const [users, setUsers] = useState([])
    const navigate = useNavigate()


    const getUsersRequest = async () => {

        try{

            const token = localStorage.getItem('token');

            if(!token){
            alert("You should sign in first")
            return navigate("/signin")
            }

            const response = await axios({
            method: 'get',
            url: "http://localhost:8000/users/",
            headers: {"authorization" : `Bearer ${token}`},
            })

            setUsers(response.data)


        } catch (error){
            console.log(error)
        }
    }


    useEffect( () => {
        getUsersRequest()
    },[])

    
    if(isUserAdmin){
        return (
            <Container style={{marginTop:70}}>
                <Link to={"/admin"}>Back to panel</Link>
                <br></br>
                <br></br>
                <br></br>
                <UsersTable users = {users}></UsersTable>
            </Container>
        )
    }

    return (<p>You should be admin to access this panel</p>)

    
}