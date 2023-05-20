import { Container } from "@mui/material"
import {Grid} from "@mui/material"
import {Link} from '@mui/material';
import DoctorProfile from "../components/doctor/doctorProfile";
import DoctorBio from "../components/doctor/doctorBio";

export default function DoctorPage(){


    return (
            
        <Grid container spacing={2} style={{marginTop:70}}>

            <Grid item xs={12} md={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <DoctorProfile></DoctorProfile>
            </Grid>
            <Grid item xs={12} md={7}>
                <DoctorBio></DoctorBio>
            </Grid>
        </Grid>



    )
}