import { Link , useNavigate, useParams} from "react-router-dom"
import axios from 'axios'
import { useContext, useState } from "react"
import { userAdminContext } from "../hooks/auth" 


export default function AdminPage(){

    const {isUserAdmin} = useContext(userAdminContext) 

    if(isUserAdmin){
        return (
            <div>
            <h1>Admin panel</h1>
            <hr></hr>
            <Link to="/admin/doctors" >Doctors</Link>
            <br></br>
            <br></br>
            <Link to="/admin/scrap-doctors" >Scrap doctors</Link>
            <br></br>
            <br></br>
            <Link to="/admin/users" >Users</Link>
        </div>
        )
    }
    return (<p>You should be admin to access this panel</p>

    )
}