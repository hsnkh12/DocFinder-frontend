import Review from "../reviews/review"
import { Link } from "react-router-dom"


export default function DoctorBio(){


    return (

        <div style={{textAlign:'left'}}>
            <h2 >Education</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat, nsectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>


            <hr></hr>

            <h2 >Experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat, nsectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>

            <hr></hr>

            <h2 >Reviews</h2>
            <Review></Review>
            <Link to="/reviews/123">View all..</Link>
        </div>
    )
}