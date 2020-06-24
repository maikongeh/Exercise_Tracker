const router = require('express').Router();
let ExplosiveExercise = require('../../models/Explosive.model');

router.route('/').get((req,res) => {
    ExplosiveExercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const description = req.body.description;
    const sets = Number(req.body.sets);
    const reps = Number(req.body.reps);
    const date = Date.parse(req.body.date);

    const newExplosiveExercise = new ExplosiveExercise({
        description,
        sets,
        reps,
        date
    });

    newExplosiveExercise.save()
        .then(()=> res.json(' Explosive Exercise added! EXPLOSION KING'))
        .catch(err => res.status(400).json('Error: hi' + err));
});

//get information of specific exercise by ID

router.route('/:id').get((req,res) => {
    ExplosiveExercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    ExplosiveExercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise Deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    ExplosiveExercise.findById(req.params.id)
    .then(exercise => {
        exercise.description = req.body.description;
        exercise.sets = Number(req.body.sets);
        exercise.reps = Number(req.body.reps);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(()=> res.json('The exercise has been updated bro :)'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;