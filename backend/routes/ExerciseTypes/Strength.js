const router = require('express').Router();
let StrengthExercise = require('../../models/Strength.model');

router.route('/').get((req,res) => {
    StrengthExercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const email = req.body.email;
    const description = req.body.description;
    const weight = Number(req.body.weight);
    const sets = Number(req.body.sets);
    const reps = Number(req.body.reps);

    const newStrengthExercise = new StrengthExercise({
        email,
        description,
        weight,
        sets,
        reps
    });

    newStrengthExercise.save()
        .then(()=> res.json(' Strength Exercise added! BUFFLORD'))
        .catch(err => res.status(400).json('Error: hi' + err));
});

//get information of specific exercise by ID

router.route('/:id').get((req,res) => {
    StrengthExercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    StrengthExercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise Deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    StrengthExercise.findById(req.params.id)
    .then(exercise => {
        exercise.email = req.body.email;
        exercise.description = req.body.description;
        exercise.weight = Number(req.body.weight);
        exercise.sets = Number(req.body.sets);
        exercise.reps = Number(req.body.reps);

        exercise.save()
        .then(()=> res.json('The exercise has been updated bro :)'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;