import { useState } from "react";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');`;

const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #F5F2ED;
    min-height: 100vh;
  }

  .app {
    min-height: 100vh;
    background: #F5F2ED;
    color: #1A1814;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 60px 20px 40px;
  }

  .header {
    text-align: center;
    margin-bottom: 48px;
  }

  .header h1 {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #8A8680;
    margin-bottom: 8px;
  }

  .header p {
    font-size: 28px;
    font-weight: 300;
    color: #1A1814;
    letter-spacing: -0.5px;
  }

  .search-box {
    display: flex;
    gap: 0;
    width: 100%;
    max-width: 480px;
    margin-bottom: 48px;
    border: 1px solid #D8D4CE;
    background: #FDFCFA;
  }

  .search-box input {
    flex: 1;
    padding: 14px 18px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #1A1814;
    background: transparent;
    border: none;
    outline: none;
  }

  .search-box input::placeholder { color: #B8B4AE; }

  .search-box button {
    padding: 14px 20px;
    background: #1A1814;
    color: #F5F2ED;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.1em;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }

  .search-box button:hover { background: #2E2A24; }
  .search-box button:disabled { background: #8A8680; cursor: not-allowed; }

  .result {
    width: 100%;
    max-width: 480px;
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .location-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid #D8D4CE;
  }

  .location-name { font-size: 22px; font-weight: 400; letter-spacing: -0.3px; }

  .location-date {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #8A8680;
    letter-spacing: 0.05em;
  }

  .main-temp { margin-bottom: 32px; }

  .temp-value {
    font-family: 'DM Mono', monospace;
    font-size: 72px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -3px;
    color: #1A1814;
  }

  .temp-unit {
    font-family: 'DM Mono', monospace;
    font-size: 24px;
    font-weight: 300;
    color: #8A8680;
    vertical-align: super;
  }

  .condition {
    font-size: 15px;
    font-weight: 300;
    color: #5A5650;
    margin-top: 6px;
    text-transform: capitalize;
  }

  .data-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #D8D4CE;
    border: 1px solid #D8D4CE;
    margin-bottom: 24px;
  }

  .data-cell { background: #FDFCFA; padding: 16px 18px; }

  .data-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #8A8680;
    margin-bottom: 6px;
  }

  .data-value { font-size: 16px; font-weight: 400; color: #1A1814; }

  .forecast-section { margin-top: 8px; }

  .forecast-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #8A8680;
    margin-bottom: 12px;
  }

  .forecast-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #EDEAE4;
  }

  .forecast-row:last-child { border-bottom: none; }

  .forecast-time {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #8A8680;
    width: 60px;
  }

  .forecast-desc {
    font-size: 14px;
    font-weight: 300;
    color: #5A5650;
    flex: 1;
    padding: 0 12px;
  }

  .forecast-temp {
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    color: #1A1814;
  }

  .summary-block {
    margin-top: 24px;
    padding: 18px;
    background: #EDEAE4;
    border-left: 2px solid #1A1814;
  }

  .summary-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #8A8680;
    margin-bottom: 8px;
  }

  .summary-text {
    font-size: 14px;
    font-weight: 300;
    color: #2E2A24;
    line-height: 1.7;
  }

  .error {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #B05040;
    text-align: center;
    padding: 16px;
    border: 1px solid #E8C8C0;
    background: #FDF8F6;
    max-width: 480px;
    width: 100%;
  }

  .loading {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #8A8680;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .dot-anim::after {
    content: '';
    animation: dots 1.5s infinite;
  }

  @keyframes dots {
    0% { content: ''; }
    33% { content: '.'; }
    66% { content: '..'; }
    100% { content: '...'; }
  }
`;

function parseWeatherData(text) {
  try {
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/(\{[\s\S]*\})/);
    if (jsonMatch) return JSON.parse(jsonMatch[1]);
  } catch {}
  return null;
}

export default function App() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!location.trim()) return;
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const today = new Date().toLocaleDateString("en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
      });

      const prompt = `You are a weather assistant. The user wants the weather forecast for: "${location}" on ${today}.

Use your web search tool to find the current weather and today's forecast for this location.

After searching, respond ONLY with a JSON object (no markdown, no explanation) in this exact format:
{
  "location": "City, Country",
  "date": "Day, Month DD",
  "temperature": "23",
  "unit": "C",
  "condition": "Partly cloudy",
  "feelsLike": "21°C",
  "humidity": "65%",
  "wind": "14 km/h NW",
  "uvIndex": "Moderate",
  "forecast": [
    { "time": "Morning", "desc": "Sunny spells", "temp": "20°C" },
    { "time": "Afternoon", "desc": "Partly cloudy", "temp": "24°C" },
    { "time": "Evening", "desc": "Clear skies", "temp": "19°C" },
    { "time": "Night", "desc": "Mild, clear", "temp": "16°C" }
  ],
  "summary": "One or two sentence plain-English summary of what to expect today."
}

Only respond with the JSON. No other text.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: [{ role: "user", content: prompt }]
        })
      });

      const data = await response.json();
      const fullText = (data.content || [])
        .filter(b => b.type === "text")
        .map(b => b.text)
        .join("\n");

      const parsed = parseWeatherData(fullText);
      if (parsed) {
        setWeather(parsed);
      } else {
        setError("Could not parse weather data. Please try again.");
      }
    } catch (err) {
      setError("Failed to fetch weather. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => { if (e.key === "Enter") fetchWeather(); };

  return (
    <>
      <style>{FONTS}</style>
      <style>{styles}</style>
      <div className="app">
        <div className="header">
          <h1>Weather Forecast</h1>
          <p>What's the sky doing today?</p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city or location..."
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyDown={handleKey}
          />
          <button onClick={fetchWeather} disabled={loading || !location.trim()}>
            {loading ? "..." : "Predict →"}
          </button>
        </div>

        {loading && <p className="loading">Fetching forecast<span className="dot-anim" /></p>}
        {error && <div className="error">{error}</div>}

        {weather && !loading && (
          <div className="result">
            <div className="location-row">
              <span className="location-name">{weather.location}</span>
              <span className="location-date">{weather.date}</span>
            </div>

            <div className="main-temp">
              <div>
                <span className="temp-value">{weather.temperature}</span>
                <span className="temp-unit">°{weather.unit}</span>
              </div>
              <div className="condition">{weather.condition}</div>
            </div>

            <div className="data-grid">
              <div className="data-cell">
                <div className="data-label">Feels Like</div>
                <div className="data-value">{weather.feelsLike}</div>
              </div>
              <div className="data-cell">
                <div className="data-label">Humidity</div>
                <div className="data-value">{weather.humidity}</div>
              </div>
              <div className="data-cell">
                <div className="data-label">Wind</div>
                <div className="data-value">{weather.wind}</div>
              </div>
              <div className="data-cell">
                <div className="data-label">UV Index</div>
                <div className="data-value">{weather.uvIndex}</div>
              </div>
            </div>

            {weather.forecast?.length > 0 && (
              <div className="forecast-section">
                <div className="forecast-label">Today's Timeline</div>
                {weather.forecast.map((slot, i) => (
                  <div className="forecast-row" key={i}>
                    <span className="forecast-time">{slot.time}</span>
                    <span className="forecast-desc">{slot.desc}</span>
                    <span className="forecast-temp">{slot.temp}</span>
                  </div>
                ))}
              </div>
            )}

            {weather.summary && (
              <div className="summary-block">
                <div className="summary-label">Summary</div>
                <p className="summary-text">{weather.summary}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
