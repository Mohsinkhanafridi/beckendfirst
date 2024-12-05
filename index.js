import express from "express";
import dotenv from "dotenv";
import CommentRoute from "./Routes/CommentsRoute.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/",(req, res)=>{
    res.status(200).send("mohsin khan afridi");
});

app.use("/comments", CommentRoute);

app.listen(PORT,()=>{
    console.log(`server start with mohsin ${PORT}`)
})