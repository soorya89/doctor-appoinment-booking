
import express from 'express'
import { getAllUser } from '../controllers/userControllers.js'
import {getAllAdminDoctor} from '../controllers/doctorController.js'

const router=express.Router()


router.get('/user-list',getAllUser)
router.get('/doctor-list',getAllAdminDoctor)

export default router
