const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
// const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/usersRouter')
const postRouter = require('./routes/postsRouter')
const commentRouter = require('./routes/commentsRouter')
app.use(express.json())
dotenv.config();
// mongodb+srv://adityaozalwar:adityadb@cluster0.popse55.mongodb.net/?retryWrites=true&w=majority
// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://adityaozalwar:adityadb@cluster0.popse55.mongodb.net/?retryWrites=true&w=majority');
        console.log("Database connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

//middleware
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/comments", commentRouter)
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.listen(4000, () => {
    connectDB()
    console.log(`Server is working on port : 4000`);
});
