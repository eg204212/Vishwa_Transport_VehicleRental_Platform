import React, { useState } from 'react';
import './ReviewAndRating.css';
import UserDashboard from '../../../Components/UserDashboard/UserDashboard.js';

const ReviewAndRating = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleSave = () => {
        // Add logic to save the review
        console.log('Review saved');
    };

    return (
        <div className="review-and-rating-container">
            <UserDashboard />
            <div className="review-and-rating-content">
                <div className="tab">Review and Rating</div>
                <div className="review-box">
                    <div className="place-review">Place Your Review</div>
                    <div className="share-experience">
                        "Share your experience with us! 🚗 How was your adventure with our vehicles? Did you find the perfect ride for your trip? Let us know your thoughts and help future travelers make the best choice! Your feedback means the world to us! 🌎✨"
                    </div>
                    <div className="input-group">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Review:</label>
                        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
                    </div>
                    <button className="save-button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewAndRating;
