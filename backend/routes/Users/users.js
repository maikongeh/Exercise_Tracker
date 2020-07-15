const router = require('express').Router();
let users = require('../../models/Users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();




router.route('/').get((req,res) => {
    users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
 

    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    users.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({ msg : 'User already exists'}); 
            const newUser = new users({name, email, password});
            //Create salt and hash
            bcrypt.genSalt(5,(err, salt) => {
                if(err) throw err;
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                {id: user.id},
                                process.env.jwtsecret,
                                // token to last 1h
                                {expiresIn: 3600},
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user : {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                } 
                            )  
                        })
                })
            })
        })

    

    
});

module.exports = router;