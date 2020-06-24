const router = require('express').Router();
let AgilityWorkout = require('../../models/WorkoutSchema/AgWorkout.model');

router.route('/').get((req,res) => {
    AgilityWorkout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    
    const exercise1 = AgilitySchema(req.body.exercise1);
    const exercise2 = AgilitySchema(req.body.exercise2);
    const exercise3 = AgilitySchema(req.body.exercise3);
    const exercise4 = AgilitySchema(req.body.exercise4);

    const newAgilityWorkout = new AgilityWorkout({
        exercise1,
        exercise2,
        exercise3,
        exercise4

    });

    newAgilityWorkout.save()
        .then(()=> res.json('Agility Workout Added!'))
        .catch(err => res.status(400).json('Error: hi' + err));
});

//get information of specific exercise by ID

router.route('/:id').get((req,res) => {
    AgilityWorkout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    AgilityWorkout.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Workout Deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    AgilityWorkout.findById(req.params.id)
    .then(workout => {
        
        workout.exercise1 = AgilitySchema(req.body.exercise1);
        workout.exercise2 = AgilitySchema(req.body.exercise2);
        workout.exercise3 = AgilitySchema(req.body.exercise3);
        workout.exercise4 = AgilitySchema(req.body.exercise4);

        workout.save()
        .then(()=> res.json('The workout has been updated bro :)'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;