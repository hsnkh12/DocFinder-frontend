import { Grid } from '@mui/material';
import { Link } from "react-router-dom"

export default function DoctorItem(){

    return (
        <Grid container spacing={2}>

            <Grid item xs={9} md={9} style={{textAlign:'start'}}>
            <Link to="/doctors/123" style={{fontSize:20}}>Dr. Emery Heck</Link>
            <Grid container> 
                <Grid item xs={2} md={2}>
                <p style={{fontWeight: 'bold'}}>General surgery</p>
                </Grid>
                <Grid item xs={10} md={10}>
                <p>Clinic name</p>
                </Grid>
            </Grid>
            <p style={{maxWidth:300}}>addresss: 86 Athinon StreetNora Court3rd Floor Office Flat 301-302.....</p>
            </Grid>
            <Grid item xs={3} md={3} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

                <div style={{marginBottom:20}}>

                <p style={{fontSize:20, color:'#4caf50'}}>4.5</p>
                <Link to="/react">Reviews</Link>

                </div>
                
            </Grid>


        </Grid>
    )

}