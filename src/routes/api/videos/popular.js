import items from "../../../data/cat_videos.js";

export const popularVideos = (req, res) => {
  res.json({ items, pageInfo: { hasNextPage: false } });
};
