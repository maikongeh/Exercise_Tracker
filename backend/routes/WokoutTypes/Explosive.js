const router = require('express').Router();
let ExplosiveWorkout = require('../../models/WorkoutSchema/ExWorkout.model');
const mongoose = require('mongoose');
const auth = require('../../middleware/auth')

router.route('/').get( auth, (req,res) => {
    ExplosiveWorkout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/ath').get((req,res) => {
    ExplosiveWorkout.find()
    .then(workout=> res.json(workout))
    .catch(err => res.status(400).json('Error:' + err ));
})


router.route('/add').post(auth,(req,res) => {

    const description = req.body.description;
    const email = req.body.email;
    const difficulty = req.body.difficulty;
    const exercise1 = req.body.exercise1;
    const exercise2 = req.body.exercise2;
    const exercise3 = req.body.exercise3;
    const exercise4 = req.body.exercise4;

    const newExplosiveWorkout = new ExplosiveWorkout({
        description,
        email,
        difficulty,
        exercise1,
        exercise2,
        exercise3,
        exercise4

    });

    newExplosiveWorkout.save()
        .then(()=> res.json('Explosive Workout Added!'))
        .catch(err => res.status(400).json('Error: hi' + err));
});

//get information of specific exercise by ID

router.route('/:id').get((req,res) => {
    ExplosiveWorkout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    ExplosiveWorkout.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Workout Deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    ExplosiveWorkout.findById(req.params.id)
    .then(workout => {
        workout.description = req.body.description;
        workout.email = req.body.email;
        workout.difficulty = req.body.difficulty;
        workout.exercise1 = req.body.exercise1;
        workout.exercise2 = req.body.exercise2;
        workout.exercise3 = req.body.exercise3;
        workout.exercise4 = req.body.exercise4;

        workout.save()
        .then(()=> res.json('The workout has been updated bro :)'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;