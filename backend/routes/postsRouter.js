const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const bcrypt = require('bcrypt')
const verifyToken = require('../verifyToken')


//Create 
router.post("/create",verifyToken,async(req,res)=>{
    try{
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }
    catch(err){

    }
})

//Update

router.put('/:id',verifyToken,async(req,res)=>{
    try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatePost)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Delete

router.delete('/:id',verifyToken,async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted!!!")
    }
    catch(err){
        res.status(500).json(err)
    }
})


//Get Post Details

router.get('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get Posts
router.get('/', async (req, res) => {
    const query = req.query;
    try {
        let searchFilter = {};
        if (query.search) {
            searchFilter.title = { $regex: new RegExp(query.search, 'i') }; 
        }
        const posts = await Post.find(searchFilter);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Get User Posts
router.get('/user/:userId',async(req,res)=>{
    try{
        const posts = await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router