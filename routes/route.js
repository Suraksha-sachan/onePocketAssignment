import express from 'express';
import { sumOfArrayIntegers } from '../controller/controller.js';
const router = express.Router();

// POST http://localhost:3000/sumOfArrayIntegers and body : [1,2,3,4]

router.post('/sumOfArrayIntegers', sumOfArrayIntegers);

export default router;