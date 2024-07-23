const { UploadsController } = require("../controllers/upload");
const { uploadMiddleware } = require("../middleware/FileUploadMiddleware");

const router = require("express").Router()

router.post("/files", uploadMiddleware, UploadsController.upload);

module.exports.UploadsRoute = router;