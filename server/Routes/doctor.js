import express from 'express'
import {deleteDoctor, getAllDoctor,getSingleDoctor, updateDoctor} from '../Controllers/doctorontroller.js'
import {authenticate,restrict} from '../auth/verifyToken.js'
import reviewRouter from './review.js'

const router=express.Router()

router.use('/:doctorId/review',reviewRouter)

router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,restrict(['doctor']),updateDoctor)
router.delete('/:id',authenticate,restrict(['doctor']),deleteDoctor)

export default router