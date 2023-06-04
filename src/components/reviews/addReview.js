import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function AddReview(props){

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const navigate = useNavigate()

    const addReviewRequest = async () => {

      try{

        const token = localStorage.getItem('token');

        if(!token){
          alert("You should sign in first")
          return navigate("/signin")
        }

        await axios({
          method: 'post',
          url: "http://localhost:8000/reviews/"+props.id,
          headers: {"authorization" : `Bearer ${token}`},
          data: {
            rate: rating + 1,
            description: comment
          }
      })

        setRating(0);
        setComment('');
        props.handleReviewOn()

      } catch(error) {
        console.log(error)
        if(error.response.status === 403){
          alert("Your session has expired, sign in first")
          navigate("/signin")
        }
        if(error.response.status === 400){
          alert("SPAM: You cannot add more than one review to the same doctor")
          setRating(0);
          setComment('');
          props.handleReviewOn()
        }
      }
    }

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    addReviewRequest()
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={rating} onChange={handleRatingChange} required>
          <option value={0}>1 star</option>
          <option value={1}>2 stars</option>
          <option value={2}>3 stars</option>
          <option value={3}>4 stars</option>
          <option value={4}>5 stars</option>
        </select>
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} required />
      </div>
      <br></br>
      <button type="submit" style={{backgroundColor:'#424242'}}>Submit</button>
    </form>
  );
};


