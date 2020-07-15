const router = require('express').Router();
let AgilityExercise = require('../../models/Agility.model');
const auth = require('../../middleware/auth')

router.route('/').get((req,res) => {
    AgilityExercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post(auth, (req,res) => {
    const description = req.body.description;
    const sets = Number(req.body.sets);
    const duration = Number(req.body.duration);
    const newAgilityExercise = new AgilityExercise({
        description,
        sets,
        duration
    });

    newAgilityExercise.save()
        .then(()=> res.json('Agility Exercise added! AGILE NOT FRAGILE'))
        .catch(err => res.status(400).json('Error: hi' + err));
});

//get information of specific exercise by ID

router.route('/:id').get((req,res) => {
    AgilityExercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    AgilityExercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise Deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    AgilityExercise.findById(req.params.id)
    .then(exercise => {
        exercise.description = req.body.description;
        exercise.sets = Number(req.body.sets);
        exercise.duration = Number(req.body.duration);

        exercise.save()
        .then(()=> res.json('The exercise has been updated bro :)'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;