import { Router } from 'express'
import authentication from '../middleware/authentication.js'
import { login, otp_verify, setup_profile, get_profile, update_profile } from '../controllers/authController.js'

const router = Router()

router.post('/login', login)
router.post('/otp-verify', otp_verify)
router.post('/setup-profile', authentication, setup_profile)
router.post('/get-profile', authentication, get_profile)
router.post('/update-profile', authentication, update_profile)

export default router