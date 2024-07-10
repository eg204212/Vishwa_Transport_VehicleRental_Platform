const express = require('express');
const Review = require('../model/reviews');
const router = express.Router();



router.post('/', async (req,res)=> {

    try{

        const {userName, reviewText, rating} = req.body;
        const newReview = new Review({userName, reviewText,rating});
        await newReview.save();
        res.status(201).send("Review Submitted!")

    }catch(error){
        res.status(500).send("Submitting Fail!")
    }
});


router.get('/', async (req,res)=>{

    try{

        const reviews = await Review.find();
        res.status(200).send(reviews)
    }catch(error){
        res.status(500).json("Fail!");
    }
});

module.exports = router;