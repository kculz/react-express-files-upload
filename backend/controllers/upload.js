
const upload = async (req, res) => {
    console.log("Body", req.body);
    console.log("Files", req.files[0].fieldname);
}

module.exports.UploadsController = { upload };