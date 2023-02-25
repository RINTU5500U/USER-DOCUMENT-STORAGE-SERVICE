const fileModel = require('../models/fileModel')
const userModel = require('../models/userModel')
const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: "AKIAY3L35MCRZNIRGT6N",
    secretAccessKey: "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",
    region: "ap-south-1",
});
const s3 = new AWS.S3({ appVersion: "2006-03-01" });

module.exports = {
    uploadFile : async (req, res) => {
        try {
            const { userId } = req.params;
            const file = req.files[0]
            const { originalname } = file
            const userData = await userModel.findOne({_id: userId, isDeleted: false})
            if (!userData) {
                return res.status(404).send({ status: false, msg: 'User not found' })
            }
            const uploadedFile = async (file) => {
                return new Promise(function (resolve, reject) {
                    const { originalname, buffer } = file
                    const uploadParams = {
                        Bucket: "classroom-training-bucket",
                        Key: `${userData.name}/${originalname}`,
                        Body: buffer,
                    };

                    s3.upload(uploadParams, (err, data) => {
                        if (err) {
                            return reject({ error: err });
                        } else {
                            return resolve(data.Location);
                        }
                        });
                    });
                };

                uploadedFile(file).then( async (data) => {
                    let saveData = await fileModel.create({ userId: userId, fileName: originalname, file: data})
                    return res.status(201).send({ status: true, msg: `${originalname} file uploaded to aws s3 successfully`, File: saveData})
                }).catch((err)=>{
                    console.log(err)
                    res.status(400).send(err)
                })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    downloadFile : async (req, res) => {
        try {
            const { userId, fileId } = req.params;
            const userData = await fileModel.findOne({ userId: userId, _id: fileId, isDeleted: false}).populate('userId')
            if (!userData) {
                return res.status(404).send({ status: false, msg: 'User not found' })
            }
            const userName = userData.userId.name
            const fileName = userData.fileName
            const params = {
                Bucket: 'classroom-training-bucket',
                Key: `${userName}/${fileName}`
            };
            s3.getObject(params, (err, data) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
                    res.setHeader('Content-type', data.ContentType);
                    return res.status(200).send(data.Body);
                }
            });
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    searchFile : async (req, res) => {
        try {
            const { userId, fileId } = req.params;
            const userData = await fileModel.findOne({ userId: userId, _id: fileId, isDeleted: false}).populate('userId')
            if (!userData) {
                return res.status(404).send({ status: false, msg: 'User not found' })
            }
            const userName = userData.userId.name
            const fileName = userData.fileName
            const params = {
                Bucket: 'classroom-training-bucket',
                Prefix: `${userName}/${fileName}`
            };
            s3.listObjectsV2(params, (err, data) => {
                if (err) {
                    return res.status(500).send(err.message);
                } else {
                    const files = data.Contents.map(obj => obj.Key);
                    return res.status(200).send(files);
                }
            });
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    }
}