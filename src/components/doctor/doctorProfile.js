import { Link } from "@mui/material"


export default function DoctorProfile(){


    return (
        <div>

        <div style={{width:300, height:300, backgroundColor:'gray'}}>Doctor's Image..</div>
        <h3 style={{marginBottom:0}}>Dr. Emery Heck</h3>
        <p style={{fontSize:16}}>General surgery</p>
        <br></br>
        <hr></hr>
        <p style={{fontSize:14}} >+90 533 888 20 29</p>
        <p style={{fontSize:14}}>Mohammad@clinic.com</p>
        <p style={{fontSize:14, maxWidth:300}}>addresss: 86 Athinon StreetNora Court3rd Floor Office Flat 301-302.....</p>

        <p style={{fontSize:25, color:'#4caf50', marginBottom:0}}>4.5</p>
        <Link to="/react">Reviews</Link>

</div>

    )
}