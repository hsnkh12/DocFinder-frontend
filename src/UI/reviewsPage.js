import { Grid } from "@mui/material"
import Review from "../components/reviews/review"
import { Link } from "react-router-dom"
import {Button} from "@mui/material"
import ReviewsList from "../components/reviews/reviewsList"
import React, { useState, useEffect } from 'react';
import AddReview from "../components/reviews/addReview"
import {Container} from "@mui/material"

export default function ReviewsPage(){

    var [isAddReviewOn, setAddReviewOn] = useState(false)

    const handleReviewOn = () => {
        setAddReviewOn(!isAddReviewOn)
    }

    return (
        <Container>
            <Grid container style={{marginTop:60}}>
                <Grid item xs={12} md={12} container style={{marginBottom:40}}>
                    <Grid xs={6} md={6}>
                        <Link to="/doctors/123" style={{fontSize:25}}>Dr. Emery Heck's</Link>
                        </Grid>
                        <Grid xs={6} md={6}>
                        <Button variant="contained" onClick={handleReviewOn}>Add review</Button>
                    </Grid>
                </Grid>
                {isAddReviewOn===true? <Grid item xs={12} md={12}><AddReview isAddReviewOn={isAddReviewOn} handleReviewOn={handleReviewOn}></AddReview></Grid>: <ReviewsList></ReviewsList>}

            </Grid>
        </Container>
    )
}