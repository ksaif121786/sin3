import { Router } from 'express'
import { login, otp_verify, setup_profile } from '../controllers/authController.js'

const router = Router()

router.post('/login', login)
router.post('/otp-verify', otp_verify)
router.post('/setup-profile', setup_profile)

export default router