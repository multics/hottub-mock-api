import express, { Request, Response } from "express";
import { status } from "./routes/api/status";
import { getVideos } from "./routes/api/videos";

const app = express();

app.use(express.json());

// Root route
app.get("/api", (req: Request, res: Response) => {
  res.send("Yahaha! You found me!");
});

// Status route
app.post("/api/status", status);

// Popular videos route
app.post("/api/videos", getVideos);

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
