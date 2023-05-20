import { Link } from "react-router-dom"

export default function AdminPage(){


    return (
        <div>
            <h1>Admin panel</h1>
            <hr></hr>
            <Link to="/admin/doctors">Doctors</Link>
            <br></br>
            <br></br>
            <Link to="/admin/scrap-doctors">Scrap doctors</Link>
            <br></br>
            <br></br>
            <Link to="/admin/users">Users</Link>
        </div>

    )
}