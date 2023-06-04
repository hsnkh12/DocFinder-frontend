
import DoctorItem from './doctorItem';

export default function DoctorsList(props){


    return (
        <div>
            
            {
            props.doctors
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