const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const bcrypt = require('bcrypt')


//Create 
router.post("/create",async(req,res)=>{
    try{
        const newComment = new Comment(req.body)
        const savedPost = await newComment.save()
        res.status(200).json(savedPost)
    }
    catch(err){

    }
})

//Update

router.put('/:id',async(req,res)=>{
    try{
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Delete

router.delete('/:id',async(req,res)=>{
    try{
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json("Comment has been deleted!!!")
    }
    catch(err){
        res.status(500).json(err)
    }
})


//Get Post Comment
router.get('/post/:postId',async(req,res)=>{
    try{
        const comments = await Post.find({postId:req.params.userId})
        res.status(200).json(comments)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router