# Mock Server

This is a mock server for the Hot Tub app. It is used to mock the API responses for the app.

## Running the server

```bash
npm install
npm run dev
```

## API Endpoints

### Status

```bash
curl -X POST http://localhost:3000/api/status -d '{"page":"1","channel":"hottub","sort":"popular","sexuality":"straight","query":"test"}'
```

### Popular Videos

```bash
curl -X POST http://localhost:3000/api/videos -d '{"page":"1","channel":"hottub","sort":"popular","sexuality":"straight"}'
```

### Search Videos

```bash
curl -X POST http://localhost:3000/api/videos -d '{"page":"1","channel":"hottub","sort":"popular","sexuality":"straight","query":"test"}'
```

## Parameters

- **page**: The page number for pagination (e.g., "1").
- **channel**: The network/channel to filter and/or route to the correct results (e.g., "hottub").
- **sort**: The sorting order of the results (e.g., "popular").
- **sexuality**: The sexuality filter for the videos (e.g., "straight").
- **query**: The search query string (e.g., "test").
