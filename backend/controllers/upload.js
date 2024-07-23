const { Files } = require("../models");
const { CLIENT_ORIGIN } = require("../config")
const upload = async (req, res) => {
    console.log("Body", req.body);

    if(!req.files) return res.status(400).json({
        success: false,
        msg: "Please upload file."
    });

    const uploaded = await Files.create({
        name: req.body.name,
        url: `${CLIENT_ORIGIN}/${req.files[0].path}`
        
    });

    if(!uploaded) return res.status(400).json({
        success: false,
        msg: "Failed to upload files."
    });

    console.log("Files", req.files);
}

module.exports.UploadsController = { upload };