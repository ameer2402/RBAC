const router = require('express').Router();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');
const passport = require('passport');
const { registerValidator } = require('../utils/validators');
const { cookieValidation } = require('../utils/authentication');

router.get(
  '/login',
  async (req, res) => {
    res.render('login');
  }
);

router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try{
    const token = await User.matchPasswordandGenerateToken(email, password);
    res.cookie("token",token);
    res.redirect("/");
    }
    catch (error) {
      // Set the flash message
      req.flash('error', error.message);
  
      // Redirect back to the login page
      res.redirect('/auth/login');
    }
    
});

router.get(
  '/register',async (req, res) => {
    res.render('register');
  }
);

router.post(
  '/register',
  registerValidator,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        errors.array().forEach((error) => {
          req.flash('error', error.msg);
        });
        res.render('register', {
          email: req.body.email,
          messages: req.flash(),
        });
        return;
      }

      const { email } = req.body;
      const doesExist = await User.findOne({ email });
      if (doesExist) {
        req.flash('warning', 'Username/email already exists');
        res.redirect('/auth/register');
        return;
      }
      const user = new User(req.body);
      await user.save();
      req.flash(
        'success',
        `${user.email} registered succesfully, you can now login`
      );
      res.redirect('/auth/login');
    } catch (error) {
      next(error);
    }
  }
);

router.get('/logout', (req, res) => {
  res.clearCookie('token'); // Clear the token cookie
  req.session.destroy((err) => { // Destroy session
      if (err) {
          console.log('Failed to destroy session during logout', err);
          return res.redirect('/');  
      }
      res.clearCookie('connect.sid'); // If you're using express-session
      res.redirect('/'); // Redirect to homepage or login
  });
});

module.exports = router;

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     res.redirect('/auth/login');
//   }
// }

// function ensureNOTAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     res.redirect('back');
//   } else {
//     next();
//   }
// }
