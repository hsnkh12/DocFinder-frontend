import { Grid } from "@mui/material"
import Review from "./review"

export default function ReviewsList(props){


    return (
        <div>
            { props.reviews.map( (rev) => {
                return(
                    <div>
                <Grid item>
                    <Review review={rev}></Review>
                </Grid>
                <br></br>
                <br></br>
                </div>
                )
            })}
            
        </div>
    )
}