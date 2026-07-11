# Weather Generation

The weather generation tool is a procedural engine that creates realistic multi-day weather patterns for the fantasy world.

## Overview

**Script:** `z_Scripts/JS/weatherGenerator.js`
**Configuration:** `1. DM Toolkit/Tools/Weather Generation.md`
**Output:** `weather.json`

The generator reads season and climate configuration from the Weather Generation note's frontmatter, then produces a full year of daily weather data including temperature, precipitation, and wind conditions.

## Running the Generator

```bash
# Install dependencies (first time only)
npm install

# Run the weather generator
node z_Scripts/JS/weatherGenerator.js
```

The output is written to `weather.json` at the vault root.

## Configuration

Weather configuration is stored in the frontmatter of `1. DM Toolkit/Tools/Weather Generation.md`. It defines:

- **Seasons** — name, duration, temperature ranges, precipitation chances
- **Climates** — climate zones with modifiers for temperature and precipitation
- **States** — weather condition rules that map temperature/precipitation to descriptive states

## How It Works

### Temperature

- Each season defines a base temperature range (min/max)
- Daily temperatures blend toward the seasonal target using a **continuity blend rate** of 30%, creating smooth day-to-day transitions instead of random jumps
- Random flux is applied within the season's temperature range

### Precipitation

- Seasons define a base chance of precipitation per day
- Precipitation clusters into **multi-day events** (1–3 consecutive days) for realism
- The generator tracks precipitation state to avoid unrealistic patterns

### Wind

- Wind speeds are calculated with seasonal modifiers
- Different seasons produce different base wind patterns

### Season Transitions

The generator calculates a percentage through each season and blends between the current and adjacent seasons for smooth transitions. A day at the start of summer will have weather influenced by the preceding spring.

## Core Functions

| Function | Purpose |
|----------|---------|
| `getDayInYear()` | Calculates day number within the year |
| `getTotalDaysInYear()` | Returns total days in the calendar year |
| `getSeason()` | Determines current season for a given date |
| `getPercentThroughSeason()` | Calculates progress through the current season (0–1) |
| `getTempBaseTemp()` | Gets base temperature for a season |
| `getTempRange()` | Calculates temperature range with blending |
| `getRainDaysInSeason()` | Determines precipitation days per season |
| `getPrecipitation()` | Generates precipitation data for a day |
| `getWind()` | Generates wind data with seasonal modifiers |
| `getWeatherForDate()` | Composes complete weather for a single day |
| `getWeatherForYearByClimate()` | Generates a full year of weather for a climate |
| `evaluateCondition()` | Safely evaluates weather condition rules |
| `getStates()` | Applies condition rules to determine weather descriptions |

## Output Format

The `weather.json` file contains weather data organized by climate zone, with daily entries including:

- Temperature (high/low)
- Precipitation type and amount
- Wind speed and direction
- Weather state descriptions
- Season information
