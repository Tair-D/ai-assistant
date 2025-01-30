const { openai } = require('../config');

async function transcribeAudio(filePath) {
	const transcription = await openai.audio.transcriptions.create({
		file: fs.createReadStream(filePath),
		model: 'whisper-1',
	});
	return transcription.text;
}

async function generateChatResponse(userQuestion) {
	const chatCompletion = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: [{ role: 'user', content: userQuestion }],
	});
	return chatCompletion.choices[0].message.content;
}

async function textToSpeech(text) {
	const mp3 = await openai.audio.speech.create({
		model: 'tts-1',
		voice: 'alloy',
		input: text,
	});
	return Buffer.from(await mp3.arrayBuffer());
}

module.exports = { transcribeAudio, generateChatResponse, textToSpeech };