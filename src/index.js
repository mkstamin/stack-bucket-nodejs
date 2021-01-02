/*
* Title: Stack Bucket
* Description:A simple Shoping List Application Made with Node & Express
* Author:Mks Tamin
* Date: 02.01.2021
*
*/


const express=require('express');

const app=express()


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3000,()=>{
    console.log("Server is listening on Port 3000");
})
