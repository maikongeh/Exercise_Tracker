const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}) 

app.use(cors());
app.use(express.json());

const StrengthRouter = require('./routes/ExerciseTypes/Strength');
const ExplosiveRouter = require('./routes/ExerciseTypes/Explosive');
const EnduranceRouter = require('./routes/ExerciseTypes/Endurance');
const AgilityRouter = require('./routes/ExerciseTypes/Agility');
const AgTypeRouter = require('./routes/Descriptions/AgilityDes');
const EnTypeRouter = require('./routes/Descriptions/EnduranceDes');
const ExTypeRouter = require('./routes/Descriptions/ExplosiveDes');
const StrTypeRouter = require('./routes/Descriptions/StrengthDes');
const NumRouter = require('./routes/Numbers/OneToTen');
const SportTypeRouter = require('./routes/SportTypes/SportName');
const AgWorkoutRouter = require('./routes/WokoutTypes/Agility');
const StrWorkoutRouter = require('./routes/WokoutTypes/Strength');
const EnWorkoutRouter = require('./routes/WokoutTypes/Endurance');
const ExWorkoutRouter = require('./routes/WokoutTypes/Explosive');
const UserRouter = require('./routes/Users/users');
const AuthRouter = require('./routes/auth');
const DifficultyRouter = require('./routes/difficulty')



app.use('/Strength', StrengthRouter);
app.use('/Explosive', ExplosiveRouter);
app.use('/Endurance', EnduranceRouter);
app.use('/Agility', AgilityRouter);
app.use('/AgType', AgTypeRouter);
app.use('/EnType', EnTypeRouter);
app.use('/ExType', ExTypeRouter);
app.use('/StrType', StrTypeRouter);
app.use('/Num', NumRouter);
app.use('/SportType', SportTypeRouter);
app.use('/AgWorkout', AgWorkoutRouter);
app.use('/StrWorkout', StrWorkoutRouter);
app.use('/EnWorkout', EnWorkoutRouter);
app.use('/ExWorkout', ExWorkoutRouter);
app.use('/user', UserRouter);
app.use('/auth', AuthRouter);
app.use('/difficulty', DifficultyRouter);

app.listen(port, ()=> {
    console.log('Server is running on port: ' + port);
});