const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');

function convertAudio(inputPath, outputPath) {
	return new Promise((resolve, reject) => {
		ffmpeg(inputPath)
			.toFormat('wav')
			.on('end', () => resolve(outputPath))
			.on('error', (err) => reject(err))
			.save(outputPath);
	});
}

function cleanupFiles(filePaths) {
	filePaths.forEach((path) => {
		fs.unlink(path, (err) => {
			if (err) console.error('Error deleting file:', err);
		});
	});
}

module.exports = { convertAudio, cleanupFiles };