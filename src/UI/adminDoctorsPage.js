import DoctorsTable from "../components/admin/doctorsTable"
import AdminFilterForm from "../components/admin/adminFilterDoctos"
import { Container } from "@mui/material"
import { useContext , useState ,useEffect} from "react"
import { userAdminContext } from "../hooks/auth"
import axios from "axios"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default function AdminDoctorsPage(props){

    const [doctors, setDoctors] = useState([])
    const [isDelete, setIsDelete] = useState(false)
    const [spec, setSpec] = useState("all")
    const [clinic, setClinic] = useState("Cyprus Central Hospital")
    const {isUserAdmin} = useContext(userAdminContext)
    const navigate = useNavigate()
    
    const getDoctorsRequest = async () => {

        try{
  
          let field_name = spec === "all"? ".*": spec
          let clinic_id = clinic === "Cyprus Central Hospital"? "CCH": ".*"
  
          const response = await axios.request('http://localhost:8000/doctors?field_name='+field_name+"&clinic_id="+clinic_id,)
  
          setDoctors(response.data)
  
        } catch (error) {
          console.log(error)
        }
      }

      const deleteDoctorRequest = async (id) => {

        try{

            const token = localStorage.getItem('token');

        if(!token){
          alert("You should sign in first")
          return navigate("/signin")
        }

        const response = await axios({
          method: 'delete',
          url: "http://localhost:8000/doctors/"+id,
          headers: {"authorization" : `Bearer ${token}`},
        })

        setIsDelete(!isDelete)
        console.log(response.data)

        } catch (error){


        }
      }
  
      useEffect(() => {
        getDoctorsRequest()
  
      },[spec, clinic, isDelete])


    if (isUserAdmin){
        return (
            <Container style={{marginTop:70}}>
                <Link to={"/admin"}>Back to panel</Link>
                <AdminFilterForm spec={spec} clinic={clinic} setSpec={setSpec} setClinic={setClinic}></AdminFilterForm>
                <br></br>
                <br></br>
                <DoctorsTable doctors={doctors} deleteDoctorRequest={deleteDoctorRequest}></DoctorsTable>
            </Container>
        )

    }

    return (<p>You should be admin to access this panel</p>)

    
}