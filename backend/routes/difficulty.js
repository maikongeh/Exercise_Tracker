const router = require('express').Router();
let difficult = require('../models/difficulty');

router.route('/').get((req,res) => {
    difficult.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const difficulty= req.body.difficulty;
    const newDiff = new difficult({difficulty});

    newDiff.save()
        .then(()=> res.json('Diff added lmao!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;