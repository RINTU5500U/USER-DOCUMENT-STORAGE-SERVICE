const express = require("express");
const router = express.Router();

const { uploadFile, downloadFile, searchFile } = require("../controllers/awsController");
const { createUser, login, updateUser, deleteUser } = require('../controllers/userController')
const { authentication, authorization } = require('../middlewares/auth')
const { userValidation, updateUserValidation, loginValidation } = require('../middlewares/validator')

router.post('/createUser', userValidation, createUser)
router.post('/login', loginValidation, login)
router.put('/updateUser/:userId', authentication, authorization, updateUserValidation, updateUser)
router.delete('/deleteUser/:userId', authentication, authorization, deleteUser)

router.post('/uploadFile/:userId', uploadFile)
router.get('/user/:userId/searchFile/:fileId', searchFile)
router.get('/user/:userId/downloadFile/:fileId', downloadFile)

router.all("/*", (req, res) => {
  return res.status(400).send({ status: false, msg: "end point is not valid" });
});

module.exports = router;
