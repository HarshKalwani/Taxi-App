const express = require ('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller')
const authMiddleWare = require('../middlewares/auth.middlewares');

router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min : 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:3}).withMessage('Password must be at least 6 characters long')
],userController.registerUser)

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password is Incorrect')
], userController.loginUser)


router.get('/profile',authMiddleWare.authUser ,userController.getUserProfile)
router.get('/logout',authMiddleWare.authUser , userController.logoutUser);

module.exports = router;