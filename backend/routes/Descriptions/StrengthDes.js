const router = require('express').Router();
let StrType = require('../../models/ExerciseTypes/StrengthType');

router.route('/').get((req,res) => {
    StrType.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const description = req.body.description;
    const newDes = new StrType({description});

    newDes.save()
        .then(()=> res.json('Strength Des added lmao!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;