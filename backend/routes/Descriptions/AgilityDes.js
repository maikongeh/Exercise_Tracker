const router = require('express').Router();
let AgType = require('../../models/ExerciseTypes/AgilityType');

router.route('/').get((req,res) => {
    AgType.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const description = req.body.description;
    const newDes = new AgType({description});

    newDes.save()
        .then(()=> res.json('Agility Des added lmao!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;