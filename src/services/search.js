const { tvly } = require('../config');

async function performSearch(query) {
	const searchQuery = query.trim();

	console.log('Search Query:', searchQuery);
	console.log('Search Query Type:', typeof searchQuery);

	if (!searchQuery) {
		return 'Please provide a valid search query.';
	}

	try {
		const searchResults = await tvly.search(query, {
			searchDepth: 'basic',
			includeAnswer: true,
			includeRawContent: false,
			maxTokens: 3,
		});

		if (searchResults.answer) {
			return `Answer: ${searchResults.answer}`;
		} else {
			return `Search results: ${searchResults.results
				.map((r) => r.title)
				.join(', ')}`;
		}
	} catch (error) {
		console.error('Tavily API Error:', error.response?.data || error.message);
		return 'Sorry, I could not perform the search.';
	}
}

module.exports = { performSearch };