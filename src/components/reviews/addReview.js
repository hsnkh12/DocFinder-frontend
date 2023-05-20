import React, { useState } from 'react';

export default function AddReview(props){

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
    // You can perform additional actions with the rating and comment here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Reset the form
    setRating(0);
    setComment('');
    props.handleReviewOn()
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value={0}>Select a rating</option>
          <option value={1}>1 star</option>
          <option value={2}>2 stars</option>
          <option value={3}>3 stars</option>
          <option value={4}>4 stars</option>
          <option value={5}>5 stars</option>
        </select>
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} />
      </div>
      <br></br>
      <button type="submit" style={{backgroundColor:'#424242'}}>Submit</button>
    </form>
  );
};


