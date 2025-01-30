// src/controllers/assistant.js
const { convertAudio, cleanupFiles } = require('../services/audio');
const { getWeather } = require('../services/weather');
const { performSearch } = require('../services/search');
const { transcribeAudio, generateChatResponse, textToSpeech } = require('../services/openai');
const { extractLocation } = require('../utils/helpers');

async function handleAudioRequest(req, res) {
	try {
		if (!req.file) {
			return res.status(400).send('No audio file uploaded');
		}

		const outputPath = req.file.path + '.wav';
		await convertAudio(req.file.path, outputPath);

		const userQuestion = await transcribeAudio(outputPath);
		console.log('User Question:', userQuestion);

		let responseText;
		if (userQuestion.toLowerCase().includes('weather')) {
			const location = extractLocation(userQuestion);
			responseText = await getWeather(location);
		} else if (userQuestion.toLowerCase().includes('search')) {
			responseText = await performSearch(userQuestion);
		} else {
			responseText = await generateChatResponse(userQuestion);
		}

		const audioBuffer = await textToSpeech(responseText);
		res.set('Content-Type', 'audio/mpeg');
		res.send(audioBuffer);

		cleanupFiles([req.file.path, outputPath]);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send('Error processing request');
	}
}

module.exports = { handleAudioRequest };