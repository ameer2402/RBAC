const router = require('express').Router();
const {cookieValidation}=require("../utils/authentication");

router.get('/profile', cookieValidation,async (req, res, next) => {
  console.log(req.user);
  const user = req.user;
  
  res.render('profile', { user});
});

module.exports = router;
