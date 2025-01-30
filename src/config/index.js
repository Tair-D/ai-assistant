require('dotenv').config();
const { OpenAI } = require('openai');
const { tavily } = require('@tavily/core');

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

module.exports = { openai, tvly };