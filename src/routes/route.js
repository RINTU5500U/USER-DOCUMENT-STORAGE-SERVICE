const express = require("express");
const router = express.Router();

const { uploadFile, downloadFile, searchFile} = require("../aws/userController");

router.post('/upload/:userName', uploadFile)
router.get('/download/:userName/:fileName', downloadFile)
router.get('/search/:userName/:fileName', searchFile)

router.all("/*", (req, res) => {
  return res.status(400).send({ status: false, msg: "end point is not valid" });
});

module.exports = router;
