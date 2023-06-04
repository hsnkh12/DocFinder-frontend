import { Link } from "react-router-dom"

export default function DoctorProfile(props){

    const doc = props.doctor

    const getRatingAvg = () => {

        let rate = doc.avgReviews[0].rating
        rate = !rate? 0.0: parseInt(rate)
  
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
        <div>

        <img src={doc.image} style={{width:300, height:300}} />
        <h3 style={{marginBottom:0}}>{doc.name}</h3>
        <p style={{fontSize:16}}>{doc.field_name}</p>
        <br></br>
        <hr></hr>
        <p style={{fontSize:14}} >{doc.phone_number}</p>
        <p style={{fontSize:14}}>{doc.email}</p>
        <p style={{fontSize:14, maxWidth:300}}>Esref Bitlis Cad. Narlik Street, Famagusta</p>

        <p style={{fontSize:25, color:getRatingColor(), marginBottom:0}}>{getRatingAvg()}</p>
        <Link to={"/reviews/"+doc.doctor_id}>Reviews</Link>

</div>

    )
}