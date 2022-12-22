const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// create a user using:POST "/api/auth/createuser".No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with this email exist already
    try{
    let user;
    user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ error: "A User with this email already exists" })
    }
    // create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.json(user)
} catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");
}
})


module.exports = router