const router = require('express').Router();
let EnduranceExercise = require('../../models/Endurance.model');

router.route('/').get((req,res) => {
    EnduranceExercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const email = req.body.email;
    const description = req.body.description;
    const duration = Number(req.body.duration);

    const newEndurance = new EnduranceExercise({
        email,
        description,
        duration
    });

    newEndurance.save()
        .then(()=> res.json('KEEP ENDURING'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get information of specific exercise by ID

router.route('/:id').get((req,res) => {
    EnduranceExercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    EnduranceExercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise Deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    EnduranceExercise.findById(req.params.id)
    .then(exercise => {
        exercise.email = req.body.email;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);

        exercise.save()
        .then(()=> res.json('The exercise has been updated bro :)'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;