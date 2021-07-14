const asyncHandler = require('express-async-handler');
const User = require("../Models/Users");


const createUser = asyncHandler(async(req,res) => {
  const user = new User({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      email: req.body.email,
      password: req.body.password
  });
  try {
      const registration = await user.save();
      res.json({
          message : "created successfully",
          body: registration
      });
  } catch (error) {
      res.json({message: error});
  }
 
    
})

const logUser = asyncHandler(async(req,res) =>{
 try {
    const email = req.body.email;
    const data = await User.findOne({email});
     if(data&& (data.password===req.body.password)){
         res.json({
             message:"successfully login",
             data: data
         })
     }
     else{
         res.json({
             message: "invalid Email or password"
         })
     }
 } catch (error) {
     res.json({
         message: error
     })
 }   
})

module.exports = {
    createUser,
    logUser
}