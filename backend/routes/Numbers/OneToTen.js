const router = require('express').Router();
let numbers = require('../../models/Numbers/OneToTen.model');

router.route('/').get((req,res) => {
    numbers.find()
    .then(nums => res.json(nums))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const RPE = req.body.RPE;
    const newNum = new numbers({RPE});

    newNum.save()
        .then(()=> res.json('Number Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;