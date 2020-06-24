const router = require('express').Router();
let EnType = require('../../models/ExerciseTypes/EnduranceType');

router.route('/').get((req,res) => {
    EnType.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const description = req.body.description;
    const newDes = new EnType({description});

    newDes.save()
        .then(()=> res.json('Endurance Des added lmao!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;