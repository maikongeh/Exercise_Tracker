const router = require('express').Router();
let EnduranceWorkout = require('../../models/WorkoutSchema/EnWorkout.model');
const mongoose = require('mongoose');

router.route('/').get((req,res) => {
    EnduranceWorkout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const difficulty = req.body.difficulty
    const exercise1 = req.body.exercise1;
    const exercise2 = req.body.exercise2;
    const exercise3 = req.body.exercise3;
    const exercise4 = req.body.exercise4;

    const newEnduranceWorkout = new EnduranceWorkout({
        difficulty,
        exercise1,
        exercise2,
        exercise3,
        exercise4

    });

    newEnduranceWorkout.save()
        .then(()=> res.json('Endurance Workout Added!'))
        .catch(err => res.status(400).json('Error: hi' + err));
});

//get information of specific exercise by ID

router.route('/:id').get((req,res) => {
    EnduranceWorkout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    EnduranceWorkout.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Workout Deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    EnduranceWorkout.findById(req.params.id)
    .then(workout => {
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