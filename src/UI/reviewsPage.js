import { Grid } from "@mui/material"
import Review from "../components/reviews/review"
import { Link } from "react-router-dom"
import {Button} from "@mui/material"
import ReviewsList from "../components/reviews/reviewsList"
import React, { useState, useEffect } from 'react';
import AddReview from "../components/reviews/addReview"
import {Container} from "@mui/material"
import {useParams} from 'react-router-dom'
import axios from 'axios'


export default function ReviewsPage(){

    const params = useParams()
    const [isAddReviewOn, setAddReviewOn] = useState(false)
    const [reviews, setReviews] = useState([])

    const getReviewsRequest = async ()=> {

        try{

            const response = await axios.get("http://localhost:8000/reviews/"+params.id)
            setReviews(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    const handleReviewOn = () => {
        setAddReviewOn(!isAddReviewOn)
    }

    useEffect( () => {
        getReviewsRequest()
    },[isAddReviewOn])

    return (
        <Container>
            <Grid container style={{marginTop:60}}>
                <Grid item xs={12} md={12} container style={{marginBottom:40}}>
                    <Grid xs={6} md={6}>
                        <Link to={"/doctors/"+params.id} style={{fontSize:25}}>Dr. Emery Heck's</Link>
                        </Grid>
                        <Grid xs={6} md={6}>
                        <Button variant="contained" onClick={handleReviewOn}>Add review</Button>
                    </Grid>
                </Grid>
                {isAddReviewOn===true? <Grid item xs={12} md={12}><AddReview isAddReviewOn={isAddReviewOn} handleReviewOn={handleReviewOn} id={params.id}></AddReview></Grid>: reviews.length > 0? <ReviewsList reviews={reviews}></ReviewsList>: <p>No reviews for this doctor...</p>}

            </Grid>
        </Container>
    )
}