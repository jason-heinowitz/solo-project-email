const router = require('express').Router();
const authController = require('../controllers/authController');

// Login
router.post(
  '/login',
  authController.isUsernameValid,
  authController.checkUsernamePassword,
  authController.createSession
);

// Register
router.post(
  '/register',
  authController.isUsernameValid,
  authController.createUser,
  authController.createSession
);

// Logout
router.post('/logout', authController.logout);

// Validate JWT
router.get('/validate', authController.validateJWT);

// Get users
router.get('/users');

// Get own username
router.get('/self', authController.getUsername);

// Change password
router.post(
  '/newPassword',
  authController.checkUsernamePassword,
  authController.updatePassword
);

module.exports = router;
