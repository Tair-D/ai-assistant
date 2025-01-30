# AI Voice Assistant with Weather and Search Integration

This project is a **Node.js backend** for an AI-powered voice assistant that can:
- Accept **audio input** from users.
- Process the audio using **OpenAI Whisper** for speech-to-text.
- Provide **audio output** using **OpenAI TTS** (Text-to-Speech).
- Answer questions about the **current weather** using **WeatherAPI**.
- Perform **web searches** using **Tavily Search API**.
- Handle **database operations** (optional, not implemented in this version).

---

## Features

1. **Audio Interaction**:
    - Accepts user audio input (recorded in the frontend).
    - Converts audio to text using **OpenAI Whisper**.
    - Converts AI responses to audio using **OpenAI TTS**.

2. **Weather Responses**:
    - Extracts location from user queries (e.g., "What's the weather in London?").
    - Fetches current weather data using **WeatherAPI**.

3. **Search Functionality**:
    - Performs web searches using **Tavily Search API**.
    - Returns summarized search results.

4. **Modular Codebase**:
    - The backend is organized into **controllers**, **services**, and **utils** for better maintainability.

---

## Technologies Used

### APIs and Libraries
1. **OpenAI API**:
    - Used for **speech-to-text** (Whisper) and **text-to-speech** (TTS).
    - [OpenAI Documentation](https://platform.openai.com/docs)

2. **WeatherAPI**:
    - Used to fetch current weather data for a specific location.
    - [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

3. **Tavily Search API**:
    - Used to perform web searches and retrieve summarized results.
    - [Tavily Documentation](https://tavily.com/docs)

4. **FFmpeg**:
    - Used to convert audio files to the required format (WAV) for OpenAI Whisper.
    - [FFmpeg Documentation](https://ffmpeg.org/documentation.html)

5. **Express.js**:
    - Used to build the backend server.
    - [Express Documentation](https://expressjs.com/)

6. **Multer**:
    - Used to handle file uploads (audio files).
    - [Multer Documentation](https://github.com/expressjs/multer)

7. **CORS**:
    - Used to enable Cross-Origin Resource Sharing for frontend-backend communication.
    - [CORS Documentation](https://github.com/expressjs/cors)

---

## Setup Instructions

### 1. Prerequisites
- **Node.js** (v16 or higher) installed.
- **FFmpeg** installed on your system.
- API keys for:
    - OpenAI ([Get API Key](https://platform.openai.com/signup))
    - WeatherAPI ([Get API Key](https://www.weatherapi.com/signup.aspx))
    - Tavily ([Get API Key](https://tavily.com/))

### 2. Clone the Repository
```bash
git clone https://github.com/tair-d/ai-voice-assistant.git
cd ai-voice-assistant
npm install
```
### 3. Create .env

.env
OPENAI_API_KEY=your_openai_api_key
WEATHER_API_KEY=your_weatherapi_key
TAVILY_API_KEY=your_tavily_api_key
PORT=3000

### 4. Clone the Repository
```bash
node index.js
```