const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req,res)=>{
  res.send('hey');
})

app.get('/create', async (req,res)=>{
  let createduser = await userModel.create({
    name: "amit",
    email: "amit@gmail.com",
    username: "amit sharma"
  })
  res.send(createduser);
})

app.get('/read', async (req,res)=>{
  // let users = await userModel.findOne({username: "jagdish pawar"});
  let users = await userModel.find();
  res.send(users);
}) 

app.get('/update', async (req,res)=>{
  let updateduser = await userModel.findOneAndUpdate({_id: "6860128695006fce465d13f8"}, {name: "om", username:"om prakash", email:"omapur583@gmail.com"}, {new: true} );
  res.send(updateduser);
})

app.get('/delete', async (req,res)=>{
  let users = await userModel.findOneAndDelete({username: "jagdish pawar"});
  res.send(users);
}) 

app.listen(3000);