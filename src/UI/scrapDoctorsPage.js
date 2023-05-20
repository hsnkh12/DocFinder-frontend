import React, { useState } from 'react';
import { Container } from '@mui/material';

export default function ScrapDoctorsPage(props){

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRating(0);
    setComment('');
    props.handleReviewOn()
  };

  return (
    <Container style={{marginTop:70}}>
      <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="rating">Clinic:</label>
        <select id="rating" onChange={handleRatingChange}>
          <option value={0}>select a clinic</option>
          <option value={1}>CHA</option>
        </select>
      </div>
      <div>
        <label htmlFor="rating">Speciality:</label>
        <select id="rating" onChange={handleRatingChange}>
          <option value={0}>select a speciality</option>
          <option value={1}>General surgery</option>
        </select>
      </div>
      <br></br>
      <button type="submit" style={{backgroundColor:'#424242'}}>Submit</button>
      </form>
    </Container>
    
  );
};


