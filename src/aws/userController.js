const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: "AKIAY3L35MCRZNIRGT6N",
    secretAccessKey: "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",
    region: "ap-south-1",
});
const s3 = new AWS.S3();


module.exports = {
    uploadFile : async (req, res) => {
        try {
            const { userName } = req.params;
            const { fileName, fileData } = req.body;
            const params = {
                Bucket: 'classroom-training-bucket',
                Key: `${userName}/${fileName}`,
                Body: fileData
            };
            s3.upload(params, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err.message);
                } else {
                    return res.status(200).send(`File ${fileName} uploaded successfully`);
                }
            });
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    downloadFile : async (req, res) => {
        try {
            const { userName, fileName } = req.params;
            const params = {
                Bucket: 'classroom-training-bucket',
                Key: `${userName}/${fileName}`
            };
            s3.getObject(params, (err, data) => {
                if (err) {
                    console.log(err);
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
            const { userName, fileName } = req.params;
            const params = {
                Bucket: 'classroom-training-bucket',
                Prefix: `${userName}/${fileName}`
            };
            s3.listObjectsV2(params, (err, data) => {
                if (err) {
                    console.log(err);
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