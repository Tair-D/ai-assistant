const express = require('express');
const multer = require('multer');
const { handleAudioRequest } = require('../controllers/assistant');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/api/ask', upload.single('audio'), handleAudioRequest);

module.exports = router;