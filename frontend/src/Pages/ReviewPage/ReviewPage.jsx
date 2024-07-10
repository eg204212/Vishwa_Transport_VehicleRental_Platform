import React from 'react';
import ReviewForm from '../../Components/ReviewForm';
import ReviewList from '../../Components/ReviewList';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';
import NavBar from '../../AdminPages/Components/NavigationBar/Navigation.jsx';

function ReviewsPage () {

    return (
        <div>
            <NavBar/>
            <h1 className= "text-3xl font-bold text-center my-6" >User Reviews</h1>
            <div className = "container mx-auto px-4">
                <ReviewForm/>
                <ReviewList/>
            </div>
            <Footer/>
        </div>
    );
}

export default ReviewsPage;