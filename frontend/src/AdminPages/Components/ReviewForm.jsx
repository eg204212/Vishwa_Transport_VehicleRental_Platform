import  React, {useState} from 'react';
import axios from 'axios';

function ReviewForm () {
    const [userName, setUSerName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("");

    
const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        await axios.post('http://localhost:5001/reviews', {userName}, {reviewText}, {rating});
        alert("Review Submit!");
    }catch(error){
        console.error("Error Submitting Review", error);

    }

}


return(

    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input

                type="text"
                id="username"
                value = {userName}
                onChange={(e)=>setUSerName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
            />
        </div>

        <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reviewText">Review</label>
                <textarea
                    id="reviewText"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">Rating</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>

    </form>
);

}

export default ReviewForm;