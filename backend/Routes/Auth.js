import express from 'express'
import {register,login,adminLogin} from '../controllers/authControllers.js'


const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.post('/admin/login',adminLogin)


export default router