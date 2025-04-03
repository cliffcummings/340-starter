const express = require('express');
const router = express.Router();

// Static Routes for files in public directory
// Set up "public" folder / subfolders for static files
router.use(express.static("public"));

// Below required for render.com (not localhost)
router.use("/css", express.static(__dirname + "public/css"));
router.use("/js", express.static(__dirname + "public/js"));
router.use("/images", express.static(__dirname + "public/images"));
router.use("/TBD", express.static(__dirname + "public/TBD"));

// Allows server.js to call app.use(router)
module.exports = router;



