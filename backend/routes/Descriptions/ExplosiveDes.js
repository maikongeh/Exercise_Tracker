const router = require('express').Router();
let ExType = require('../../models/ExerciseTypes/ExplosiveType');

router.route('/').get((req,res) => {
    ExType.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const description = req.body.description;
    const newDes = new ExType({description});

    newDes.save()
        .then(()=> res.json('Explosive Des added lmao!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;