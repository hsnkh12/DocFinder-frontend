import Review from "../reviews/review"
import { Link } from "react-router-dom"


export default function DoctorBio(props){

    const doc = props.doctor

    return (

        <div style={{textAlign:'left'}}>
            <h2 >Education</h2>
            <p>{doc.education}</p>


            <hr></hr>

            <h2 >Experience</h2>
            <p>{doc.experience}</p>

            <hr></hr>

            <h2 >Reviews</h2>
            { doc.reviewResult ? <Review review={doc.reviewResult}></Review>: <p>No reviews added to this doctor</p>}
            <Link to={"/reviews/"+doc.doctor_id}>View all..</Link>
        </div>
    )
}