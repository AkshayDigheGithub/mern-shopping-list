const express = require('express');
const User = require('../../models/User');
const router = express.Router();


router.post('/register', (req, res) => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });
    newUser.save()
    .then(user => res.json(user))
    .catch(err => res.json({err:err}))
});

/* router.post('/register', (req, res) => {
    User.create(req.body, (err,user) => {
        if(err) return res.status(500).json({error: err});
        else return res.json({message: "User Added", user: user});
    });
}); */

module.exports = router;