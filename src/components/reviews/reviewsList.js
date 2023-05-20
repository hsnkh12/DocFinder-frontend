import { Grid } from "@mui/material"
import Review from "./review"

export default function ReviewsList(){


    return (
        <div>
            <Grid item>
                <Review></Review>
                <hr></hr>
                <br></br>
            </Grid>

            <Grid item>
                <Review></Review>
                <hr></hr>
                <br></br>
            </Grid>
        </div>
    )
}