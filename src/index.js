import express from "express";
import { status } from "./routes/api/status.js";
import { channels } from "./routes/api/channels.js";
import { popularVideos } from "./routes/api/videos/popular.js";
import { searchVideos } from "./routes/api/videos/search.js";

const app = express();

app.use(express.json());

// Root route
app.get("/api", (req, res) => res.send("Yahaha! You found me!"));

// Status route
app.post("/api/status", status);

// Channels route
app.post("/api/channels", channels);

// Popular videos route
app.post("/api/videos/popular", popularVideos);

// Search videos route
app.post("/api/videos/search", searchVideos);

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
