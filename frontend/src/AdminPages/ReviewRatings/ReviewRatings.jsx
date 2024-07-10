import React from 'react';
import './ReviewRatings.css'; // Import CSS file for styling
import NavigationBar from '../Components/NavigationBar/Navigation.jsx'; 

const ReviewRatings = () => {
  return (
    <div>
      <NavigationBar />
      <div className="review-and-rating-page">
        <div className="review-rating-bar">
          <h2>Review & Ratings</h2>
        </div>
        <div className="star-rating-system">
          <h3>Star Rating System</h3>
          {/* Add star rating system here */}
        </div>
        <div className="reviews">
          <h3>Reviews</h3>
          {/* Add space for users to put reviews */}
        </div>
      </div>
    </div>
  );
}

export default ReviewRatings;
