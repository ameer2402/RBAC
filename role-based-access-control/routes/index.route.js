const router = require('express').Router();
const {cookieValidation}=require("../utils/authentication");

router.get('/', cookieValidation,(req, res) => {
  console.log(req.user);
  res.render('index',{
    user:req.user||null,
  });
});

module.exports = router;
