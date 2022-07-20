const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const checkAccess = (permissions) => {
  return async (req, res, next) => {
   try {
    const userRole = req.user.role;
       if (permissions.includes(userRole)) {
           next();
       } else {
           return res.status(401).json("You don not have permission to perform this action.")
       }  
    
   } catch (error) {
    next(error)
   }
  }
 }
 
module.exports = { protect, checkAccess }