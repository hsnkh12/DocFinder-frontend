import { Container } from "@mui/material"
import {Grid} from "@mui/material"
import {Link} from '@mui/material';
import DoctorProfile from "../components/doctor/doctorProfile";
import DoctorBio from "../components/doctor/doctorBio";
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'

export default function DoctorPage(){

    const params = useParams();
    const [doctor, setDoctor] = useState(null)

    const getDoctorRequest = async() => {

        try{

            const response = await axios.request('http://localhost:8000/doctors/'+params.id)

            setDoctor(response.data)

        } catch(error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getDoctorRequest()
    },[])


 
    if (doctor){ return(
    <Grid container spacing={2} style={{marginTop:70}}>

        <Grid item xs={12} md={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <DoctorProfile doctor={doctor}></DoctorProfile>
        </Grid>
        <Grid item xs={12} md={7}>
            <DoctorBio doctor={doctor}></DoctorBio>
        </Grid>
    </Grid>)} 
    
    return(<></>)



    
}