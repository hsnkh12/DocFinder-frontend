
import DoctorItem from './doctorItem';

export default function DoctorsList(props){

    const sortByReview = (a,b) => {
        const ratingA = a.avgReviews[0].rating === null ? 0 : a.rating;
        const ratingB = a.avgReviews[0].ratin === null ? 0 : b.rating;

        return ratingB - ratingA; 
    }

    const sortAlpha = (a,b) => {

        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
        return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
        return 0;
    }

    return (
        <div>

            { props.doctors.sort( (a,b) => {

                if (props.orderBy === "reviews"){
                    sortByReview(a,b)
                }

                else{
                    sortAlpha(a,b)
                }

            })
            .map( doc => { return (
                <div key={doc.doctor_id}>
                    <DoctorItem doc={doc}></DoctorItem>
                    <hr style={{marginRight:30}}></hr>
                    <br></br>
                </div>)
            })}
        
        </div>
    )
}