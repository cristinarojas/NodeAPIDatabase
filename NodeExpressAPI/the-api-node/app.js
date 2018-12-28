// Dependencies.
import express from 'express'
import path from 'path';

// Controllers - all methods
import apiController from './controllers/api';

// Express Application
const app = express();

// Middleware - execute asyncronamente.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', apiController);

app.listen(3000);
