# Odds Ticker

Odds Ticker is a single page application designed to show betting odds and scores in an easy to read format.

## Sports Data

All sports data (odds/scores/metadata) that is stored and presented to the user is fetched from 'the odds-api' (https://the-odds-api.com/).  This service provides sports betting data from bookmakers around the world.

### Data Freshness

We have multiple jobs running at different times to refresh our sports data.
- Games: runs daily to add future game data to our database
- Odds: runs daily to refresh existing odds data for games currently in our database
- Scores: runs every minute to update scores when a game is live

### Odds

In addition to showing the current score of a game, we show three different odds markets per game (if applicable): h2h (moneyline), spreads (points handicaps), totals (over/under).

### Supported Sports

Currently we support three sports: NFL, NCAAF, MLB.

## Architecture

The project is built using React for the frontend, Rails for the backend domain layer and api structure, and MongoDb for data storage.

## Backlog
### MVP
- frontend
  - show odds for sport for day
  - choose sport(s) to display
  - show odds for multiple sports based on user choice
  - refresh odds/score data
  - landing page
- backend
  - setup jobs on a schedule

### Feature
- ability to choose which bookmaker's odds are displayed
- support for more sports

### Technical Debt
- queries with no results need to be handled/return empty json
- validate incoming schema or schema when writing to mongodb
- check if api call to odds api fails
