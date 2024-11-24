require("dotenv").config();
const jwt=require("jsonwebtoken");
const secret=process.env.JWT_SECRET;

function generateToken(user){
   const payload={
      id:user._id,
       email:user.email,
       role:user.role,
   }
   return jwt.sign(payload,secret);
}

function validateToken(token){
   return jwt.verify(token,secret);
}

module.exports={
    generateToken,
    validateToken,
}