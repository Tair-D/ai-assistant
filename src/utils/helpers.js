function extractLocation(question) {
	const locationMatch = question.match(/in\s+([a-zA-Z\s]+)/i);
	return locationMatch ? locationMatch[1].trim() : 'London';
}

module.exports = { extractLocation };