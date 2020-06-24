const router = require('express').Router();
let SportType = require('../../models/SportTypes/SportType.model');

router.route('/').get((req,res) => {
    SportType.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const description = req.body.description;
    const newDes = new SportType({description});

    newDes.save()
        .then(()=> res.json('New sport added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;