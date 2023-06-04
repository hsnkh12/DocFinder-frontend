import { Grid } from '@mui/material';
import { Link } from "react-router-dom"

export default function DoctorItem(props){

    const doc = props.doc
    const docURL = '/doctors/'+doc.doctor_id
    const reviewsURL = '/reviews/'+doc.doctor_id

    const getRatingAvg = () => {

        let rate = doc.avgReviews[0].rating
        rate = !rate? 0.0: Math.round(rate, 1)
  
        return rate
      }
  
      const getRatingColor = () => {

        const rate = getRatingAvg()

        if (rate == 0){
            return "gray"
        }
  
        if( rate  > 0 && rate < 2.0 ){
          return "#c21f1f"
        } 
        if ( rate >= 2.0 && rate < 3.0 ){
          return "#cf9a1f"
        } 
        if ( rate >= 3.0 && rate < 4){
          return '#4caf50'
        }
        return '#2d8531'
      }
  

    return (
        <Grid container spacing={2}>

            <Grid item xs={9} md={9} style={{textAlign:'start'}}>
            <Link to={docURL} style={{fontSize:20}}>{doc.name}</Link>
            <Grid container> 
                <Grid item xs={2} md={2}>
                <p style={{fontWeight: 'bold'}}>{doc.field_name}</p>
                </Grid>
                <Grid item xs={10} md={10}>
                <p>Cyprus Central Hospital</p>
                </Grid>
            </Grid>
            <p style={{maxWidth:300}}>Esref Bitlis Cad. Narlik Street, Famagusta</p>
            </Grid>
            <Grid item xs={3} md={3} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

                <div style={{marginBottom:20}}>

                <p style={{fontSize:20, color:getRatingColor()}}>{getRatingAvg()}</p>
                <Link to={reviewsURL}>Reviews</Link>

                </div>
                
            </Grid>


        </Grid>
    )

}