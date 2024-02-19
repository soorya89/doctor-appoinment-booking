import express from 'express'
import {deleteDoctor, getAllDoctor,getSingleDoctor, updateDoctor,getDoctorProfile} from '../controllers/doctorController.js'
import {authenticate,restrict} from '../auth/verifyToken.js'
// import ReviewRouter from './review.js'

const router=express.Router()

// router.get('/:doctorId/review',ReviewRouter)

router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,restrict(['doctor']),updateDoctor)
router.delete('/:id',authenticate,restrict(['doctor']),deleteDoctor)