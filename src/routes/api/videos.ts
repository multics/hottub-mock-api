import { Request, Response } from "express";
import registry from "../../providers";

export const getVideos = async (req: Request, res: Response) => {
  const searchResults = await registry.getVideos(req.body.channel, req.body);
  res.json(searchResults);
};
